import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NitfeeDex',
  description:
    'The most popular AMM on BSC by user count! Earn NTFD through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by NitfeeDex), NFTs, and more, on a platform you can trust.',
  image: 'https://nitfeeswap.xyz/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('NitfeeDex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('NitfeeDex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('NitfeeDex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('NitfeeDex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('NitfeeDex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('NitfeeDex')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('NitfeeDex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('NitfeeDex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('NitfeeDex')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('NitfeeDex')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('NitfeeDex')}`,
      }
    default:
      return null
  }
}
