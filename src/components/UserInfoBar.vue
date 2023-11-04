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
            <p>Presupuesto total:<br>$ 1.000.000</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Utilizado:<br></p>
        </div>
        <div class="divider"></div>
        <button class="btn btn-danger" @click="logout">Cerrar Sesión</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user.js';

const router = useRouter();
const userStore = useUserStore();
const user = userStore.currentUser;

function logout() {
    userStore.logout();
    router.push("/");
}
</script>

<style>
@import url("@/assets/estilos.css");
</style>