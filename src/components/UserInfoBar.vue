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
            <p>Presupuesto total:<br>$ 50.000.000</p>
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
                <option value="4-3-3">4-3-3</option>
                <option value="4-4-2">4-4-2</option>
                <option value="3-4-3">3-4-3</option>
            </select>
            </p>
        </div>
        <div class="divider"></div>
        <Button class="btn-danger" @click="logout" label="Cerrar Sesión" severity="danger" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user.js';
import Button from 'primevue/button';

const router = useRouter();
const userStore = useUserStore();
const user = userStore.currentUser;
let selectedFormation = '4-3-3';

function logout() {
    userStore.logout();
    router.push('/');
}
</script>

<style>
@import url("@/assets/estilos.css");
</style>
