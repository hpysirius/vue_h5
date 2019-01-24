
import server from '@/config/server'

export const getServer = () => {
  const DEPLOY_ENV = process.env.DEPLOY_ENV || 'dev'
  return server[DEPLOY_ENV]
}

// 对象转key
export const OTOKEY = (val) => {
  const obj = {}
  Object.keys(val).forEach(el => {
    obj[val[el].key] = el
  })
  return obj
}
