<script setup>

defineProps({ 
  titulo : String,
  descripcion : String,
 
 
},
)
</script>
<template>
   
    
    <div class=" border border-white rounded p-2 mb-3 border-opacity-25">
    <h3>{{titulo}}</h3>
    <p >{{descripcion}}</p>
    </div> 
   </template>