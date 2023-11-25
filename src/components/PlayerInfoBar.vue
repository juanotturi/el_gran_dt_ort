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
const showList = ref(false);
const selectedPlayer = ref(null);
const playerStore = usePlayerStore();
let fieldPlayer = ref(null);
let positionUbic = ref(null);
let players = [];

async function openList() {
  fieldPlayer = playerStore.currentPlayer.currentPlayer.value;
  positionUbic = playerStore.fieldPosition.fieldPosition.value;
  if (!showList.value) {
    if (fieldPlayer == null) {
      await getPlayers();
    } else if (fieldPlayer.id > 100) {
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
    players = response.data.players.filter(player => player.id <= 100);
  } catch (error) {
    console.error("Error al obtener datos de jugadores:", error);
  }
}

async function getPlayersByPosition(position, id) {
  try {
    await getPlayers();
    let playersProv = players.filter((player) => player.position === position);
    playersProv = playersProv.filter((player) => player.id !== id);
    playersProv = playersProv.filter((player) => player.id <= 100);
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
    const confirmChange = window.confirm(`¿Desea cambiar a ${fieldPlayer.name} por ${player.name}?`);
    if (confirmChange) {
      agregarNuevoJugador(player);
    } else {
    }
  } else {
    alert("No ha seleccionado ningún jugador de la lista");
  }
}

async function agregarNuevoJugador(nuevoJugador) {
  try {
    const response = await axios.post('https://65593386e93ca47020aa1fc9.mockapi.io/playerUbication', nuevoJugador, {
   
    });

    if (response.status === 200 || response.status === 201) {
      // El jugador se agregó exitosamente
      console.log('Jugador agregado correctamente');
      // Puedes realizar acciones adicionales aquí, como actualizar la lista de jugadores
    } else {
      // Manejar el caso en el que la solicitud no fue exitosa
      console.error('No se pudo agregar el jugador');
    }
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error('Error al agregar jugador:', error);
  }
}

async function modificarJugador(idJugador, datosActualizados) {
  try {
    const response = await axios.put(`${URL_BASE}/players/${idJugador}`, datosActualizados, {
     
    });

    if (response.status === 200) {
      console.log('Jugador modificado correctamente');
      // Puedes realizar acciones adicionales aquí si es necesario
    } else {
      console.error('No se pudo modificar el jugador');
    }
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