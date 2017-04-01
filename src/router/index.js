import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Home from '@/components/Home'
import Purchase from '@/components/Purchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      alias: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      	{ path: '/test', component: Test, name: '测试' },
        { path: '/purchase', component: Purchase, name: '过磅单' },
      ]
    }
  ]
})
