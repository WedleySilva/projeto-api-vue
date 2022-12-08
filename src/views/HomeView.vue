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
      dados_clima: [],
      atual_clima: [],
      localizacoes_info: [],
    };
  },

  async created() {
    console.log(this.buscando);
    for (const local of this.localizacoes_id) {
      const location_info = await forecaApi.LocationInfo(local);
      const dados_clima = await forecaApi.CurrentWeather(local);
      const atual_clima = dados_clima.current;
      this.localizacoes_info.push({ location_info, atual_clima });
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
    <h1 class="titulo-home">Clima das Capitais Brasileiras</h1>
    <div class="box">
      <div class="content">
        <div class="card-home" v-for="(item, i) of localizacoes_info" :key="i">
          <h1 class="climah1-home">
            Clima {{ item.location_info.name }} -
            {{ item.location_info.adminArea }}
          </h1>
          <ul class="climaul-home">
            <div class="card-header">
              <img
                class="icon-home"
                :src="getImgUrl(item.atual_clima.symbol)"
              />
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
                <li>Umidade:</li>
                <li>Velocidade do Vento:</li>
                <li>Probabilidade de trovões:</li>
              </div>
              <div class="card-info2">
                <li>{{ item.atual_clima.relHumidity }}%</li>
                <li>{{ item.atual_clima.windSpeed }} m/s</li>
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
  min-height: 1000px;
  width: 1800px;
  position: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
  margin-top: 50px;
}
.card-home {
  background-image: linear-gradient(to bottom, #78a6f5, #b6d0fc, #ffffff);
  top: 20px;
  transition: 1s;
  border: 2px solid;
  border-color: white;
  min-height: 300px;
  min-width: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
  box-shadow: 10px 4px 7px #545454;
  margin-bottom: 50px;
  display: flex;
}
.icon-home {
  height: 120px;
  width: 120px;
}

.climaul-home {
  padding-top: 15px;
  position: relative;
  margin-top: 20%;
  list-style: none;
  line-height: 1.5;
}

.climah1-home {
  position: absolute;
  padding-top: 15px;
  top: 20px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.card-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.sensacao-termica {
  color: gray;
  font-size: 14px;
  font-weight: 600;
}
.temperatura {
  font-size: 50px;
  font-weight: bold;
}
.card-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
