<template>
    <div class="centered-container">
        <img class="logo" src="../assets/logo_gran_dt_ort.png" alt="logo">
        <div class="centered-container box">
            <h1 class="titulo">Inicio de sesión</h1>
            <div>
                <input type="text" id="mail" v-model="mail" placeholder="Correo electrónico" required>
            </div>
            <div>
                <input type="password" id="password" v-model="password" placeholder="Contraseña" required>
            </div>
            <div>
                <button class="btn btn-primary" @click="login">Iniciar Sesión</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="goToWelcome">Volver al inicio</button>
            </div>
        </div>
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
            this.$router.push('/home');
        },
        goToWelcome() {
            this.$router.push({ name: 'welcome' });
        },
    }
};
</script>
<style scoped>
@import url("D:\el_gran_dt_ort\src\assets\estilos.css");
</style>