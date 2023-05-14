import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'NTFD',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      1030: '0x1cbF4cCDEfb2b880933f413D7D9B45Af7cdfBA9e',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'NTFD-CFX LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1030: '0xE5116cD62ce2236A0B7E3997f610f95C0AcF20a9',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-CFX LP',
    lpAddresses: {
      96: '',
      1030: '0xbc57123Ca5942E0E86c60c88402bA0Db056c3A07',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'NTF-CFX LP',
    lpAddresses: {
      96: '',
      1030: '0xBE9F9e6AE25693C75531dA1187Ba711F032363A1',
    },
    token: tokens.ntf,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'NTF-NTFD LP',
    lpAddresses: {
      96: '',
      1030: '0x5E367E9c322426ff683304Da802f8fe2751d75Bc',
    },
    token: tokens.ntf,
    quoteToken: tokens.cake,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms
