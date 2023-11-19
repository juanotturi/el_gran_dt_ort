import { defineStore } from "pinia";
import { computed } from "vue";
import axios from "axios";

export const usePlayerStore = defineStore("playerStore", () => {
    let selectedPlayerId = null;
    let previousPlayerId = null;

    const setSelectedPlayerId = (playerId) => {
        selectedPlayerId.value = playerId;
    };

    const setPreviousPlayerId = (playerId) => {
        previousPlayerId.value = playerId;
    };

    const updatePreviousPlayerId = (playerId) => {
        setPreviousPlayerId(playerId);
    };

    return {
        // selectedPlayerId,
        // previousPlayerId: previousPlayerId,
        setSelectedPlayerId,
        setPreviousPlayerId,
        updatePreviousPlayerId,
    };
});