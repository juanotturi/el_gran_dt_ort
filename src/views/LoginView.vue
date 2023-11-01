<template>
  <div class="centered-container">
    <img class="logo" src="../assets/logo_gran_dt_ort.png" alt="logo" />
    <div class="centered-container box">
      <h1 class="titulo">Inicio de sesión</h1>
      <div>
        <input type="text" id="mail" v-model="mail" placeholder="Correo electrónico" required />
      </div>
      <div>
        <input type="password" id="password" v-model="password" placeholder="Contraseña" required />
      </div>
      <div>
        <button class="btn btn-primary" @click="login">Iniciar Sesión</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user.js';

const mail = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

const login = () => {
  if (userStore.login(mail.value, password.value)) {
    router.push('/home');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
};
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>
