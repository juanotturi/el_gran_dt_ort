<template>
  <div class="centered-container">
    <UserInfoBar />
    <Field />
    <PlayerInfoBar />
  </div>
</template>

<script setup>
import PlayerInfoBar from "../components/PlayerInfoBar.vue";
import UserInfoBar from "../components/UserInfoBar.vue";
import Field from "../components/Field.vue";
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>
