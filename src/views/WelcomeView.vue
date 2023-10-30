<template>
  <div class="centered-container">
    <img class="logo" src="../assets/logo_gran_dt_ort.png" />
    <div class="centered-container box">
      <h1 class="titulo">Bienvenido a El Gran DT ORT</h1>
      <button class="btn btn-primary" @click="goToLogin">Iniciar Sesión</button>
      <td></td>
      <button class="btn btn-primary" @click="goToRegister">Registrarse</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
@import url("@/assets/estilos.css");
</style>
