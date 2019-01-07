import home from '../page/home/home'
const news = r => require.ensure([], () => r(require('../page/news/index')), 'news')
const skills = r => require.ensure([], () => r(require('../page/skills/index')), 'skills')

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
  }
]
