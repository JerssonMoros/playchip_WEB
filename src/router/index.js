import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/homeView/views/HomeView.vue')
  },
  {
    path: '/recommendations',
    name: 'recommendations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recommendations" */ '../views/recommendationsView/views/RecommendationView.vue')
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/newsView/views/NewsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
