<template>
    <div class="right-panel">
        <div class="logo-container">
            <img width="150" src="../assets/logo_gran_dt_ort.png" alt="logo"
                style="margin-top: -18px; margin-bottom: -18px;" />
        </div>
        <div class="panel-item">
            <p>Nombre:<br>{{ selectedPlayer ? selectedPlayer.name : '' }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Club:<br>{{ selectedPlayer ? selectedPlayer.club : '' }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Cotización:<br>{{ selectedPlayer ? selectedPlayer.market_value : '' }}</p>
        </div>
        <div class="divider"></div>
        <div>
            <Button @click="openList" class="fixed-width-button" label="Buscar" severity="info" />
        </div><br>
        <div class="custom-list" v-if="showList">
            <a v-for="player in players" :key="player.id" href="#" class="list-group-item list-group-item-action"
                @click="setPlayer(player)" :class="{ 'selected': player }">
                {{ player.name }}
            </a>
        </div>
        <div v-if="showList">
            <Button @click="changePlayer(selectedPlayer)" class=" fixed-width-button" label="Elegir" severity="info" />
        </div><br>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import axios from 'axios';

const showList = ref(false);
const selectedPlayer = ref(null);
const players = [];

function openList() {
    if (!showList.value) {
        // Realiza la solicitud al servidor Mock API para obtener datos reales de jugadores.
        axios.get('https://6547b8c5902874dff3acae98.mockapi.io/api/v1/players')
            .then(response => {
                // Agrega un console.log para mostrar los datos en la consola.
                console.log(response.data);
                // Almacena los datos de jugadores en la variable players.
                players.length = 0; // Limpia la lista de jugadores existente
                players.push(...response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos de jugadores:', error);
            });
    }
    showList.value = !showList.value;
}

function setPlayer(player) {
    selectedPlayer.value = player;
}

function changePlayer(player) {
    window.confirm(`¿Desea cambiar a ${player.name} por el jugador anterior?`)
}
</script>

<style>
@import url("@/assets/estilos.css");

.selected {
    background-color: white;
}
</style>