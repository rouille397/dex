import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      96: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1030: '0xD5acd23946457cb62AC410bFaC795c0c9218E381',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
