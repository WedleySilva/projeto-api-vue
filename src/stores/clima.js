// import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useClimaStore = defineStore("clima", () => {
  const localizacoes_estado_info = useStorage("localizacoes", []);

  function saveInfos(localizacoes) {
    if (localizacoes != null) {
      localizacoes_estado_info.value.push(localizacoes);
    }
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
