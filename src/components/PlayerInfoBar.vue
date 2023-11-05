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

const showList = ref(false);
const selectedPlayer = ref(null);
const players = [
    { id: "001", name: 'Bareriro Adam', club: 'San Lorenzo', position: 'delantero', market_value: 4200000 },
    { id: "002", name: 'Advíncula Luís', club: 'Boca Juniors', position: 'defensor', market_value: 4700000 },
    { id: "003", name: 'Pérez Enzo', club: 'River Plate', position: 'volante', market_value: 4200000 },
    { id: "004", name: 'Batalla Augusto', club: 'San Lorenzo', position: 'arquero', market_value: 5000000 },
    { id: "005", name: 'Rojo Marcos', club: 'Boca Juniors', position: 'defensor', market_value: 5000000 },
    { id: "006", name: 'Cóccaro Matías', club: 'Huracán', position: 'delanter', market_value: 4500000 },
    { id: "007", name: 'Armani Franco', club: 'River Plate', position: 'arquero', market_value: 5900000 },
    { id: "008", name: 'Giay Agustín', club: 'San Lorenzo', position: 'volante', market_value: 1400000 },
    { id: "009", name: 'Romero Sergio', club: 'Boca Juniors', position: 'arquero', market_value: 6000000 },
    { id: "010", name: 'Rondón Salomón', club: 'River Plate', position: 'delantero', market_value: 5000000 },
];
function openList() {
    showList.value = !showList.value;
}

function setPlayer(player) {
    selectedPlayer.value = player;
}

function changePlayer(player) {
    window.confirm(`¿Desea cambiar a ${player.name} por Jugador anterior?`)
}
</script>

<style>
@import url("@/assets/estilos.css");

.selected {
    background-color: white;
}
</style>