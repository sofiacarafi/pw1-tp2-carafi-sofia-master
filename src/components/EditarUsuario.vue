<script setup>
import TusEventosLista from '../components/TusEventosLista.vue';
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
        <option value="2">Portugués</option>
        <option value="3">Inglés</option>
      </select>
    </div>
    <div class="border border-white rounded p-2 mb-3 border-opacity-25">
      <h6>Ubicación</h6>
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
    <TusEventosLista />
  </div>
</template>
