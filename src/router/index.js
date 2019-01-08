import home from '../page/home/home'
const news = r => require.ensure([], () => r(require('../page/news/index')), 'news')
const skills = r => require.ensure([], () => r(require('../page/skills/index')), 'skills')
const credentials = r => require.ensure([], () => r(require('../page/credentials/index')), 'credentials')
const inquiry = r => require.ensure([], () => r(require('../page/inquiry/index')), 'inquiry')
const staff = r => require.ensure([], () => r(require('../page/inquiry/staff')), 'staff')
const company = r => require.ensure([], () => r(require('../page/inquiry/company')), 'company')
const complain = r => require.ensure([], () => r(require('../page/complain/index')), 'complain')

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
  }
]
