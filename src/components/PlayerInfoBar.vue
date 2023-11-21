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
let fieldPlayer = ref(null);
let players = [];

async function openList() {
  fieldPlayer = playerStore.currentPlayer.currentPlayer.value;
  if (!showList.value) {
    if (fieldPlayer == null) {
      await getPlayers();
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
    players = response.data.players;
  } catch (error) {
    console.error("Error al obtener datos de jugadores:", error);
  }
}

async function getPlayersByPosition(position, id) {
  try {
    await getPlayers();
    let playersProv = players.filter((player) => player.position === position);
    playersProv = playersProv.filter((player) => player.id !== id);
    players = playersProv;
  } catch (error) {
    console.error("Error al obtener datos de jugadores:", error);
    throw error;
  }
}

function setPlayer(player) {
  selectedPlayer.value = player;
}

function changePlayer(player) {
  fieldPlayer = playerStore.currentPlayer.currentPlayer.value;
  if (player != null) {
    window.confirm(`¿Desea cambiar a ${fieldPlayer.name} por ${player.name}?`);
  } else {
    alert("No ha seleccionado ningún jugador de la lista");
  }
}
</script>

<style>
@import url("@/assets/estilos.css");

.selected {
  background-color: white;
}
</style>
