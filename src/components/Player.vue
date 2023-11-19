<template>
    <div v-if="player" class="player-card" :style="{ left: player.ubication.x + 'px', top: player.ubication.y + 'px' }">
      <img :src="player.img" :alt="player.name" class="player-image" /><br>
      {{ player.name }}<br>
      {{ player.club }}<br>
      {{ player.position === 'arquero'
        ? 'ARQ'
        : player.position === 'defensor'
          ? 'DEF'
          : player.position === 'volante'
            ? 'VOL'
            : player.position === 'delantero'
              ? 'DEL'
              : 'POSICIÓN DESCONOCIDA'
      }}<br>
      $ {{ player.price }}
    </div>
    <div v-else>
      <p>Cargando jugador...</p>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  let players = null
  let props = defineProps(['id', 'ubication']);
  let player = ref(null);
  
  async function getPlayers() {
    try {
      const response = await axios.get("https://www.mockachino.com/e17428de-e644-4e/players");
      players = response.data.players;
      return players;
    } catch (error) {
      console.error('Error al obtener datos de jugadores:', error);
      return [];
    }
  }
  
  onMounted(async () => {
  try {
    const players = await getPlayers();
    const selectedPlayer = players.find(player => player.id === props.id);
    if (selectedPlayer) {
      const ubication = await props.ubication;
      player.value = { ...selectedPlayer, ubication: ubication };
    } else {
      console.error('Jugador no encontrado con el ID proporcionado');
    }
  } catch (error) {
    console.error('Error al procesar datos de jugadores:', error);
  }
});
</script>

<style scoped>
@import url("@/assets/estilos.css");
</style>