<template>
  <img class="cancha" src="../assets/cancha.png" />
  <Player
    v-for="player in playersTeam"
    :key="player.id"
    :id="player.id"
    :ubication="getPlayerUbication(player.id)"
    :style="{ backgroundColor: isSelected(player.id) ? '#00D8D8' : 'white' }"
    @click="selectPlayer(player.id)"
  />
</template>

<script setup>
import Player from './Player.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedPlayerId = ref(null);
const players = ref(null);
const playersTeam = ref([
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
const formationMappings = ref([]);

const getPlayerUbication = async (playerId) => {
  const formationResponse = await axios.get('https://www.mockachino.com/6c00860e-b7b1-4f/formations');
  formationMappings.value = formationResponse.data.formations.reduce((acc, formation) => {
    acc[formation.description] = formation.ubications.coordinates;
    return acc;
  }, {});
  const playerIndex = playersTeam.value.findIndex((player) => player.id === playerId);
  if (formationMappings.value[formation.value]) {
    const playerUbication = {x: formationMappings.value[formation.value][playerIndex].x, y: formationMappings.value[formation.value][playerIndex].y};
    return playerUbication || { x: 0, y: 0 };
  } else {
    return { x: 0, y: 0 };
  }
};

const isSelected = (playerId) => {
  return selectedPlayerId.value === playerId;
};

const selectPlayer = (playerId) => {
  selectedPlayerId.value = playerId;
};

onMounted(async () => {
  try {
    const response = await axios.get('https://www.mockachino.com/e17428de-e644-4e/players');
    players.value = response.data.players;
    if (!formationMappings.value[formation.value]) {
      console.error(`Formation ${formation.value} not found in mappings.`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style>
@import url("@/assets/estilos.css");
</style>