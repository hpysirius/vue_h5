import home from '../page/home/home'
const hello = r => require.ensure([], () => r(require('../page/home/home')), 'home')

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: home
},
{
  path: '/hello',
  component: hello
}

]
