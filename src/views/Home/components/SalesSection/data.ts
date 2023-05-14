import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'AMM Aggregator protocol will soon be enabled.',
  bodyText: 'Trade tokens at the best prices on Ethereum blockchain, Binance blockchain, Polygon blockchain and, Avalanche blockchain. Using our DEX aggregator, tap into liquidity on 35+ decentralized exchanges, such as 0x, Uniswap, 1inch, pancakeswap, and Kyber, to execute your trade with the best return and lowest transaction fees.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'CFX', alt: 'CFX token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'NitfeeDex makes it simple to make your crypto work for you!.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'NTFD is the governance token of NitfeeDex.',
  bodyText:
    'NTFD token is at the core of the NitfeeDex ecosystem. Buy, trade,  farm, stake, earn, and vote with NTFD.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x1cbF4cCDEfb2b880933f413D7D9B45Af7cdfBA9e',
    text: 'Buy NTFD',
    external: false,
  },


  images: {
    path: '/images/home/',
    attributes: [
      { src: 'coin', alt: 'NTFD token' }
    ],
  },
}
