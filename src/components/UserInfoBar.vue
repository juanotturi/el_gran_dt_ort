<template>
    <div class="left-panel">
        <div class="panel-item">
            <p>Equipo:<br>{{ user.team }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>DT:<br>{{ user.name + " " + user.surname }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Presupuesto total:<br>$ 50000000</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Cotización total:<br>$ {{ teamStore.teamPrice.teamPrice.value }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>
            <p for="formation">Formación:</p>
            <select v-model="selectedFormation" id="formation" @change="handleFormationChange">
                <option v-for="formation in formations" :key="formation.key" :value="formation.value">
                    {{ formation.value }}
                </option>
            </select>
            </p>
        </div>
        <div class="divider"></div>
        <Button class="btn-danger" @click="logout" label="Cerrar Sesión" severity="danger" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';
import { useTeamStore } from '../stores/teamStore.js';
import Button from 'primevue/button';
import axios from "axios";

let formations = ref(null);
const router = useRouter();
const userStore = useUserStore();
const teamStore = useTeamStore();
const user = userStore.currentUser;
let selectedFormation;

function handleFormationChange() {
    if (window.confirm(`¿Esta seguro que desea cambiar su formación a ${selectedFormation}? Deberá armar su equipo nuevamente`)) {
        teamStore.setTeamFormation(selectedFormation)
    }
}

async function fetchFormations() {
    try {
        const response = await axios.get('https://www.mockachino.com/6c00860e-b7b1-4f/formations');
        formations.value = response.data.formations.map((formation) => ({
            key: formation.id,
            value: formation.description,
        }));
    } catch (error) {
        console.error('Error fetching formations:', error);
    }
}

onMounted(async () => {
    await fetchFormations();
    selectedFormation = formations.value[2].value;
    teamStore.setTeamFormation(selectedFormation)
});

function logout() {
    userStore.logout();
    router.push('/');
}
</script>

<style>
@import url("@/assets/estilos.css");
</style>