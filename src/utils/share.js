
import server from '@/config/server'

export const getServer = () => {
  const DEPLOY_ENV = process.env.DEPLOY_ENV || 'dev'
  return server[DEPLOY_ENV]
}
