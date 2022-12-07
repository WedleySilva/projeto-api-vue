<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      buscando: false,
      search: "",
      localizacoes_id: [
        103662574, 103395981, 103396016, 103663517, 103450554, 103399415,
        103469058, 103444924, 103462377, 103388368, 103465038, 103467747,
        103470127, 103405870, 103397277, 103464975, 103390760, 103386496,
        103451190, 103394023, 103452925, 103662762, 103664980, 103463237,
        103448439, 103471872, 103474574,
      ],
    };
  },

  async created() {
    console.log(this.buscando);
    for (const local of this.localizacoes_id) {
      const location_info = await forecaApi.LocationInfo(local);
      const dados_clima = await forecaApi.CurrentWeather(local);
      const atual_clima = dados_clima.current;
    }
  },

  methods: {
    getImgUrl(symbol) {
      return `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
    },
  },
};
</script>

<template>
  <main class="p">
    <h1 class="titulo-home">Início do Site/Home</h1>
    <div class="box">
      <div class="content">
        <div class="card" v-for="(item, i) of resultados" :key="i">
          <h1 class="climah1">Clima {{ item.location_info.name }}</h1>
          <ul class="climaul">
            <h3>
              <li>ID: {{ item.location_info.id }}</li>
              <li>País: {{ item.location_info.country }}</li>
              <li>Estado: {{ item.location_info.adminArea }}</li>
              <li>Cidade: {{ item.location_info.name }}</li>
              <li>Hora: {{ item.atual_clima.time }}</li>
              <li>Temperatura: {{ item.atual_clima.temperature }} °C</li>
              <li>Sensação Térmica: {{ item.atual_clima.feelsLikeTemp }} °</li>
              <li>Umidade: {{ item.atual_clima.relHumidity }}</li>
              <li>Pressão: {{ item.atual_clima.pressure }} atm</li>
              <li>Velocidade do Vento: {{ item.atual_clima.windSpeed }} m/s</li>
              <li>
                Probabilidade de trovões: {{ item.atual_clima.thunderProb }} %
              </li>
            </h3>
            <img class="icon" :src="getImgUrl(item.atual_clima.symbol)" />
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.titulo-home {
  display: flex;
  justify-content: center;
}

.box {
  top: 20px;
  border: 2px solid;
  border-color: white;
  color: black;
  background-color: #78a6f5;
  height: 2000px;
  width: 1800px;
  position: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
  margin-top: 50px;
}
</style>
