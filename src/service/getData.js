import fetch from '../config/fetch'

/**
 * 获取首页默认地址
 */
export const getCategory = params => fetch('/web/article/getCategory', params, 'post')

export const getUser = () => {}
