<template>
  <div class="centered-container">
    <img class="logo" src="../assets/logo_gran_dt_ort.png" alt="logo" />
    <div class="centered-container box">
      <h1 class="titulo">Registro de usuario</h1>
      <div>
        <input type="text" id="name" v-model="name" placeholder="Nombre" required />
      </div>
      <div>
        <input type="text" id="surname" v-model="surname" placeholder="Apellido" required />
      </div>
      <div>
        <input type="text" id="mail" v-model="mail" placeholder="Correo electrónico" required />
      </div>
      <div>
        <input type="password" id="password" v-model="password" placeholder="Contraseña" required />
      </div>
      <div>
        <button class="btn btn-primary" @click="signin">
          Registrar Usuario
        </button>
      </div>
      <div>
        <button class="btn btn-primary" @click="goToWelcome">
          Volver al inicio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.push({ name: "home" });
    },
    goToWelcome() {
      this.$router.push({ name: "welcome" });
    },
  },
};
</script>
<style scoped>
@import url("C:\Users\Usuario\OneDrive\Escritorio\JUAN_PROGRAMACION\PNT2\ElGranDT_ORT\src\assets\estilos.css");
</style>
