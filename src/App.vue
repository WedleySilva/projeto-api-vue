<script> 
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

import { defineComponent, onMounted, ref } from "vue";

import api from "@/services/api.ts";

export default defineComponent ({
  name: "HomeView",
  setup() {
    const locations = ref([]);

    const fetchLocations = () => api .get("/api/v1/location/search/:query") 
    .then((response) => (locations.value = response.data.results));

    onMounted(fetchLocations);
  },
});


</script>

<template>
  <header-comp />
    <RouterView />
  <footer-comp />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

body {
  background-color: #50545C;
}


a {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #98b7e1;
}
</style>
