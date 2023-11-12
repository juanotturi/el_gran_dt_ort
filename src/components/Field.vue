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
    // ... otros jugadores
]);

const formation = ref('4-3-3');

const formationMappings = {
    '4-3-3': [
        { x: 298, y: 287 },
        { x: 100, y: 150 },
        // ... otras ubicaciones
    ],
    '4-4-2': [
        // ... otra formación
    ],
    '3-4-3': [
        // ... otra formación
    ],
};

const getPlayerUbication = (playerId) => {
    const playerIndex = players.value.findIndex((player) => player.id === playerId);
    if (playerIndex !== -1) {
        return formationMappings[formation.value][playerIndex];
    }
    return { x: 0, y: 0 }; // ubicación predeterminada si no se encuentra el jugador
};

// Puedes utilizar esta computed para obtener las ubicaciones de los jugadores
const playersUbications = computed(() => {
    return players.value.map((player) => getPlayerUbication(player.id));
});
</script>
  
<style>
@import url("@/assets/estilos.css");
</style>
  