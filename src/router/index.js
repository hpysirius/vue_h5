import home from '../page/home/home'
const news = r => require.ensure([], () => r(require('../page/news/index')), 'news')
const skills = r => require.ensure([], () => r(require('../page/skills/index')), 'skills')
const credentials = r => require.ensure([], () => r(require('../page/credentials/index')), 'credentials')
const inquiry = r => require.ensure([], () => r(require('../page/inquiry/index')), 'inquiry')
const staff = r => require.ensure([], () => r(require('../page/inquiry/staff')), 'staff')
const company = r => require.ensure([], () => r(require('../page/inquiry/company')), 'company')
const complain = r => require.ensure([], () => r(require('../page/complain/index')), 'complain')
const comp = r => require.ensure([], () => r(require('../page/complain/comp')), 'comp')
const low = r => require.ensure([], () => r(require('../page/complain/low')), 'low')
const contract = r => require.ensure([], () => r(require('../page/complain/contract')), 'contract')
const find = r => require.ensure([], () => r(require('../page/find/index')), 'find')
const person = r => require.ensure([], () => r(require('../page/find/person')), 'person')
const findcompany = r => require.ensure([], () => r(require('../page/find/findcompany')), 'findcompany')
const history = r => require.ensure([], () => r(require('../page/find/history')), 'history')
const personal = r => require.ensure([], () => r(require('../page/me/personal')), 'personal')
const auth = r => require.ensure([], () => r(require('../page/me/auth')), 'auth')

export default
[
  {
    path: '/',
    component: home
  },
  {
    path: '/news',
    component: news
  },
  {
    path: '/skills',
    component: skills
  },
  {
    path: '/credentials',
    component: credentials
  },
  {
    path: '/inquiry',
    component: inquiry
  },
  {
    path: '/staff',
    component: staff
  },
  {
    path: '/company',
    component: company
  },
  {
    path: '/complain',
    component: complain
  },
  {
    path: '/comp',
    component: comp
  },
  {
    path: '/low',
    component: low
  },
  {
    path: '/contract',
    component: contract
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/person',
    component: person
  },
  {
    path: '/findcompany',
    component: findcompany
  },
  {
    path: '/history',
    component: history
  },
  {
    path: '/personal',
    component: personal
  },
  {
    path: '/auth',
    component: auth
  }
]
