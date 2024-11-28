
<script setup>
import SobreNosotrosCompleto from './SobreNosotrosCompleto.vue';

let datos = [
    {
    
    titulo : "64.000t",
    descripcion : "De aparatejos de pesca comerciales se vierten o desechan en el oceano cada año",
    
},
{
    
    titulo : "46%",
    descripcion : "De plastico en la gran zona de basura del pasifico proviene de las redes pesqueras",
  
},
{
    titulo : "80.000t",
    descripcion : "De toneladas de animales son capturados accidentalmente por las redes",
  
},

]

</script>


<template>
    
    <p class="d-flex justify-content-center mt-2 m-4 ">El objetivo principal de nuetsro proyecto es permitir la reutilizacion o el reciclaje de todos los artes de pesca que capturemos,y la ganancia se remontara a Azul profundo.</p>
    
    <div class="m-4 mb-5">
    <h2 >Datos importantes</h2>
    
    <SobreNosotrosCompleto
      v-for="dato in datos " 
      :titulo="dato.titulo"
      :descripcion="dato.descripcion"
      ></SobreNosotrosCompleto>
 
</div>
   
   </template>