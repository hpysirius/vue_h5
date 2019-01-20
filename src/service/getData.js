import fetch from '../config/fetch'

// 1.获取滚动图列表
export const GetAdver = params => fetch('/GetAdver', params, 'get')
// 1.获取滚动图列表
export const GetNews = params => fetch('/GetNews', params, 'get')
// 3.找家政企业
export const Getcompany = params => fetch('/Getcompany', params, 'get');
// 4.找家政从业人员
export const Getpractitioner = params => fetch("/Getpractitioner", params, "get");
// 5.服务项目列表
export const Getskills = params => fetch("/Getskills", params, "get");