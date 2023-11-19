import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePlayerStore = defineStore("playerStore", () => {
  let _fieldPlayerId = ref(null);
  let currentPlayer = ref(null);

  async function setFieldPlayerId(id) {
    _fieldPlayerId = id;
    currentPlayer = await getPlayerById(_fieldPlayerId);
    console.log(currentPlayer);
  }

  async function getPlayerById(playerId) {
    try {
      const response = await axios.get(
        `https://www.mockachino.com/e17428de-e644-4e/players`
      );
      const player = response.data.players.find((p) => p.id === playerId);
      if (player) {
        return player;
      } else {
        console.error(`Jugador con ID ${playerId} no encontrado.`);
        return null;
      }
    } catch (error) {
      console.error(
        `Error al obtener datos del jugador con ID ${playerId}:`,
        error
      );
      throw error;
    }
  }

  return { _fieldPlayerId, setFieldPlayerId, getPlayerById, currentPlayer };
});
