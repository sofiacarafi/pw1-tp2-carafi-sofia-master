<script setup>
import { ref, onMounted } from 'vue';

const email = ref('');
const isValid = ref(false);
const storedEmail = ref('');
const actividadReservada = ref(null);
const mensajeExito = ref('');
const mensajeError = ref('');

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

    const eventosGuardados = JSON.parse(localStorage.getItem('eventosReservados')) || [];
    eventosGuardados.push(reservaCompleta);
    localStorage.setItem('eventosReservados', JSON.stringify(eventosGuardados));

    console.log('Reserva enviada con éxito:', reservaCompleta);
    storedEmail.value = email.value;
    mensajeExito.value = 'Reserva enviada con éxito.';
    mensajeError.value = '';
  } else {
    mensajeExito.value = '';
    mensajeError.value = 'No hay actividad reservada o el email no es válido.';
  }
};
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 mb-4 mb-md-0">
        <img src="/img/suscribite.png" class="img-fluid" alt="Suscribite">
      </div>

      <div class="col-md-6 p-4">
        <h2 class="text-center mb-4">Dejanos tu email y recibí el formulario de pago</h2>

        <!-- Información de actividad reservada -->
        <div v-if="actividadReservada" class="mb-4">
          <h3>Actividad seleccionada:</h3>
          <p><strong>Título:</strong> {{ actividadReservada.titulo }}</p>
          <p><strong>Fecha:</strong> {{ actividadReservada.date }}</p>
          <p><strong>Precio:</strong> {{ actividadReservada.precio }}</p>
        </div>
        <div v-else>
          <p class="text-warning">No hay actividad seleccionada. Por favor, selecciona una actividad.</p>
        </div>

        <!-- Mensajes de éxito y error -->
        <div v-if="mensajeExito" class="alert alert-success">
          {{ mensajeExito }}
        </div>
        <div v-if="mensajeError" class="alert alert-danger">
          {{ mensajeError }}
        </div>

        <form @submit.prevent="submitForm" autocomplete="off">
          <div class="mb-3">
            <label for="user-email" class="form-label">Email</label>
            <input 
              id="user-email" 
              type="email" 
              class="form-control" 
              v-model="email" 
              @input="handleInput"
              required
              placeholder="Ingrese su email"
            >
            <div v-if="!isValid && email.length > 0" class="invalid-feedback d-block">
              El email debe tener al menos 10 caracteres y contener un "@"
            </div>
          </div>

          <button 
            type="submit" 
            class="btn  w-100" 
            :disabled="!isValid || !actividadReservada"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.text-warning {
  color: #e30755;
}

.invalid-feedback {
  font-size: 0.875rem;
  color: #e30755;
}

.alert {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
