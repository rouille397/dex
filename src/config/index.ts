import { ChainId } from '@pancakeswap/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 1.5

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://evm.confluxscan.io',
  [ChainId.TESTNET]: 'https://testnet.evm.confluxscan.io',
}

// NTFD_PER_BLOCK details
// 40 NTFD is minted per block
// 20 NTFD per block is sent to Burn pool (A farm just for burning cake)
// 10 NTFD per block goes to NTFD syrup pool
// 9 NTFD per block goes to Yield farms and lottery
// NTFD_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// NTFD/Block in src/views/Home/components/CakeDataRow.tsx = 19 (40 - Amount sent to burn pool)
export const NTFD_PER_BLOCK = new BigNumber(0.1)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const NTFD_PER_YEAR = NTFD_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://nitfeeswap.xyz'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_URL}/pool`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 400000
export const DEFAULT_GAS_PRICE = 20
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
