import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTeamStore = defineStore("teamStore", () => {
  let _teamPrice = ref(0);
  let _teamFormation = ref(null);
  let _team = ref([]);
  let _ubicationsArray = ref(null);
  let _selectedPlayer = ref(null);
  let _teamArrayId = ref(null);

  function setTeamArrayId(array) {
    _teamArrayId.value = array;
    console.log(_teamArrayId);
  }

  function setSelectedPlayer(idUb) {
    _selectedPlayer.value = idUb;
  }

  function setUbicationsArray(array) {
    _ubicationsArray = array;
  }

  function setTeam(teamField) {
    _team = teamField;
  }

  function setTeamFormation(formation) {
    _teamFormation = formation;
  }

  async function calcularPrecioTotal(playersArray) {
    let prices = playersArray.map((elemento) => elemento.player.price);
    let sumatoriaPrecios = 0;
    for (let priceI of prices) {
      sumatoriaPrecios = sumatoriaPrecios + priceI;
    }
    _teamPrice.value = sumatoriaPrecios;
    teamPrice = _teamPrice;
  }

  let selectedPlayer = computed(() => ({
    selectedPlayer: _selectedPlayer,
  }));

  let ubicationsArray = computed(() => ({
    ubicationsArray: _ubicationsArray,
  }));

  let teamFormation = computed(() => ({
    teamFormation: _teamFormation,
  }));

  let teamPrice = computed(() => ({
    teamPrice: _teamPrice,
  }));

  let team = computed(() => ({
    team: _team,
  }));

  let teamArrayId = computed(() => ({
    teamArrayId: _teamArrayId,
  }));

  return {
    teamArrayId,
    setTeamArrayId,
    selectedPlayer,
    setSelectedPlayer,
    teamPrice,
    ubicationsArray,
    setUbicationsArray,
    teamFormation,
    setTeam,
    setTeamFormation,
    calcularPrecioTotal,
    team,
  };
});
