<template>
    <div>
        <img class="cancha" src="../assets/cancha.png" />
        <Player v-for="player in players" :key="player.id" :id="player.id" :ubication="getPlayerUbication(player.id)" />
    </div>
</template>

<script setup>
import Player from './Player.vue';
import { ref, computed } from 'vue';

const selectedPlayerId = ref(1);

const players = ref([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
]);

const formation = ref('4-3-3');
const formations = 'https://www.mockachino.com/6c00860e-b7b1-4f/formations'
const formationMappings = {
    '4-3-3': [
        { x: 300, y: 295 },
        { x: 450, y: 520 },
        { x: 450, y: 370 },
        { x: 450, y: 220 },
        { x: 450, y: 80 },
        { x: 650, y: 480 },
        { x: 650, y: 295 },
        { x: 650, y: 120 },
        { x: 870, y: 480 },
        { x: 870, y: 295 },
        { x: 870, y: 120 },
    ],
    '4-4-2': [
        { x: 300, y: 295 },
        { x: 450, y: 520 },
        { x: 450, y: 370 },
        { x: 450, y: 220 },
        { x: 450, y: 80 },
        { x: 650, y: 520 },
        { x: 650, y: 370 },
        { x: 650, y: 220 },
        { x: 650, y: 80 },
        { x: 870, y: 370 },
        { x: 870, y: 220 },
    ],
    '3-4-3': [
        { x: 300, y: 295 },
        { x: 450, y: 480 },
        { x: 450, y: 295 },
        { x: 450, y: 120 },
        { x: 650, y: 520 },
        { x: 650, y: 370 },
        { x: 650, y: 220 },
        { x: 650, y: 80 },
        { x: 870, y: 480 },
        { x: 870, y: 295 },
        { x: 870, y: 120 },
    ],
};

const getPlayerUbication = (playerId) => {
    const playerIndex = players.value.findIndex((player) => player.id === playerId);
    if (playerIndex !== -1) {
        return formationMappings[formation.value][playerIndex];
    }
    return { x: 0, y: 0 };
};

const playersUbications = computed(() => {
    return players.value.map((player) => getPlayerUbication(player.id));
});
</script>

<style>
@import url("@/assets/estilos.css");
</style>
  