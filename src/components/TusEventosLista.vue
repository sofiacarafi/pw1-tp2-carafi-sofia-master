<script setup>
import TusEventos from './TusEventos.vue';
import ImgBuceo from '/img/actbuceo.jpg';
import ImgSoltarTortugas from '/img/actsoltartortuga.jpg';


let datos = [
    {
    imagen : ImgBuceo,
    titulo : "Buceo",
    fecha : "27/02/2024",
    
},
{
    imagen : ImgSoltarTortugas,
    titulo : "Soltar tortugas",
    fecha : "25/03/2024",
  
},


]

</script>


<template>
     <h2 class="text-center mt-5">Tus proximos eventos</h2>
    
    <TusEventos
      v-for="dato in datos "
      :imagen="dato.imagen"
      :titulo="dato.titulo"
      :fecha="dato.fecha"
      ></TusEventos>
 

   </template>