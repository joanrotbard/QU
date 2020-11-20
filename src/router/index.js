import Vue from 'vue'
import Router from 'vue-router'
import SWAPI from '@/components/SWAPI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SWAPI',
      component: SWAPI
    }
  ]
})
