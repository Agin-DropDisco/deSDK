import JSBI from 'jsbi'
import PERMISSIVE_MULTICALL_ABI from './abis/PermissiveMulticall.json'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import TOKEN_REGISTRY_ABI from './abis/token-registry.json'

import {
  mainnet as coreMainnet,
  rinkeby as coreRinkeby,
  matic as coreMatic
} from './abis/contracts.json'

import {
  mainnet as peripheryMainnet,
  rinkeby as peripheryRinkeby,
  matic as peripheryMatic,
} from './abis/route.json'


// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  MATIC = 80001,
  XDAI = 100
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.RINKEBY]: coreRinkeby.factory,
  [ChainId.MATIC]: coreMatic.factory
}

export const ROUTER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.RINKEBY]: peripheryRinkeby.router,
  [ChainId.MATIC]: peripheryMatic.router
}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.RINKEBY]: '0x86F001615E0025eFD1A225ea51CEff47fE332bbe',
  [ChainId.MATIC]: '0x6b2C3EB9C16EcCcD7b6De9AC2DD35805D0DC673C',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000000'
}

export const TOKEN_REGISTRY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.RINKEBY]: '0x5Ae40444a69a64384158fF7A1C645A997274aE61',
  [ChainId.MATIC]: '0x52d2026723cd76E1Feae2719aa6F56aBe585030E',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000000'
}

export const DEXSWAP_TOKEN_LIST_ID: { [chainId: number]: number } = {
  [ChainId.MAINNET]: 1,
  [ChainId.RINKEBY]: 1,
  [ChainId.MATIC]: 80001
}


export const INIT_CODE_HASH = '0x21d289536920f920d222409e32789ea13419f64176abb684929511dc5fefc20f'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const PERMISSIVE_MULTICALL_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.RINKEBY]: '0xcE7D0874A4EF89F38E06A3376026e1cb34D409Da',
  [ChainId.MATIC]: '0x260B719917D3b33040ca431a790464CA22033550',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000000',

}

export {
  PERMISSIVE_MULTICALL_ABI,
  TOKEN_REGISTRY_ABI,
  PERMISSIVE_MULTICALL_ADDRESS,
  STAKING_REWARDS_FACTORY_ABI,
  STAKING_REWARDS_DISTRIBUTION_ABI
}
