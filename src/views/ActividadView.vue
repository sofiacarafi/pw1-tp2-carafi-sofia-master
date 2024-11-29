<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import datosActividades from '/public/actividades.json';

// Obtén el parámetro de la URL
const route = useRoute();
const router = useRouter();
const actividadId = Number(route.params.id);

// Busca la actividad específica
const actividad = ref(
  datosActividades.find((actividad) => actividad.id === actividadId)
);

// Función para guardar la actividad seleccionada en localStorage
function guardarReserva() {
  if (actividad.value) {
    localStorage.setItem('reservaSeleccionada', JSON.stringify(actividad.value));
    console.log('Actividad reservada:', actividad.value);
    router.push('/formulario-eventos'); // Navega al formulario después de guardar
  } else {
    console.error('No se pudo encontrar la actividad.');
  }
}
</script>

<template>
  <div v-if="actividad" class="container-card d-flex flex-column">
    <div>
      <div class="card m-2">
        <img :src="actividad.imagen" class="card-img-top border-4" :alt="actividad.titulo">
        <div class="card-body">
          <p class="card-date">{{ actividad.date }}</p>
          <h1 class="titulo_actividades">{{ actividad.titulo }}</h1>
          <p class="card-text">{{ actividad.descripcion }}</p>
          <p>{{ actividad.precio }}</p>
          <button @click="guardarReserva" class="btn btn-primary mt-4">Reservar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Actividad no encontrada.</p>
  </div>
</template>