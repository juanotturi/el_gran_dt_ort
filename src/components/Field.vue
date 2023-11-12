<template>
    <div>
        <img class="cancha" src="../assets/cancha.png" />
        <Player v-for="player in players" :key="player.id" :id="player.id" :ubication="player.ubication" />
    </div>
</template>

<script setup>
import Player from './Player.vue';
import { ref } from 'vue';

const selectedPlayerId = ref(1);

const players = ref([
    { id: 1, ubication: { x: 298, y: 287 } },
    { id: 2, ubication: { x: 100, y: 150 } },
    // { id: 3, ubication: { x: 100, y: 150 } },
    // { id: 4, ubication: { x: 100, y: 150 } },
    // { id: 5, ubication: { x: 100, y: 150 } },
    // { id: 6, ubication: { x: 100, y: 150 } },
    // { id: 7, ubication: { x: 100, y: 150 } },
    // { id: 8, ubication: { x: 100, y: 150 } },
    // { id: 9, ubication: { x: 100, y: 150 } },
    // { id: 10, ubication: { x: 100, y: 150 } },
    // { id: 11, ubication: { x: 100, y: 150 } },
]);
</script>

<style>
@import url("@/assets/estilos.css");
</style>
