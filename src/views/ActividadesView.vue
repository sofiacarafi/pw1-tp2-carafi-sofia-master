<script setup>
import { onMounted, ref } from 'vue';

const actividades = ref([]);

onMounted(() => {
  fetch('/actividades.json')
    .then((res) => res.json())
    .then((json) => {
      actividades.value = json;
    })
    .catch((error) => {
      console.error('Error al cargar las actividades:', error);
    });
});
</script>

<template>
  <h1 class="text-center mt-5">Actividades</h1>

  <div v-for="actividad in actividades" :key="actividad.id">
    <RouterLink class="text-decoration-none" :to="`/actividades/${actividad.id}`">
      <div class="container-card d-flex flex-column mt-3">
        <div>
          <div class="card m-2">
            <img :src="actividad.imagen" class="card-img-top border-4" :alt="actividad.titulo">
            <div class="card-body">
              <p class="card-date">{{ actividad.date }}</p>
              <h1 class="titulo_actividades">{{ actividad.titulo }}</h1>
              <p class="card-text">{{ actividad.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
