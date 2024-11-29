<script setup>
import TusEventos from './TusEventos.vue';
import { ref, onMounted } from 'vue';

const eventosReservados = ref([]);

function cargarReservas() {
  eventosReservados.value = JSON.parse(localStorage.getItem("reservas")) || [];
}

onMounted(() => {
  console.log('TusEventosLista montado');
  cargarReservas();
});

</script>

<template>
  <h2 class="text-center mt-5">Tus próximos eventos</h2>
  <!-- Mostrar actividades reservadas -->
  <TusEventos
    v-for="(evento, index) in eventosReservados"
    :key="index"
    :imagen="evento.imagen"
    :titulo="evento.titulo"
    :fecha="evento.fecha"
  />
</template>
