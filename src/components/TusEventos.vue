<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imagen: String,
  titulo: String,
  fecha: String
});


function reservarEvento() {
  const eventoSeleccionado = {
    titulo: props.titulo,
    fecha: props.fecha,
    imagen: props.imagen,
  };

  let eventosGuardados = JSON.parse(localStorage.getItem('eventosReservados')) || [];
  eventosGuardados.push(eventoSeleccionado);
  localStorage.setItem('eventosReservados', JSON.stringify(eventosGuardados));
  console.log("Evento reservado:", eventoSeleccionado); 
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
          <button @click="reservarEvento" class="btn btn-primary">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>
