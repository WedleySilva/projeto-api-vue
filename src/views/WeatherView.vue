<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      search: "",
      localizacoes: [],
      resultados: [],
      atual_clima: [],
      nova_hora: [],
      nova_previsão: [],
      novo_dia: [],
      location_info: [],
      resultados: [],
    };
  },

  async created() {
    await this.atualizarDados(103459712);
    // const resultados = await forecaApi.LocationSearch("Brasil");
    // this.resultados = resultados.locations;
    // console.log(this.resultados);
  },
  methods: {
    async buscar() {
      this.resultados = [];
      if (this.search.trim() !== "") {
        this.localizacoes = await forecaApi.LocationSearch(this.search);
        for (const local of this.localizacoes) {
          await this.atualizarDados(local.id);
        }
      }
    },
    async atualizarDados(local) {
      const location_info = await forecaApi.LocationInfo(local); // this.location_info = location_info;
      // console.log(this.location_info);

      const dados_clima = await forecaApi.CurrentWeather(local);
      const atual_clima = dados_clima.current;
      // console.log(this.atual_clima);
      this.resultados.push({ location_info, atual_clima });
    },
  },
};
</script>

<template>
  <article>
    <p>
      <span> Busca: </span>
      <input type="text" v-model="search" placeholder="Buscar localização" />
      <button @click="buscar">Buscar</button>
    </p>

    <div v-if="localizacoes.length > 0">
      <h2>Localizações</h2>
      <p
        v-for="local of localizacoes"
        :key="local.id"
        @click="atualizarDados(local.id)"
      >
        {{ local.name }} / {{ local.adminArea }} {{ local.country }} /
        {{ local.timezone }}
      </p>
    </div>
  </article>
  <main class="p">
    <div class="content" v-for="(item, i) of resultados" :key="i">
      <h1 class="climah1">Clima {{ item.location_info.name }}</h1>
      <ul class="climaul">
        <h3>
          <li>País: {{ item.location_info.country }}</li>
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
        <img
          class="icon"
          src="https://cdn-icons-png.flaticon.com/512/3937/3937493.png"
        />
      </ul>
    </div>
  </main>
</template>

<style>
.p {
  display: grid;
  grid-template-columns: 500px 500px 500px;
}

.textdados {
  position: relative;
  padding-top: 15px;
  position: absolute;
  top: 50%;
  padding: 30px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.icon {
  height: 120px;
  width: 120px;
  position: relative;
  left: 30%;
  padding: 20px;
}

.climaul {
  padding-top: 15px;
  position: relative;
  margin-top: 20%;
  list-style: none;
  line-height: 1.5;
}

.content2 {
  position: relative;
  height: 250px;
  width: 1200px;
  margin: 45px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid;
  border-color: black;
  border-radius: 0px 16px 0px 16px;
}

.dadosh1 {
  position: absolute;
  padding-top: 15px;
  top: 10px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.climah1 {
  position: absolute;
  padding-top: 15px;
  top: 20px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.content {
  top: 20px;
  border: 2px solid;
  border-color: black;
  height: 600px;
  width: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
  margin-top: 50px;
}
</style>
