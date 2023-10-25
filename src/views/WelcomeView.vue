<template>
  <div class="welcome-view">
    <img src="../assets/logo_gran_dt_ort.png" alt="logo">
    <h1>Bienvenido a El Gran DT ORT</h1>
    <button class="btn btn-primary" @click="goToLogin">Iniciar Sesión</button>
    <button class="btn btn-primary" @click="goToRegister">Registrarse</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.welcome-view {
  background-image: url("@/assets/cancha.png");
  /* Reemplaza con la ruta de tu imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0;
  padding: 0;
}
</style>
