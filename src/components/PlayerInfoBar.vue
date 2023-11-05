<template>
    <div class="right-panel">
        <div class="logo-container">
            <img width="150" src="../assets/logo_gran_dt_ort.png" alt="logo" />
        </div>
        <div class="panel-item">
            <p>Nombre:<br></p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Club:<br></p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Cotización:<br></p>
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
    { id: "001", name: 'Adam Bareriro', club: 'San Lorenzo', position: 'delantero', market_value: '150000' },
    { id: "002", name: 'Luís Advíncula', club: 'Boca Juniors', position: 'defensor', market_value: '200000' },
    { id: "003", name: 'Enzo Pérez', club: 'River Plate', position: 'volante', market_value: '160000' },
    { id: "004", name: 'Augusto Batalla', club: 'San Lorenzo', position: 'arquero', market_value: '200000' },
    { id: "005", name: 'Marcos Rojo', club: 'Boca Juniors', position: 'defensor', market_value: '160000' },
    { id: "006", name: 'Matías Cóccaro', club: 'Huracán', position: 'delanter', market_value: '150000' },
    { id: "007", name: 'Franco Armani', club: 'River Plate', position: 'arquero', market_value: '200000' },
    { id: "008", name: 'Agustín Giay', club: 'San Lorenzo', position: 'volante', market_value: '180000' },
    { id: "009", name: 'Sergio Romero', club: 'Boca Juniors', position: 'arquero', market_value: '150000' },
    { id: "010", name: 'Salomón Rondón', club: 'River Plate', position: 'delantero', market_value: '250000' },
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