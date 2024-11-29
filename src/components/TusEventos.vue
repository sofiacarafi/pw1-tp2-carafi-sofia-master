<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imagen: String,
  titulo: String,
  fecha: String,
});

function reservarEvento() {
  // Obtén las reservas existentes
  const reservas = JSON.parse(localStorage.getItem("reservaSeleccionada")) || [];
  
  // Agrega el evento actual si no existe ya
  if (!reservas.some(evento => evento.titulo === props.titulo)) {
    reservas.push({
      imagen: props.imagen,
      titulo: props.titulo,
      fecha: props.fecha,
    });
    localStorage.setItem("reservaSeleccionada", JSON.stringify(reservas));
    alert(`Has reservado: ${props.titulo}`);
  } else {
    alert(`Ya has reservado esta actividad: ${props.titulo}`);
  }
}
</script>

<template>
  <div class="contenedor-eventos">
    <div class="card w-80 m-2">
      <div class="card-body d-flex align-items-center">
        <img :src="imagen" class="card-img-left rounded me-3" :alt="titulo">
        <div>
          <h5 class="card-title">{{ titulo }}</h5>
          <p class="card-text">{{ fecha }}</p>
          <!-- Botón para reservar -->
          <button class="btn btn-primary btn-sm mt-2" @click="reservarEvento">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>
