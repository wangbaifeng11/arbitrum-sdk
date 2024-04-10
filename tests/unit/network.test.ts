import { expect } from 'chai'
import {
  resetNetworksToDefault,
  addCustomNetwork,
  getL1Network,
  getArbitrumNetwork,
  l1Networks,
  l2Networks as arbitrumNetworks,
} from '../../src/lib/dataEntities/networks'

const ethereumMainnetChainId = 1
const arbitrumOneChainId = 42161

const mockL1ChainId = 111111
const mockL2ChainId = 222222
const mockL3ChainId = 99999999

describe('Networks', async () => {
  beforeEach(async () => {
    resetNetworksToDefault()
  })

  describe('adding networks', () => {
    it('adds a custom Arbitrum network', async function () {
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const customArbitrumNetwork = {
        ...arbitrumOne,
        chainID: mockL2ChainId,
        partnerChainID: ethereumMainnetChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customArbitrumNetwork })

      expect(await getArbitrumNetwork(mockL2ChainId)).to.be.ok

      // assert network was added as child
      const l1Network = await getL1Network(customArbitrumNetwork.partnerChainID)
      expect(l1Network.partnerChainIDs).to.include(mockL2ChainId)
      // assert network has correct parent
      const arbitrumNetwork = await getArbitrumNetwork(
        customArbitrumNetwork.chainID
      )
      expect(arbitrumNetwork.partnerChainID).to.equal(ethereumMainnetChainId)
    })

    it('adds a custom L1 and Arbitrum network', async function () {
      const ethereumMainnet = await getL1Network(ethereumMainnetChainId)
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const customL1Network = {
        ...ethereumMainnet,
        chainID: mockL1ChainId,
        isArbitrum: false,
        isCustom: true,
      } as const

      const customArbitrumNetwork = {
        ...arbitrumOne,
        partnerChainID: mockL1ChainId,
        chainID: mockL2ChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customL1Network, customArbitrumNetwork })

      expect(await getL1Network(mockL1ChainId)).to.be.ok
      expect(await getArbitrumNetwork(mockL2ChainId)).to.be.ok

      // assert network was added as child
      const l1Network = await getL1Network(mockL1ChainId)
      expect(l1Network.partnerChainIDs).to.include(mockL2ChainId)
      // assert network has correct parent
      const arbitrumNetwork = await getArbitrumNetwork(
        customArbitrumNetwork.chainID
      )
      expect(arbitrumNetwork.partnerChainID).to.equal(mockL1ChainId)
    })

    it('adds a custom L3 network', async function () {
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const customArbitrumNetwork = {
        ...arbitrumOne,
        chainID: mockL3ChainId,
        partnerChainID: arbitrumOneChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customArbitrumNetwork })

      expect(await getArbitrumNetwork(mockL3ChainId)).to.be.ok

      // assert network was added as child
      const arbitrumNetwork = await getArbitrumNetwork(
        customArbitrumNetwork.partnerChainID
      )
      expect(arbitrumNetwork.partnerChainIDs).to.include(mockL3ChainId)
      // assert network has correct parent
      const l3Network = await getArbitrumNetwork(mockL3ChainId)
      expect(l3Network.partnerChainID).to.equal(arbitrumOneChainId)
    })

    it('adds a custom L1, L2, and L3 network', async function () {
      const ethereumMainnet = await getL1Network(ethereumMainnetChainId)
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const customL1Network = {
        ...ethereumMainnet,
        chainID: mockL1ChainId,
        isArbitrum: false,
        isCustom: true,
      } as const

      const customArbitrumNetwork = {
        ...arbitrumOne,
        chainID: mockL2ChainId,
        partnerChainID: mockL1ChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customL1Network, customArbitrumNetwork })

      expect(await getL1Network(mockL1ChainId)).to.be.ok
      expect(await getArbitrumNetwork(mockL2ChainId)).to.be.ok

      // assert network was added as child
      const l1Network = await getL1Network(mockL1ChainId)
      expect(l1Network.partnerChainIDs).to.include(mockL2ChainId)
      // assert network has correct parent
      const arbitrumNetwork = await getArbitrumNetwork(mockL2ChainId)
      expect(arbitrumNetwork.partnerChainID).to.equal(mockL1ChainId)

      const customL3Network = {
        ...arbitrumOne,
        chainID: mockL3ChainId,
        partnerChainID: mockL2ChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customArbitrumNetwork: customL3Network })

      expect(await getArbitrumNetwork(mockL3ChainId)).to.be.ok

      // assert network was added as child
      const arbitrumNetworkAgain = await getArbitrumNetwork(mockL2ChainId)
      expect(arbitrumNetworkAgain.partnerChainIDs).to.include(mockL3ChainId)
      // assert network has correct parent
      const l3Network = await getArbitrumNetwork(mockL3ChainId)
      expect(l3Network.partnerChainID).to.equal(mockL2ChainId)
    })

    it('fails to add a custom L1 and Arbitrum network if they do not match', async function () {
      const ethereumMainnet = await getL1Network(ethereumMainnetChainId)
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const wrongPartnerChainId = 1241244

      const customL1Network = {
        ...ethereumMainnet,
        chainID: mockL1ChainId,
        isArbitrum: false,
        isCustom: true,
      } as const

      const customArbitrumNetwork = {
        ...arbitrumOne,
        partnerChainID: wrongPartnerChainId,
        chainID: mockL2ChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      try {
        addCustomNetwork({ customL1Network, customArbitrumNetwork })
      } catch (err) {
        // should fail
        expect(err).to.be.an('error')
        expect((err as Error).message).to.be.eq(
          `Partner chain id for Arbitrum network ${customArbitrumNetwork.chainID} doesn't match the provided L1 network. Expected ${customL1Network.chainID} but got ${wrongPartnerChainId}.`
        )
      }
    })

    it('fails to add a custom L3 without previously registering L2', async function () {
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      try {
        addCustomNetwork({
          customArbitrumNetwork: {
            ...arbitrumOne,
            chainID: mockL3ChainId,
            partnerChainID: mockL2ChainId,
            isArbitrum: true,
            isCustom: true,
          },
        })
      } catch (err) {
        // should fail
        expect(err).to.be.an('error')
        expect((err as Error).message).to.be.eq(
          `Network ${mockL3ChainId}'s parent network ${mockL2ChainId} is not recognized`
        )
      }
    })
  })

  describe('fetching networks', () => {
    it('successfully fetches an L1 network with `getL1Network`', async function () {
      const network = await getL1Network(ethereumMainnetChainId)
      expect(network.chainID).to.be.eq(ethereumMainnetChainId)
    })

    it('successfully fetches an Arbitrum network with `getArbitrumNetwork`', async function () {
      const network = await getArbitrumNetwork(arbitrumOneChainId)
      expect(network.chainID).to.be.eq(arbitrumOneChainId)
    })

    it('fails to fetch a registered Arbitrum network with `getL1Network`', async function () {
      try {
        await getL1Network(arbitrumOneChainId)
      } catch (err) {
        // should fail
        expect(err).to.be.an('error')
        expect((err as Error).message).to.be.eq(
          `Unrecognized network ${arbitrumOneChainId}.`
        )
      }
    })

    it('fails to fetch a registered L1 network with `getArbitrumNetwork`', async function () {
      try {
        await getArbitrumNetwork(ethereumMainnetChainId)
      } catch (err) {
        // should fail
        expect(err).to.be.an('error')
        expect((err as Error).message).to.be.eq(
          `Unrecognized network ${ethereumMainnetChainId}.`
        )
      }
    })

    it('successfully fetches an L3 chain with `getArbitrumNetwork`', async function () {
      const arbitrumOne = await getArbitrumNetwork(arbitrumOneChainId)

      const customL3Network = {
        ...arbitrumOne,
        chainID: mockL3ChainId,
        partnerChainID: arbitrumOneChainId,
        isArbitrum: true,
        isCustom: true,
      } as const

      addCustomNetwork({ customArbitrumNetwork: customL3Network })

      const l3Network = await getArbitrumNetwork(mockL3ChainId)
      expect(l3Network.chainID).to.be.eq(mockL3ChainId)
      // assert network has correct parent
      expect(l3Network.partnerChainID).to.equal(arbitrumOneChainId)

      // assert network was added as child
      const arbitrumNetwork = await getArbitrumNetwork(
        customL3Network.partnerChainID
      )
      expect(arbitrumNetwork.partnerChainIDs).to.include(mockL3ChainId)
    })

    it('fails to fetch an unrecognized L1 network', async () => {
      const chainId = 9999

      try {
        await getL1Network(chainId)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
        expect((err as Error).message).to.be.eq(
          `Unrecognized network ${chainId}.`
        )
      }
    })

    it('fails to fetch an unrecognized L2/L3 network', async () => {
      const chainId = 9999

      try {
        await getArbitrumNetwork(chainId)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
        expect((err as Error).message).to.be.eq(
          `Unrecognized network ${chainId}.`
        )
      }
    })
  })

  describe('returns correct networks', () => {
    // todo: this could be a snapshot test
    it('returns correct L1 networks', () => {
      const l1NetworksEntries = Object.entries(l1Networks)
      const l1NetworksKeys = l1NetworksEntries.map(([key]) => key)

      const expected = [1, 1338, 17000, 11155111].map(id => id.toString())

      expect(l1NetworksKeys).to.have.length(expected.length)
      expect(l1NetworksKeys).to.have.members(expected)
    })

    // todo: this could be a snapshot test
    it('returns correct Arbitrum networks', () => {
      const arbitrumNetworksEntries = Object.entries(arbitrumNetworks)
      const arbitrumNetworksKeys = arbitrumNetworksEntries.map(([key]) => key)

      const expected = [42161, 42170, 421614, 23011913]
        //
        .map(id => id.toString())

      expect(arbitrumNetworksKeys).to.have.length(expected.length)
      expect(arbitrumNetworksKeys).to.have.members(expected)
    })
  })
})