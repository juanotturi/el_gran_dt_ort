import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTeamStore = defineStore("teamStore", () => {
  let _teamPrice = ref(0);
  let _teamFormation = ref(null);
  let _positionUbic = ref(null);

  async function setPositionUbic(position) {
    _positionUbic = position;
    console.log(_positionUbic);
  }

  function setTeamFormation(formation) {
    _teamFormation = formation;
  }

  async function calcularPrecioTotal(playersArray) {
    _teamPrice.value = await playersArray.reduce(
      (total, player) => total + player.price,
      0
    );
    teamPrice = _teamPrice;
  }

  let teamFormation = computed(() => ({
    teamFormation: _teamFormation,
  }));

  let teamPrice = computed(() => ({
    teamPrice: _teamPrice,
  }));

  let positionUbic = computed(() => ({
    positionUbic: _positionUbic,
  }));

  return {
    teamPrice,
    teamFormation,
    setPositionUbic,
    setTeamFormation,
    calcularPrecioTotal,
    positionUbic,
  };
});
