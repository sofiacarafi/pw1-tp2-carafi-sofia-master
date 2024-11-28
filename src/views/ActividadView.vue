<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import datosActividades from '/public/actividades.json';

const route = useRoute ()
const actividadId = Number (route.params.id)



const actividad = ref (datosActividades.find((actividad) => actividad.id === actividadId))



function GuardarReserva() {
  fetch('/public/actividades.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON');
      }
      return response.json(); 
    })
    .then(reserva => {
      localStorage.setItem("reservaSeleccionada", JSON.stringify(reserva));
      console.log("Reserva guardada:", reserva); 
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}
    
    




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
      <RouterLink to = "/formulario-eventos"><button @click="guardarReserva(Reservar)" class="btn btn-primary mt-4">Reservar</button></RouterLink>
    </div>
     </div>
    </div>
    </div>  
</template>