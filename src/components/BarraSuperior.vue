<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconoUsuario from '../components/icons/IconoUsuario.vue'
</script>



<template>
   <div data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top ">
            <div class="container-fluid ">
            <router-link to ="/"class="text-decoration-none text-light "><img src="/public/img/logoballena.png" alt="Logo" width="32" height="23" class="d-inline-block align-text-top me-3">Azul Profundo </router-link>
            </div>

            <div class="position-absolute top-0 end-0 d-inline-block align-text-top me-3 mt-2 " >
                <RouterLink to = "/usuario"><IconoUsuario></IconoUsuario></RouterLink>
            </div>
        </nav>
    </div>
</template>