<script setup>
import IconoInicio from '../components/icons/IconoInicio.vue'
import IconoActividades from '../components/icons/IconoActividades.vue'
import IconoSobreNosotros from '../components/icons/IconoSobreNosotros.vue'
import IconoContacto from '../components/icons/IconoContacto.vue'


import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar fixed-bottom  navInferior">
  <div class="container-fluid">
    <RouterLink to = "/"><IconoInicio></IconoInicio> </RouterLink>
    <RouterLink to = "/actividades"> <IconoActividades></IconoActividades></RouterLink>
    <RouterLink to = "/sobre-nosotros"><IconoSobreNosotros></IconoSobreNosotros></RouterLink>
    <RouterLink to = "/contacto"><IconoContacto></IconoContacto></RouterLink>
</div>
</nav>
</template>