
<script setup>
import Carusel from '../components/Carusel.vue';
import SobreNosotros from '../components/SobreNosotros.vue';
import Actividades from '../components/Actividades.vue';
import Suscribite from '../components/Suscribite.vue';
import UsuarioNuevo from '@/components/UsuarioNuevo.vue';




</script>

<template>

 
<Carusel></Carusel>
<SobreNosotros></SobreNosotros>
<RouterLink class="d-flex flex-column align-items-center text-decoration-none" to = "/sobre-nosotros"> <button type="button" class="btn btn-sm mt-1 ">Conoce mas</button> </RouterLink>
<Actividades></Actividades>
<Suscribite></Suscribite>
<UsuarioNuevo></UsuarioNuevo>







</template>

    