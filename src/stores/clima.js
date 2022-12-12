// import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useClimaStore = defineStore("clima", () => {
  const localizacoes_estado_info = useStorage("localizacoes", []);

  function saveInfos(localizacoes) {
    localizacoes_estado_info.value = localizacoes;
  }
  function deleteInfos() {
    localizacoes_estado_info.value = [];
  }

  return {
    localizacoes_estado_info,
    saveInfos,
    deleteInfos,
  };
});
