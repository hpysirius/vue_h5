import fetch from '../config/fetch'

// 1.获取滚动图列表
export const GetAdver = params => fetch('/GetAdver', params, 'get')
// 1.获取滚动图列表
export const GetNews = params => fetch('/GetNews', params, 'get')
