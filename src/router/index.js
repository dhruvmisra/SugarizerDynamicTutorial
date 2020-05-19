import Vue from 'vue'
import VueRouter from 'vue-router'
import Tutorial from '@/views/Tutorial.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Tutorial',
    component: Tutorial
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
