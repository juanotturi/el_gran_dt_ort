<template>
  <div>
    <div>
      <img src="../assets/logo_gran_dt_ort.png" alt="logo">
      <h1 style="text-align: center">Bienvenido a El Gran DT ORT</h1>
    </div>
    <div>
      <button class="btn btn-primary" @click="goToLogin">Iniciar Sesión</button>
      <button class="btn btn-primary" @click="goToRegister">Registrarse</button>
    </div>
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

<style scoped></style>