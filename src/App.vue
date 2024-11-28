<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BarraSuperior from '@/components/BarraSuperior.vue';
import BarraInferior from '@/components/BarraInferior.vue';


</script>

<template>
<BarraSuperior></BarraSuperior>
<RouterView />
<BarraInferior></BarraInferior>


</template>


