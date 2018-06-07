import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index/index'
import OtherRouter from '../pages/other_router/OtherRouter'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index_page',
      component : indexPage
    },
    {
      path: '/run',
      name: 'OtherRouter',
      component: OtherRouter
    }
  ]
})
