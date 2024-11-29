<script setup>
import { ref, onMounted } from 'vue';

const eventosReservados = ref([]);
onMounted(() => {
  const eventosGuardados = localStorage.getItem('eventosReservados');
  if (eventosGuardados) {
    eventosReservados.value = JSON.parse(eventosGuardados);
    console.log('Eventos cargados desde localStorage:', JSON.stringify(eventosReservados.value, null, 2));
  } else {
    console.log('No hay eventos reservados en localStorage');
  }
});
</script>



<template>
  <div class="text-center mt-5">
    <img src="/public/img/usuario.jpeg" class="rounded-circle" alt="usuario">
    <h5>Sofia Carafi</h5>
    <p>Sofiacarafi@davinci.edu.ar</p>
    <p>Info personal</p>
  </div>

  <div class="contenedor-usuario">
    <div class="border border-white rounded p-2 mb-3 border-opacity-25">
      <h6>Lenguaje</h6>
      <select class="form-select form-select-sm" aria-label="Small select example">
        <option value="1">Español</option>
        <option value="2">Portugues</option>
        <option value="3">Ingles</option>
      </select>
    </div>

    <div class="border border-white rounded p-2 mb-3 border-opacity-25">
      <h6>Ubicacion</h6>
      <select class="form-select form-select-sm" aria-label="Small select example">
        <option value="1">Argentina</option>
        <option value="2">Brasil</option>
        <option value="3">Estados Unidos</option>
      </select>
    </div>

    <div class="border border-white rounded p-2 mb-3 border-opacity-25">
      <label>Nacimiento</label>
      <input type="date" class="form-select form-select-sm" aria-label="Small select example">
    </div>

    <!-- Mostrar los eventos reservados -->
    <div v-if="eventosReservados.length > 0" class="border border-white rounded p-2 mb-3 border-opacity-25">
      <h6>Tus próximos eventos</h6>
      <div v-for="(evento, index) in eventosReservados" :key="index" class="mb-3">
        <div class="card w-80 m-2">
          <div class="card-body d-flex align-items-center">
            <img :src="evento.actividad.imagen" class="card-img-left rounded me-3" :alt="evento.actividad.titulo">
            <div>
              <h5 class="card-title">{{ evento.actividad.titulo }}</h5>
              <p class="card-text">{{ evento.actividad.date }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <p>No has reservado ningún evento aún.</p>
    </div>
  </div>
</template>
