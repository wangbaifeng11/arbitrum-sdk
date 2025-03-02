/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildToParentMessageWriter = exports.ChildToParentMessageReader = exports.ChildToParentMessage = void 0;
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const classic = __importStar(require("./ChildToParentMessageClassic"));
const nitro = __importStar(require("./ChildToParentMessageNitro"));
const lib_1 = require("../utils/lib");
const networks_1 = require("../dataEntities/networks");
const errors_1 = require("../dataEntities/errors");
/**
 * Base functionality for Child-to-Parent messages
 */
class ChildToParentMessage {
    isClassic(e) {
        return (0, lib_1.isDefined)(e.indexInBatch);
    }
    static fromEvent(parentSignerOrProvider, event, parentProvider) {
        return signerOrProvider_1.SignerProviderUtils.isSigner(parentSignerOrProvider)
            ? new ChildToParentMessageWriter(parentSignerOrProvider, event, parentProvider)
            : new ChildToParentMessageReader(parentSignerOrProvider, event);
    }
    /**
     * Get event logs for ChildToParent transactions.
     * @param childProvider
     * @param filter Block range filter
     * @param position The batchnumber indexed field was removed in nitro and a position indexed field was added.
     * For pre-nitro events the value passed in here will be used to find events with the same batchnumber.
     * For post nitro events it will be used to find events with the same position.
     * @param destination The parent destination of the ChildToParent message
     * @param hash The uniqueId indexed field was removed in nitro and a hash indexed field was added.
     * For pre-nitro events the value passed in here will be used to find events with the same uniqueId.
     * For post nitro events it will be used to find events with the same hash.
     * @param indexInBatch The index in the batch, only valid for pre-nitro events. This parameter is ignored post-nitro
     * @returns Any classic and nitro events that match the provided filters.
     */
    static async getChildToParentEvents(childProvider, filter, position, destination, hash, indexInBatch) {
        const childChain = await (0, networks_1.getArbitrumNetwork)(childProvider);
        const childNitroGenesisBlock = (0, networks_1.getNitroGenesisBlock)(childChain);
        const inClassicRange = (blockTag, nitroGenBlock) => {
            if (typeof blockTag === 'string') {
                // taking classic of "earliest", "latest", "earliest" and the nitro gen block
                // yields 0, nitro gen, nitro gen since the classic range is always between 0 and nitro gen
                switch (blockTag) {
                    case 'earliest':
                        return 0;
                    case 'latest':
                        return nitroGenBlock;
                    case 'pending':
                        return nitroGenBlock;
                    default:
                        throw new errors_1.ArbSdkError(`Unrecognised block tag. ${blockTag}`);
                }
            }
            return Math.min(blockTag, nitroGenBlock);
        };
        const inNitroRange = (blockTag, nitroGenBlock) => {
            // taking nitro range of "earliest", "latest", "earliest" and the nitro gen block
            // yields nitro gen, latest, pending since the nitro range is always between nitro gen and latest/pending
            if (typeof blockTag === 'string') {
                switch (blockTag) {
                    case 'earliest':
                        return nitroGenBlock;
                    case 'latest':
                        return 'latest';
                    case 'pending':
                        return 'pending';
                    default:
                        throw new errors_1.ArbSdkError(`Unrecognised block tag. ${blockTag}`);
                }
            }
            return Math.max(blockTag, nitroGenBlock);
        };
        // only fetch nitro events after the genesis block
        const classicFilter = {
            fromBlock: inClassicRange(filter.fromBlock, childNitroGenesisBlock),
            toBlock: inClassicRange(filter.toBlock, childNitroGenesisBlock),
        };
        const logQueries = [];
        if (classicFilter.fromBlock !== classicFilter.toBlock) {
            logQueries.push(classic.ChildToParentMessageClassic.getChildToParentEvents(childProvider, classicFilter, position, destination, hash, indexInBatch));
        }
        const nitroFilter = {
            fromBlock: inNitroRange(filter.fromBlock, childNitroGenesisBlock),
            toBlock: inNitroRange(filter.toBlock, childNitroGenesisBlock),
        };
        if (nitroFilter.fromBlock !== nitroFilter.toBlock) {
            logQueries.push(nitro.ChildToParentMessageNitro.getChildToParentEvents(childProvider, nitroFilter, position, destination, hash));
        }
        return (await Promise.all(logQueries)).flat(1);
    }
}
exports.ChildToParentMessage = ChildToParentMessage;
/**
 * Provides read-only access for Child-to-Parent messages
 */
