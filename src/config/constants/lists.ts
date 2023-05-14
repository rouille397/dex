const PANNTFD_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.jsn'
const PANNTFD_TOP100 = 'https://tokens.pancakeswap.finance/pancakeswap-top-100.jsn'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANNTFD_TOP100,
  PANNTFD_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
