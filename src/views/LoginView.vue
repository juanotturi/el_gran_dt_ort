<template>
  <div class="centered-container">
    <div class="logo-container">
      <img class="logo" src="../assets/logo_gran_dt_ort.png" alt="logo" />
    </div>
    <div class="centered-container box">
      <div class="login-box">
        <form @submit.prevent="login">
          <h2 style="color: rgb(249, 246, 246)">Iniciar Sesión</h2>
          <br />
          <div class="user-box">
            <input type="text" v-model="mail" required />
            <label>Usuario</label>
          </div>
          <div class="user-box">
            <input type="password" v-model="password" required />
            <label>Contraseña</label>
          </div>
          <center>
            <button type="submit" style="display: none"></button>
            <a href="#" @click="submitForm" class="custom-button">
              Ingresar
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';
import Button from 'primevue/button';

const mail = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

async function login() {
  const loginResult = await userStore.login(mail.value, password.value);
  if (loginResult) {
    router.push('/home');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
};
function submitForm() {
  const submitButton = document.querySelector("button[type=submit]");
  submitButton.click();
}
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>