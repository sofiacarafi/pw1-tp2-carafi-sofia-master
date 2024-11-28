<script>
export default {
    data(){
        return {

            id_user: 0,
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
    async postUser(){
        try {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            const endPoint = 'http://127.0.0.1/backend/postUser.php';
            const config = {
                headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            }
            const response = await fetch(endPoint, config);
            const json = await response.json();
            
            this.$router.push('/editar');

        } catch (error) {
            console.error(error)
        }


    },

    }
  }
</script>
<template>
    <div class="about text-center mt-5 m-2">
        <h1>Nuevo Usuario</h1>
        <hr>
        <form v-on:submit.prevent="postUser" action="" class="">
            <label for="">Nombre</label>
            <input type="text" v-model="name" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">

            <label for="">Email</label>
            <input type="email" v-model="email" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">


            <label for="">Contraseña</label>
            <input type="text" v-model="password" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">

            <button type="submit" class="btn btn-success m-2">Guardar</button>
            
            <RouterLink to = "/"><button type="submit" class="btn btn-success m-2 ">Cancelar</button></RouterLink>
        </form>
    </div>






</template>



<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        margin: 20px;
        
    }
}
</style>






