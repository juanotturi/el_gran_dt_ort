<template>
  <div>
    <h1>Registro de usuario</h1>
    <div>
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="name">
    </div>
    <div>
      <label for="surname">Apellido:</label>
      <input type="text" id="surname" v-model="surname">
    </div>
    <div>
      <label for="mail">Mail:</label>
      <input type="text" id="mail" v-model="mail">
    </div>
    <div>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password">
    </div>
    <button class="btn btn-primary" @click="login">Registrar Usuario</button>
  </div>
</template>
  
<script>
export default {
  // Agrega aquí los métodos y lógica necesaria para el registro de usuarios
};
</script>
  