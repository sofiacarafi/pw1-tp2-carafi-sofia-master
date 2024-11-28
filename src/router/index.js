import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ActividadesView from '@/views/ActividadesView.vue'
import ActividadView from '@/views/ActividadView.vue'
import SobreNosotrosView from '@/views/SobreNosotrosView.vue'
import ContactoView from '@/views/ContactoView.vue'
import UsuarioView from '@/views/UsuarioView.vue'
import FormularioEventos from '@/components/FormularioEventos.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    
    {
      path: '/sobre-nosotros',
      name: 'sobre nosotros',
      component: SobreNosotrosView
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: ActividadesView
    },
    {
      path: '/actividades/:id',
      name: 'actividad',
      component: ActividadView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },

    {
      path: '/usuario',
      name: 'usuario',
      component: UsuarioView
    },
    {
      path: '/formulario-eventos',
      name: 'formulario-eventos',
      component: FormularioEventos
    }

  ]
})

export default router
