<template>
    <div>
        <h1>Inicio de sesión</h1>
        <div>
            <label for="mail">Mail:</label>
            <input type="text" id="mail" v-model="mail">
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button class="btn btn-primary" @click="login">Iniciar Sesión</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            mail: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Aquí debes implementar la lógica para iniciar sesión
            // Puedes usar this.username y this.password para acceder a los datos del formulario
            // Realiza la autenticación y redirige al usuario si es exitosa
        }
    }
};
</script>
  