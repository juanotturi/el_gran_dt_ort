<template>
  <div class="right-panel">
    <div class="logo-container">
      <img width="150" src="../assets/logo_gran_dt_ort.png" alt="logo" style="margin-top: -18px; margin-bottom: -18px" />
    </div>
    <div class="panel-item">
      <p>Nombre:<br />{{ selectedPlayer ? selectedPlayer.name : "" }}</p>
    </div>
    <div class="divider"></div>
    <div class="panel-item">
      <p>Club:<br />{{ selectedPlayer ? selectedPlayer.club : "" }}</p>
    </div>
    <div class="divider"></div>
    <div class="panel-item">
      <p>Cotización:<br />$ {{ selectedPlayer ? selectedPlayer.price : "" }}</p>
    </div>
    <div class="divider"></div>
    <div>
      <Button @click="openList" class="fixed-width-button" label="Buscar" severity="info" />
    </div>
    <br />
    <div class="custom-list" v-if="showList">
      <a v-for="player in players" :key="player.id" href="#" class="list-group-item list-group-item-action"
        @click="setPlayer(player)" :class="{ selected: player }">
        {{ player.name }}
      </a>
    </div>
    <div v-if="showList">
      <Button @click="changePlayer(selectedPlayer)" class="fixed-width-button" label="Elegir" severity="info" />
    </div>
    <br />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import axios from "axios";
import { usePlayerStore } from "../stores/playerStore.js";
import { useTeamStore } from "../stores/teamStore";
const showList = ref(false);
const selectedPlayer = ref(null);
const playerStore = usePlayerStore();
const teamStore = useTeamStore()
let fieldPlayer = ref(null);
let positionUbic = ref(null);
let players = [];

async function openList() {
  fieldPlayer = playerStore.currentPlayer.currentPlayer.value;
  positionUbic = playerStore.fieldPosition.fieldPosition.value;
  if (!showList.value) {
    if (fieldPlayer == null) {
      await getPlayers();
    } else if (fieldPlayer.id >= 1 && fieldPlayer.id <= 11) {
      await getPlayersByPosition(positionUbic, fieldPlayer.id)
    } else {
      await getPlayersByPosition(fieldPlayer.position, fieldPlayer.id);
    }
    showList.value = true;
  } else {
    showList.value = false;
  }
}

async function getPlayers() {
  try {
    const response = await axios.get(
      "https://www.mockachino.com/e17428de-e644-4e/players"
    );
    players = response.data.players.filter(player => player.id > 11);
  } catch (error) {
    console.error("Error al obtener datos de jugadores:", error);
  }
}

async function getPlayersByPosition(position, id) {
  try {
    await getPlayers();
    let playersProv = players.filter((player) => player.position === position);
    playersProv = playersProv.filter((player) => player.id !== id);
    playersProv = playersProv.filter((player) => player.id > 11);
    players = playersProv;
  } catch (error) {
    console.error("Error al obtener datos de jugadores:", error);
    throw error;
  }
}

function setPlayer(player) {
  selectedPlayer.value = player;
}

async function changePlayer(player) {
  fieldPlayer = playerStore.currentPlayer.currentPlayer.value;
  if (player != null) {
    if (fieldPlayer != null) {
      let confirmChange
      if (fieldPlayer.id <= 11) {
        confirmChange = window.confirm(`¿Desea agregar a ${player.name} a su equipo?`);
      } else {
        confirmChange = window.confirm(`¿Desea cambiar a ${fieldPlayer.name} por ${player.name}?`);
      }
      if (confirmChange) {
        updatePlayer(fieldPlayer.id, player)
        alert('Presione ACTUALIZAR para ver su equipo nuevo')
      }
    } else {
      alert("No ha seleccionado ningún jugador del campo de juego");
    }
  } else {
    alert("No ha seleccionado ningún jugador de la lista");
  }
}

async function updatePlayer(idPlayer, newPlayer) {
  try {
    newPlayer = {
      player: {
        id: newPlayer.id,
        name: newPlayer.name,
        img: newPlayer.img,
        position: newPlayer.position,
        club: newPlayer.club,
        price: newPlayer.price
      }
    };
    const response = await axios.put(`https://65593386e93ca47020aa1fc9.mockapi.io/playerUbication/${idPlayer}`, newPlayer);
    if (response.status === 200) {
      console.log('Jugador modificado correctamente');
    } else {
      console.error('No se pudo modificar el jugador');
    }
    let responseTeam = await axios.get("https://65593386e93ca47020aa1fc9.mockapi.io/playerUbication/")
    console.log(responseTeam.data)
    teamStore.setTeam(responseTeam.data)
  } catch (error) {
    console.error('Error al modificar jugador:', error);
  }
}
</script>

<style>
@import url("@/assets/estilos.css");

.selected {
  background-color: white;
}
</style>