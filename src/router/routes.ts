import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    {
      path: '/historical-figure',
      name: 'Historical Figure',
      component: () => import(/* webpackChunkName: "about" */ '../views/HistoricalFigure.vue')
    },
    {
      path: '/interview',
      name: 'Interview',
      component: () => import(/* webpackChunkName: "about" */ '../views/Interview.vue')
    },
    {
      path: '/myself',
      name: 'Myself',
      component: () => import(/* webpackChunkName: "about" */ '../views/Myself.vue')
    }
  ]

  export default routes