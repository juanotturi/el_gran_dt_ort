import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTeamStore = defineStore("teamStore", () => {
  let _teamPrice = ref(0);

  async function calcularPrecioTotal(playersArray) {
    _teamPrice.value = await playersArray.reduce(
      (total, player) => total + player.price,
      0
    );
    teamPrice = _teamPrice;
  }

  let teamPrice = computed(() => ({
    teamPrice: _teamPrice,
  }));

  return {
    teamPrice,
    calcularPrecioTotal,
  };
});
