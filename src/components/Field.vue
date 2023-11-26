<template>
  <img class="cancha" src="../assets/cancha.png" />
  <Button @click="updateTeam()" class="fixed-width-button update-button" label="ACTUALIZAR" severity="success" />
  <Player v-for="player in playersTeam" :key="player.id" :id="player.id" :ubication="getPlayerUbication(player.id)"
    :style="getPlayerStyle(player.id)" @click="selectPlayer(player.id)" />
</template>

<script setup>
import Player from "./Player.vue";
import Button from "primevue/button";
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
let playersTeam = ref(Array.from({ length: 11 }, (_, index) => ({ id: 1 + index })));
let playerIndex = 0;
let formation = ref('4-4-2');
let formationMappings = ref([]);

function updateTeam() {
  playersTeam.value = teamStore.team.team.map(item => ({ id: item.player.id }))
}

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
  let playerUbication = null;
  if (formationMappings.value[formation.value]) {
    teamStore.setUbicationsArray(formationMappings.value[formation.value])
  } else {
    formationMappings.value[formation.value] = teamStore.ubicationsArray.ubicationsArray
  }
  playerUbication = {
    x: formationMappings.value[formation.value][playerIndex].x,
    y: formationMappings.value[formation.value][playerIndex].y,
  };
  playerIndex = playerIndex + 1
  if (playerIndex === 11) {
    playerIndex = 0
  }
  return playerUbication || { x: 0, y: 0 };
};

function getPlayerStyle(playerId) {
  if (playerId > 11) {
    return {
      backgroundColor: isSelected(playerId) ? '#00D8D8 !important' : 'white !important',
    };
  } else {
    return {
      backgroundColor: isSelected(playerId) ? '#00D8D8 !important' : 'dimgray !important',
      color: 'dimgray'
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
    let playersInTeam = generateDefaultPlayersArray();
    for (const player of playersInTeam) {
      await axios.post("https://65593386e93ca47020aa1fc9.mockapi.io/playerUbication", player)
    }
    formation = teamStore.teamFormation;
    teamStore.setTeam(playersTeam.value)
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
  const defaultPlayersArray = Array.from({ length: 11 }, (_, index) => ({
    player: {
      ...defaultPlayer,
      id: 1 + index
    },
    idUb: (1 + index).toString()
  }));
  return defaultPlayersArray;
}

</script>

<style>
@import url("@/assets/estilos.css");
</style>