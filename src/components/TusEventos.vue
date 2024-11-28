<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    imagen: String,
    titulo: String,
    fecha: String
  });
  </script>
  <template>
    <div class="contenedor-eventos">
      <div class="card w-80 m-2">
        <div class="card-body d-flex align-items-center">
          <img :src="imagen" class="card-img-left rounded me-3" :alt="titulo">
          <div>
            <h5 class="card-title">{{ titulo }}</h5>
            <p class="card-text">{{ fecha }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
 