<script setup>
import { RouterView } from "vue-router"

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
})
</script>

<template>
  <RouterView />
</template>
