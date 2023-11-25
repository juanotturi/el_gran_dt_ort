import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTeamStore = defineStore("teamStore", () => {
  let _teamPrice = ref(0);
  let _teamFormation = ref(null);
  let _team = ref(null);

  function setTeam(teamField) {
    _team = teamField;
    console.log(_team);
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

  let team = computed(() => ({
    team: _team,
  }));

  return {
    teamPrice,
    teamFormation,
    setTeam,
    setTeamFormation,
    calcularPrecioTotal,
    team,
  };
});
