import fetch from '../config/fetch'

// 1.获取滚动图列表
export const GetAdver = params => fetch('/GetAdver', params, 'get')
// 2.获取行业新闻资讯
export const GetNews = params => fetch('/GetNews', params, 'get')
// 3.找家政企业
export const Getcompany = params => fetch('/Getcompany', params, 'get')
// 4.找家政从业人员
export const Getpractitioner = params => fetch('/Getpractitioner', params, 'get')
// 5.证书查询（身份证+姓名）
export const GetcertificateByid = params => fetch('/GetcertificateByid', params, 'get')
// 6.证书查询（证书编号+姓名）
export const GetcertificateByno = params => fetch('/GetcertificateByno', params, 'get')
// 7.服务项目列表
export const Getskills = params => fetch('/Getskills', params, 'get')
