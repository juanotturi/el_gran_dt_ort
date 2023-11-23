<template>
  <img class="cancha" src="../assets/cancha.png" />
  <Player v-for="player in playersTeam" :key="player.id" :id="player.id" :ubication="getPlayerUbication(player.id)"
    :style="getPlayerStyle(player.id)" @click="selectPlayer(player.id)" />
</template>

<script setup>
import Player from "./Player.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { usePlayerStore } from "../stores/playerStore.js";
import { useTeamStore } from "../stores/teamStore";
const playerStore = usePlayerStore();
const teamStore = useTeamStore();
let selectedPlayerId = ref(null);
let selectedPlayer = ref(null);
let formationsList;
const players = ref(null);
const playersTeam = ref(Array.from({ length: 11 }, () => ({ id: 0 })));
let playerIndex = 0;

let formation = ref('4-4-2');
let formationMappings = ref([]);

const getPlayerUbication = async (playerId) => {
  const formationResponse = await axios.get(
    "https://www.mockachino.com/6c00860e-b7b1-4f/formations"
  );
  formationMappings.value = formationResponse.data.formations.reduce(
    (acc, formation) => {
      acc[formation.description] = formation.ubications.coordinates;
      return acc;
    },
    {}
  );
  formationsList = formationResponse
  if (formationMappings.value[formation.value]) {
    const playerUbication = {
      x: formationMappings.value[formation.value][playerIndex].x,
      y: formationMappings.value[formation.value][playerIndex].y,
    };
    playerIndex = playerIndex + 1
    return playerUbication || { x: 0, y: 0 };
  } else {
    return { x: 0, y: 0 };
  }
};

function getPlayerStyle(playerId) {
  if (playerId !== 0) {
    return {
      backgroundColor: isSelected(playerId) ? '#00D8D8 !important' : 'white',
    };
  } else {
    return {
      backgroundColor: isSelected(playerId) ? '#00D8D8 !important' : 'dimgray',
    };
  }
};

function isSelected(playerId) {
  return selectedPlayerId.value === playerId;
};

const selectPlayer = async (playerId) => {
  let playerIndex = playersTeam.value.findIndex(
    (player) => player.id === playerId
  );
  await playerStore.setFieldPlayerId(playerId, formationsList.data.formations[2].ubications.coordinates[playerIndex].position);
  selectedPlayer = playerStore.currentPlayer.currentPlayer.value;
  selectedPlayerId.value = playerId;
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://www.mockachino.com/e17428de-e644-4e/players"
    );
    players.value = response.data.players;
    if (!formationMappings.value[formation.value]) {
      console.error(`Formation ${formation.value} not found in mappings.`);
    }
    let playersInTeam = generateDefaultPlayersArray()
    formation = teamStore.teamFormation;
    teamStore.calcularPrecioTotal(playersInTeam);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function generateDefaultPlayersArray() {
  const defaultPlayer = {
    id: 0,
    name: "",
    img: "",
    position: "",
    club: "",
    price: 0
  };
  const defaultPlayersArray = Array.from({ length: 11 }, () => ({ ...defaultPlayer }));
  return defaultPlayersArray;
}
</script>

<style>
@import url("@/assets/estilos.css");
</style>