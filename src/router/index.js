import Vue from 'vue'
import VueRouter from 'vue-router'
import SuppliersList from '../components/SuppliersList.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: '/Suppliers',
      name: 'Suppliers',
      component :SuppliersList
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import(/* webpackChunkName: "about" */ '../components/SuppliersMap.vue')
    },
    {
        path: '/Supplier',
        name: 'Supplier',
        component: () => import(/* webpackChunkName: "about" */ '../components/SupplierUnique.vue')
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  