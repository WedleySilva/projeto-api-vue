<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      buscando: false,
      search: "",
      localizacoes: [],
      resultados: [],
      atual_clima: [],
      nova_hora: [],
      nova_previsão: [],
      novo_dia: [],
      location_info: [],
    };
  },

  methods: {
    async buscarDados() {
      console.log(this.buscando);
      for (const local of this.localizacoes) {
        await this.atualizarDados(local.id);
      }
    },

    async buscar() {
      // clearInterval(this.buscando);
      this.$forceUpdate();
      this.resultados = [];
      this.localizacoes = [];
      if (this.search.trim() !== "") {
        this.localizacoes = await forecaApi.LocationSearch(this.search);
        // this.buscando = setInterval(() => this.buscarDados(), 100);
        await this.buscarDados();
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
    getImgUrl(symbol) {
      return `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
    },
  },
};
</script>

<template>
  <article>
    <div class="Forms">
      <div class="group">
        <svg class="iconSearch" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input
          @keyup.enter="buscar"
          type="text"
          v-model="search"
          placeholder="Buscar cidades"
          class="input"
        />
      </div>
      <button class="searchButton" @click="buscar">
        Buscar
      </button>
      <!--button-19 apagar css-->
    </div>

    <div v-if="localizacoes.length > 0">
      <h2>Cidades encontradas:</h2>
      <p
        v-for="local of localizacoes"
        :key="local.id"
        @click="atualizarDados(local.id)"
      ></p>
    </div>
    <div v-else><h2>Nenhuma busca realizada!</h2></div>
  </article>
  <main class="p">
    <h1>
      Pesquise o nome da cidade que deseja procurar e aguarde por resultados...
    </h1>
    <div class="box">
      <div class="content">
        <div class="card" v-for="(item, i) of resultados" :key="i">
          <h1 class="climah1">
            Clima {{ item.location_info.name }} -
            {{ item.location_info.adminArea }}
          </h1>
          <ul class="climaul">
            <div class="card-header">
              <img class="icon" :src="getImgUrl(item.atual_clima.symbol)" />
              <div>
                <li class="temperatura">
                  {{ item.atual_clima.temperature }} °C
                </li>
                <li class="sensacao-termica">
                  Sensação Térmica: {{ item.atual_clima.feelsLikeTemp }} °C
                </li>
              </div>
            </div>
            <div class="card-info-container">
              <div class="card-info1">
                <li>País:</li>
                <li>Hora:</li>

                <li>Umidade:</li>
                <li>Velocidade do Vento:</li>
                <li>Pressão:</li>
                <li>Probabilidade de trovões:</li>
              </div>
              <div class="card-info2">
                <li>{{ item.location_info.country }}</li>
                <li>{{ item.atual_clima.time }}</li>

                <li>{{ item.atual_clima.relHumidity }}%</li>
                <li>{{ item.atual_clima.windSpeed }} m/s</li>
                <li>{{ item.atual_clima.pressure }} Pa</li>
                <li>{{ item.atual_clima.thunderProb }} %</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.Forms {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: #2bacd7;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(43 172 215 / 50%);
}

.iconSearch {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}

.searchButton {
  --color: #2BACD7;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: auto;
  line-height: 2.5em;
  overflow: hidden;
  cursor: pointer;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

.searchButton::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

.searchButton:hover {
  color: white;
}

.searchButton:before {
  top: 100%;
  left: 100%;
  transition: 0.3s all;
}

.searchButton:hover::before {
  top: -30px;
  left: -30px;
}

</style>
