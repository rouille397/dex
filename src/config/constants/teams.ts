import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'My Storm',
    description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
    images: {
      lg: 'syrup-storm-lg.png',
      md: 'syrup-storm-md.png',
      sm: 'syrup-storm-sm.png',
      alt: 'syrup-storm-alt.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png',
    },
    background: 'syrup-storm-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  }
]

export default teams
