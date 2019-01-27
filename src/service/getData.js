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
// 17. 找家政人员
export const Pullpractitioner = params => fetch('/Pullpractitioner', params, 'get')
// 18. 找家政企业/获取家政企业列表
export const Pullcompany = params => fetch('/Pullcompany', params, 'get')
// 18. 视频列表
export const Getlearnvideo = params => fetch('/Getlearnvideo', params, 'get')
// 3. 合同模版
export const Getmateral = params => fetch('/Getmateral', params, 'get')
// 13.新建咨询问题
export const Postlegalconsulting = params => fetch('/Postlegalconsulting', params, 'post', '')
// 14.更新咨询问题状态
export const Updatelegalconsulting = params => fetch('/Updatelegalconsulting', params, 'post')
// 15.追加问题/回复
export const Postlegalconsultinginfo = params => fetch('/Postlegalconsultinginfo', params, 'post', '')
// 19.用户登录
export const Login = params => fetch('/Login', params, 'get')
// 20.用户注册
export const Register = params => fetch('/Register', params, 'get')
// 20.修改密码
export const Updatepwd = params => fetch('/Updatepwd', params, 'get')

// 21.用户信息查询（个人中心）
export const Getuserinfo = params => fetch('/Getuserinfo', params, 'get')
// 12.用户咨询问题列表
export const Getlegalconsulting = params => fetch('/Getlegalconsulting', params, 'get')
// 16.合同模版
export const Getcontracttemplates = params => fetch('/Getcontracttemplates', params, 'get')
// 22.法律咨询附加信息查询（咨询详情）
export const Getlegalconsultinginfo = params => fetch('/Getlegalconsultinginfo', params, 'get')
// 15.追加问题/回复
export const Postcomplaininfo = params => fetch('/Postcomplaininfo', params, 'post', '')
// 15.投诉原因列表
export const Getcause = params => fetch('/Getcause', params, 'get')
