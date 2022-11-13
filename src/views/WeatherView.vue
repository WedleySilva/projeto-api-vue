<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      resultados: [],
      atual_clima: [],
      nova_hora: [],
      nova_previsão: [],
      novo_dia: [],
    };
  },
  async created() {
    const resultados = await forecaApi.LocationSearch("Brasil");
    this.resultados = resultados.locations;
    console.log(this.resultados);

    const atual_clima = await forecaApi.CurrentWeather(103469058);
    this.atual_clima = atual_clima.current;
    // console.log(this.atual_clima);

    const hora_por_hora = await forecaApi.ShowHourly(102643743);
    this.hora_por_hora = hora_por_hora.hourly;
    console.log(this.hora_por_hora);

    const nova_previsão = await forecaApi.NowCast(102643743);
    this.nova_previsão = nova_previsão.nowcast;
    console.log(this.nova_previsão);

    const novo_dia = await forecaApi.Daily(102643743);
    this.novo_dia = novo_dia.daily;
    console.log(this.novo_dia);

  },

  methods: {
    async clima(id) {
      const novo_clima = await forecaApi.CurrentWeather(id);
      return novo_clima.promise.current;
      //pra cada resultado, quero uma temperatura!!
    },

    async hora(id) {
      const nova_hora = await forecaApi.ShowHourly(id);
      return nova_hora.promise.hourly;
    },

    async previsão(id) {
      const nova_previsão = await forecaApi.NowCast(id);
      return nova_previsão.promise.nowcast;
    },

    // computed: {
    //   teste() {
    //     return console.log(this.clima(103469058));
    //   },
    // },

  },
  async diaria(id) {
      const novo_dia = await forecaApi.ShowHourly(id);
      return novo_dia.promise.daily;
    },
};

</script>

<template>
  <main class="main_weather">
    <div
      id="weather-app"
      v-for="resultado of resultados"
      :key="resultado.id"
      class="maindiv"
    ></div>
    <div class="search-box">
      <!-- arrumar a barra de pesquisa -->
      <input type="search" class="search-bar" placeholder="Pesquisar" />
      <!-- {{ resultado.name }}  -->
      <!-- {{ resultado.id }}
      {{ resultado.hora }} -->

      <!-- <button @click="teste"></button>
      <div>{{ clima(resultado.id) }} a</div> -->
    </div>
  </main>
</template>

<style>
.main_weather {
  height: 600px;
}

.search-box {
  position: absolute;
  top: 90px;
  text-align: center;
  align-items: center;
  width: 844px;
  height: 144px;
  padding: 40px;
  margin-bottom: 30px;
}
.search-box .search-bar {
  font-family: "Nanum Gothic", sans-serif;
  display: block;
  width: 100%;
  padding: 15px;
  color: #50545c;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 16px #50545c;
  background-color: #e1e1e180;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px #06265c;
  background-color: #e1e1e180;
  border-radius: 16px 0px 16px 0px;
}

.search-bar {
  display: block;
}
</style>
