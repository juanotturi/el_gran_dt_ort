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
            <p>Cotización total:<br>---</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>
            <p for="formation">Formación:</p>
            <select v-model="selectedFormation" id="formation">
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
import { onMounted ,ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';
import Button from 'primevue/button';
import axios from "axios";

//let selectedFormation = null;
let formations = ref(null)
const router = useRouter();
const userStore = useUserStore();
const user = userStore.currentUser;
let selectedFormation = '4-3-3';

onMounted(async () => {
    await fetchFormations();
    selectedFormation = formations.value[0].value;
});

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

function logout() {
    userStore.logout();
    router.push('/');
}
</script>

<style>
@import url("@/assets/estilos.css");
</style>