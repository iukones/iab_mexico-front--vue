import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AgenciasDescripcion from './views/AgenciasDescripcion.vue'
import ServiciosDigitales from './views/ServiciosDigitales.vue'
import Agencias from './views/Agencias.vue'
import FormarParte from './views/FormarParte.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agencias',
      name: 'agencias',
      component: Agencias
    },
    {
      path: '/agencias-descripcion/:agency_slug',
      name: 'agencias-descripcion',
      component: AgenciasDescripcion
    },
    {
      path: '/servicios-digitales',
      name: 'servicios-digitales',
      component: ServiciosDigitales
    }, 
    {
      path: '/formar-parte/:action?',
      name: 'formar-parte',
      props: true,
      component: FormarParte
    }
  ]
})
