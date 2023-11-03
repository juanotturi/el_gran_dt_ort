<template>
    <div class="left-panel">
        <p>Equipo:</p>
        <p></p>
        <p>DT:</p>
        <p>{{ user }}</p>
        <p>Presupuesto total:</p>
        <p></p>
        <p>Utilizado:</p>
        <p></p>
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