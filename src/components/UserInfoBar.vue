<template>
    <div class="left-panel">
        <div class="panel-item">
            <p>Equipo:<br>{{ savedUser.team }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>DT:<br>{{ savedUser.name + " " + savedUser.surname }}</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Presupuesto total:<br>$ 50.000.000</p>
        </div>
        <div class="divider"></div>
        <div class="panel-item">
            <p>Utilizado:<br></p>
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
const savedUser = JSON.parse(localStorage.getItem('currentUser'));

if (!user.mail) {
    if (savedUser) {
        userStore.login(savedUser.mail, savedUser.password);
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