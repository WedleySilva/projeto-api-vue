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
    <p class="inputs">
      <span> </span>
      <input type="text" v-model="search" placeholder="Buscar localização" />
      <button class="button-19"  @click="buscar">Buscar</button>
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
body {
  color: black;
}

.inputs{
  text-align: center;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.p {
  display: grid;
  grid-template-columns: 500px 500px 500px;
}

.button-19 {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin-left: 10px;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  height: 48px;

}

.button-19:after {
  background-clip: padding-box;
  background-color: #78A6F5;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

input{
  height: 40px;
  border-radius: 5px;
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

.climah1 {
  position: absolute;
  padding-top: 15px;
  top: 20px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.content {
  background-image: linear-gradient(to bottom, #78A6F5 , #b6d0fc ,#ffffff  );
  top: 20px; transition: 2s ;
  border: 2px solid;
  border-color: white;
  height: 600px;
  width: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
  margin-top: 50px;
  box-shadow: 10px 4px 7px #545454;
}
</style>
