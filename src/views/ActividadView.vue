<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import datosActividades from '/public/actividades.json';

const route = useRoute ()
const actividadId = Number (route.params.id)



const actividad = ref (datosActividades.find((actividad) => actividad.id === actividadId))





</script>

<template>
<div  v-if="actividad" class=" container-card d-flex flex-colum ">
    <div class="">
        <div class="card m-2 ">
    <img :src="actividad.imagen" class="card-img-top border-4 " :alt="titulo">
    <div class="card-body ">
     <p class="card-date">{{ actividad.date }}</p>
      <h1 class="titulo_actividades">{{ actividad.titulo }}</h1>
      <p class="card-text">{{ actividad.descripcion }}</p>
      <p>{{ actividad.precio }}</p>
      <RouterLink to = "/formulario-eventos"><button class="btn btn-primary mt-4">Reservar</button></RouterLink>
    </div>
     </div>
    </div>
    </div>  
</template>