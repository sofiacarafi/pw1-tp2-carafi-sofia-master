
  <script>
  export default {
    data(){
      return {
        users: [],
        id_user: 0,
        name: '',
        email: '',
        password: ''
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      async getUsers(){

        try {
          const endPoint = 'http://127.0.0.1/backend/getUser.php';
          console.log('fetch')
          const response = await fetch(endPoint);
          const json = await response.json();
          console.log(json);
          this.users = json;
          
        } catch (error) {
          alert('Error del servidor')
        }
      },

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
          console.log(json);
          this.getUsers()
          


          console.log(data)
        } catch (error) {
          console.error(error)
        }


      },
      async deleteUser(user){
        try {
          const data = {
            id_user: user.id_user
          }

          const endPoint = 'http://127.0.0.1/backend/deleteUser.php';
          const config = {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
          }
          const response = await fetch(endPoint, config);
          const json = await response.json();
          console.log(json);
          this.getUsers()
          
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<template>
    <div class="about text-center mt-5 m-2 mb-5">
        <h1>Incripciones Nuevas</h1>
        <hr>
        <form v-on:submit.prevent="postUser" action="" class="">
            <label for="">Nombre</label>
            <input type="text" v-model="name" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">

            <label for="">Email</label>
            <input type="email" v-model="email" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">


            <label for="">Contraseña</label>
            <input type="password" v-model="password" class="form-control border border-white rounded p-2 mb-3 border-opacity-25">

            <button type="submit" class="btn btn-success m-2">Guardar</button>
            
           
        </form>
        <ul>
        <li v-for="user in users">
            <strong>{{ user.name }}</strong>
            <span>{{ user.email }}</span>
            <button v-on:click="deleteUser(user)" type="button" class=" btn bg-danger  m-2"> X</button>

        </li>
    </ul>
    </div>






</template>











