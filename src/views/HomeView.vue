<template>
  <div class="centered-container">
    <UserInfoBar />
    <Field />
    <PlayerInfoBar />
  </div>
</template>

<script setup>
import PlayerInfoBar from '../components/PlayerInfoBar.vue';
import UserInfoBar from '../components/UserInfoBar.vue';
import Field from '../components/Field.vue';
import { ref } from 'vue';
import { usePlayerStore } from '../stores/player';

const playerStore = usePlayerStore();

const previousPlayerId = ref(null);
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>