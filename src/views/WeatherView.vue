<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      resultados: [],
      atual_clima: [],
    };
  },
  async created() {
    const resultados = await forecaApi.LocationSearch("Brasil");
    this.resultados = resultados.locations;
    console.log(this.resultados);

    const atual_clima = await forecaApi.CurrentWeather(103469058);
    this.atual_clima = atual_clima.current;
    // console.log(this.atual_clima);
  },

  methods: {
    async clima(id) {
      const novo_clima = await forecaApi.CurrentWeather(id);
      return novo_clima.promise.current;
      //pra cada resultado, quero uma temperatura!!
    },
  },

  computed: {
    teste() {
      return console.log(this.clima(103469058));
    },
  },
};
</script>
<template>
  <div id="weather-app" v-for="resultado of resultados" :key="resultado.id">
    {{ resultado.name }}
    {{ resultado.id }}
    <button @click="teste"></button>
    <div>{{ clima(resultado.id) }} a</div>
  </div>
</template>

<style></style>
