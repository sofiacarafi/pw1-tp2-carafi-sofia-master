<script setup>
import { ref } from 'vue';

const email = ref('');
const isValid = ref(false);

const handleInput = () => {
  isValid.value = email.value.includes('@') && email.value.length >= 10; 
};

const submitForm = () => {
  if (isValid.value) {
    localStorage.setItem('userEmail', email.value);
    console.log('Email guardado en localStorage:', email.value);
    
    
  }
};
</script>

<template>
  <div class="contenedor-suscribite row g-0 position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img src="/public/img/suscribite.png" class="w-100" alt="suscribite">
    </div>
    <div class="col-md-6 p-4 ps-md-0">
      <h2 class="mt-0">Quedate conectado</h2>
      <p>Enterate de los últimos eventos y sumate!</p>

      <form @submit.prevent="submitForm" method="post" autocomplete="off">
        <div>
          <div class="mb-3">
            <label for="user-email">Email</label>
          </div>
          <input id="user-email" type="text" class="form-control mb-2" v-model="email" @input="handleInput">
          <p v-if="!isValid && email.length > 0">El email debe tener al menos 10 caracteres y contener un "@"</p>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Acepto todas las condiciones
          </label>
        </div>
        <div>
          <button type="submit" class="btn btn-primary mt-4" :disabled="!isValid">Unite</button>
        </div>
      </form>
    </div>
  </div>
</template>



