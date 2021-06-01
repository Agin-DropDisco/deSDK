import { BigintIsh, ChainId, defaultSwapFee, FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS, _30 } from '../constants'

const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
const SUSHISWAP_FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
// const DEV_FACTORY_ADDRESS = ''

const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const SUSHISWAP_ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
// const DEV_FACTORY_ADDRESS = ''



/**
 * A platform to which DexSwap can route through.
 */
export class RoutablePlatform {
  public readonly name: string
  public readonly factoryAddress: { [supportedChainId in ChainId]?: string }
  public readonly routerAddress: { [supportedChainId in ChainId]?: string }
  public readonly initCodeHash: string
  public readonly defaultSwapFee: BigintIsh

  public static readonly DEXSWAP = new RoutablePlatform(
    'DEXSwap',
    FACTORY_ADDRESS,
    ROUTER_ADDRESS,
    INIT_CODE_HASH,
    defaultSwapFee
  )
  public static readonly UNISWAP = new RoutablePlatform(
    'Uniswap',
    { [ChainId.RINKEBY]: UNISWAP_FACTORY_ADDRESS },
    { [ChainId.RINKEBY]: UNISWAP_ROUTER_ADDRESS },
    '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    _30
  )
  public static readonly SUSHISWAP = new RoutablePlatform(
    'Sushiswap',
    { [ChainId.RINKEBY]: SUSHISWAP_FACTORY_ADDRESS },
    { [ChainId.RINKEBY]: SUSHISWAP_ROUTER_ADDRESS },
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    _30
  )
  // public static readonly MOONBEAM = new RoutablePlatform(
  //   'DEV-MOONBEAM',
  //   { [ChainId.DEV]: DEV_FACTORY_ADDRESS },
  //   { [ChainId.DEV]: DEV },
  //   '',
  //   _30
  // )

  public constructor(
    name: string,
    factoryAddress: { [supportedChainId in ChainId]?: string },
    routerAddress: { [supportedChainId in ChainId]?: string },
    initCodeHash: string,
    defaultSwapFee: BigintIsh
  ) {
    this.name = name
    this.factoryAddress = factoryAddress
    this.routerAddress = routerAddress
    this.initCodeHash = initCodeHash
    this.defaultSwapFee = defaultSwapFee
  }

  public supportsChain(chainId: ChainId): boolean {
    return !!this.factoryAddress[chainId]
  }
}
