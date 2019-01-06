import home from '../page/home/home'
const news = r => require.ensure([], () => r(require('../page/news/index')), 'news')

export default
[
  {
    path: '/',
    component: home
  },
  {
    path: '/news',
    component: news
  }
]
