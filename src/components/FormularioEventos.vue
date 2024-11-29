<script setup>
import { ref, onMounted } from 'vue';

const email = ref('');
const isValid = ref(false);
const storedEmail = ref('');
const actividadReservada = ref(null);

// Cargar actividad reservada desde el localStorage
onMounted(() => {
  const actividadData = localStorage.getItem('reservaSeleccionada');
  if (actividadData) {
    actividadReservada.value = JSON.parse(actividadData);
  }
});

const handleInput = () => {
  isValid.value = email.value.includes('@') && email.value.length >= 10; 
};

const submitForm = () => {
  if (isValid.value && actividadReservada.value) {
    const reservaCompleta = {
      email: email.value,
      actividad: actividadReservada.value,
    };
    localStorage.setItem('reservaCompleta', JSON.stringify(reservaCompleta));
    console.log('Reserva enviada con éxito:', reservaCompleta); // Mostrar solo al enviar
    storedEmail.value = email.value; 
    alert('Reserva enviada con éxito.');
  } else {
    console.error('No hay actividad reservada o el email no es válido.');
  }
};
</script>

<template>
  <div class="contenedor-suscribite row g-0 position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img src="/img/suscribite.png" class="w-100" alt="suscribite">
    </div>
    <div class="col-md-6 p-4 ps-md-0">
      <h2 class="mt-0 text-center">Dejanos tu email y recibí el formulario de pago</h2>

      <!-- Mostrar actividad reservada -->
      <div v-if="actividadReservada" class="actividad-info mb-4">
        <h3>Actividad seleccionada:</h3>
        <p><strong>Título:</strong> {{ actividadReservada.titulo }}</p>
        <p><strong>Fecha:</strong> {{ actividadReservada.date }}</p>
        <p><strong>Precio:</strong> {{ actividadReservada.precio }}</p>
      </div>
      <div v-else>
        <p>No hay actividad seleccionada. Por favor, selecciona una actividad.</p>
      </div>

      <!-- Formulario -->
      <div class="contenedor-formulario row g-0 position-relative">
        <form @submit.prevent="submitForm" method="post" autocomplete="off">
          <div>
            <div class="m-2">
              <label for="user-email">Email</label>
            </div>
            <input 
              id="user-email" 
              type="text" 
              class="form-control mb-2" 
              v-model="email" 
              @input="handleInput"
            >
            <p v-if="!isValid && email.length > 0" class="text-danger">
              El email debe tener al menos 10 caracteres y contener un "@"
            </p>
          </div>
          <div>
            <button type="submit" class="btn btn-primary mt-4" :disabled="!isValid || !actividadReservada">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>