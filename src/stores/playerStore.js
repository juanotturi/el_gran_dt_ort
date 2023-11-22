import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const usePlayerStore = defineStore("playerStore", () => {
  let _fieldPlayerId = ref(null);
  let _currentPlayer = ref(null);
  let _fieldPosition = ref(null);

  async function setFieldPlayerId(id, position) {
    _fieldPlayerId.value = id;
    _fieldPosition.value = position;
    _currentPlayer.value = await getPlayerById(_fieldPlayerId.value);
    fieldPosition = _fieldPosition;
    currentPlayer = _currentPlayer;
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

  let fieldPlayerNull = computed(() => ({
    fieldPlayerNull: _fieldPlayerId == null && _currentPlayer == null,
  }));

  let fieldPlayerId = computed(() => ({
    fieldPlayerId: _fieldPlayerId,
  }));

  let fieldPosition = computed(() => ({
    fieldPosition: _fieldPosition,
  }));

  let currentPlayer = computed(() => ({
    currentPlayer: _currentPlayer,
  }));

  return {
    fieldPlayerId,
    fieldPosition,
    currentPlayer,
    setFieldPlayerId,
    fieldPlayerNull,
  };
});
