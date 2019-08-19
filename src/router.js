import Vue from 'vue'
import Router from 'vue-router'
import BalancePage from './pages/Balance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BalancePage
    }
  ]
})
