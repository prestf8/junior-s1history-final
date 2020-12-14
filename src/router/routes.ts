import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
    {
      path: '/junior-s1history-final/',
      name: 'Home',
      component: Home, 
    },
    {
      path: '/junior-s1history-final/historical-figure',
      name: 'Historical Figure',
      component: () => import(/* webpackChunkName: "about" */ '../views/HistoricalFigure.vue')
    },
    {
      path: '/junior-s1history-final/interview',
      name: 'Interview',
      component: () => import(/* webpackChunkName: "about" */ '../views/Interview.vue')
    },
    {
      path: '/junior-s1history-final/myself',
      name: 'Myself',
      component: () => import(/* webpackChunkName: "about" */ '../views/Myself.vue')
    }
  ]

  export default routes