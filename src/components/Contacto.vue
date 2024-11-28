
<script setup>
import { ref } from 'vue';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formulario = ref({
  nombre: '',
  email: '',
  comentario: ''
});

const errores = ref({
  nombre: '',
  email: ''
});


const enviarFormulario = () => {
  validarNombre();
  validarEmail();

  
  if (!errores.value.nombre && !errores.value.email) {
    console.log('Formulario enviado:', formulario.value);

    // Guardar en localStorage
    localStorage.setItem('formularioData', JSON.stringify(formulario.value));

   
    limpiarFormulario();
  }
};

// Validación del nombre
const validarNombre = () => {
  errores.value.nombre = formulario.value.nombre.trim() ? '' : 'El nombre es obligatorio.';
};

// Validación del correo electrónico usando la expresión regular
const validarEmail = () => {
  errores.value.email = emailRegex.test(formulario.value.email) ? '' : 'El email es inválido.';
};

// Limpiar los campos del formulario y los errores
const limpiarFormulario = () => {
  formulario.value.nombre = '';
  formulario.value.email = '';
  formulario.value.comentario = '';
  errores.value.nombre = '';
  errores.value.email = '';
};
</script>






<template>
    <div class="contenedor-contacto">
      <div class="m-3">
        <img src="/public/img/contacto.png" class="img-contacto rounded-0 rounded-top-5 d-flex justify-content-center" width="280" alt="...">
        <h2 class="mt-4">Contáctanos</h2>
      </div>
      <div class="contenedor-contacto m-3">
        <form @submit.prevent="enviarFormulario" method="post" autocomplete="off">
          <div>
            <!-- Campo Nombre -->
            <div>
              <label for="fname">Nombre</label><br>
              <input v-model.trim="formulario.nombre" @input="validarNombre" type="text" class="form-control mt-2" id="fname" name="fname">
              <!-- Mostrar error si nombre es inválido -->
              <div v-if="errores.nombre" class="error">{{ errores.nombre }}</div>
            </div>
            
            <!-- Campo Email -->
            <div>
              <label for="user-email" class="form-label">Email</label>
              <input id="user-email" class="form-control" type="text" v-model="formulario.email" @input="validarEmail">
              <!-- Mostrar error si email es inválido -->
              <div v-if="errores.email" class="error">{{ errores.email }}</div>
            </div>
            
            <!-- Campo Comentario -->
            <div class="mb-2">
              <label class="text-form mb-2 mt-2">Comentario</label>
              <textarea id="text-comentario" class="form-control" name="mensaje" v-model="formulario.comentario" minlength="10" maxlength="255"></textarea>
            </div>
            
            <!-- Botón Enviar -->
            <div>
              <button type="submit" class="btn btn-primary mt-4">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    
  </template>