class ChildToParentMessageReader extends ChildToParentMessage {
    constructor(parentProvider, event) {
        super();
        this.parentProvider = parentProvider;
        if (this.isClassic(event)) {
            this.classicReader = new classic.ChildToParentMessageReaderClassic(parentProvider, event.batchNumber, event.indexInBatch);
        }
        else {
            this.nitroReader = new nitro.ChildToParentMessageReaderNitro(parentProvider, event);
        }
    }
    async getOutboxProof(childProvider) {
        if (this.nitroReader) {
            return await this.nitroReader.getOutboxProof(childProvider);
        }
        else
            return await this.classicReader.tryGetProof(childProvider);
    }
    /**
     * Get the status of this message
     * In order to check if the message has been executed proof info must be provided.
     * @returns
     */
    async status(childProvider) {
        // can we create a ChildToParentMessage here, we need to - the constructor is what we need
        if (this.nitroReader)
            return await this.nitroReader.status(childProvider);
        else
            return await this.classicReader.status(childProvider);
    }
    /**
     * Waits until the outbox entry has been created, and will not return until it has been.
     * WARNING: Outbox entries are only created when the corresponding node is confirmed. Which
     * can take 1 week+, so waiting here could be a very long operation.
     * @param retryDelay
     * @returns outbox entry status (either executed or confirmed but not pending)
     */
    async waitUntilReadyToExecute(childProvider, retryDelay = 500) {
        if (this.nitroReader)
            return this.nitroReader.waitUntilReadyToExecute(childProvider, retryDelay);
        else
            return this.classicReader.waitUntilOutboxEntryCreated(childProvider, retryDelay);
    }
    /**
     * Estimates the Parent block number in which this Child-to-Parent tx will be available for execution.
     * If the message can or already has been executed, this returns null
     * @param childProvider
     * @returns expected Parent block number where the Child-to-Parent message will be executable. Returns null if the message can or already has been executed
     */
    async getFirstExecutableBlock(childProvider) {
        if (this.nitroReader)
            return this.nitroReader.getFirstExecutableBlock(childProvider);
        else
            return this.classicReader.getFirstExecutableBlock(childProvider);
    }
}
exports.ChildToParentMessageReader = ChildToParentMessageReader;
/**
 * Provides read and write access for Child-to-Parent messages
 */
class ChildToParentMessageWriter extends ChildToParentMessageReader {
    /**
     * Instantiates a new `ChildToParentMessageWriter` object.
     *
     * @param {Signer} parentSigner The signer to be used for executing the Child-to-Parent message.
     * @param {ChildToParentTransactionEvent} event The event containing the data of the Child-to-Parent message.
     * @param {Provider} [parentProvider] Optional. Used to override the Provider which is attached to `parentSigner` in case you need more control. This will be a required parameter in a future major version update.
     */
    constructor(parentSigner, event, parentProvider) {
        super(parentProvider !== null && parentProvider !== void 0 ? parentProvider : parentSigner.provider, event);
        if (this.isClassic(event)) {
            this.classicWriter = new classic.ChildToParentMessageWriterClassic(parentSigner, event.batchNumber, event.indexInBatch, parentProvider);
        }
        else {
            this.nitroWriter = new nitro.ChildToParentMessageWriterNitro(parentSigner, event, parentProvider);
        }
    }
    /**
     * Executes the ChildToParentMessage on Parent chain.
     * Will throw an error if the outbox entry has not been created, which happens when the
     * corresponding assertion is confirmed.
     * @returns
     */
    async execute(childProvider, overrides) {
        if (this.nitroWriter)
            return this.nitroWriter.execute(childProvider, overrides);
        else
            return await this.classicWriter.execute(childProvider, overrides);
    }
}
exports.ChildToParentMessageWriter = ChildToParentMessageWriter;
