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
      location_info: [],
    };
  },
  async created() {
    // const resultados = await forecaApi.LocationSearch("Brasil");
    // this.resultados = resultados.locations;
    // console.log(this.resultados);

    const location_info = await forecaApi.LocationInfo(103459712);
    this.location_info = location_info;
    console.log(this.location_info);

    const atual_clima = await forecaApi.CurrentWeather(103459712);
    this.atual_clima = atual_clima.current;
    console.log(this.atual_clima);
  },
};
</script>

<template>
  <main class="main_weather">
    <div class="content">
      <h1 class="climah1">Clima</h1>
      <ul class="climaul">
        <h3>
          <li>País: {{ location_info.country }}</li>
          <li>Cidade: {{ location_info.name }}</li>
          <li>Hora: {{ atual_clima.time }}</li>
          <li>Temperatura: {{ atual_clima.temperature }} °C</li>
          <li>Sensação Térmica: {{ atual_clima.feelsLikeTemp }} °</li>
          <li>Umidade: {{ atual_clima.relHumidity }}</li>
          <li>Pressão: {{ atual_clima.pressure }} atm</li>
          <li>Velocidade do Vento: {{ atual_clima.windSpeed }} m/s</li>
          <li>Probabilidade de trovões: {{ atual_clima.thunderProb }} %</li>
        </h3>
        <img class="icon"
          src="https://cdn-icons-png.flaticon.com/512/3937/3937493.png"
        />
      </ul>
    </div>
    <div class="content2">
      <h1 class="dadosh1">Dados</h1>
      <h3 class="textdados">
        Passar parametros para portugues, celsius e colocar imagens.
      </h3>
    </div>
  </main>
</template>

<style>
.main_weather {
  height: 600px;
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
  width: 500px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px 0px 16px 0px;
}
</style>
