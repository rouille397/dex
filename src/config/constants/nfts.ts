import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://gateway.pinata.cloud'

export const nftSources: NftSource = {
  [NftType.PANNTFD]: {
    address: {
      1030: '0xB7a9250B4c70D7E5b7f38468007bD53688dF0eE1',
      96: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
    identifierKey: 'image',
  },
  [NftType.MIXIE]: {
    address: {
      1030: '0xB7a9250B4c70D7E5b7f38468007bD53688dF0eE1',
      96: '',
    },
    identifierKey: 'image',
  },
}

/**
 * NOTE: https://cloudflare-ipfs.com does not support video streaming so for the video URLS we need to use
 * https://gateway.pinata.cloud
 */

const Nfts: Nft[] = [
  {
    name: 'My Bunnie',
    description: 'This is bunny description',
    images: {
      lg: 'face.jpeg',
      md: 'face.jpeg',
      sm: 'face.jpeg',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQDhdnsVUEY8dhYPM9XD2oZcwJDWFTKfDPynYaTQD8rGy',
    },
    sortOrder: 999,
    identifier: 'ipfs/QmQDhdnsVUEY8dhYPM9XD2oZcwJDWFTKfDPynYaTQD8rGy',
    type: NftType.PANNTFD,
    variationId: 8,
  }
]

export default Nfts
