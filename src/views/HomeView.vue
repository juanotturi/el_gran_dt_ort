<template>
  <div class="centered-container">
    <UserInfoBar />
    <img class="cancha" src="../assets/cancha.png" />
    <PlayerInfoBar />
  </div>
</template>

<script setup>
import PlayerInfoBar from '../components/PlayerInfoBar.vue';
import UserInfoBar from '../components/UserInfoBar.vue';
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>
