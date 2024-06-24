<script>
import HeaderComp from "@/components/template/HeaderComp.vue";
// import MainComp from "@/components/template/MainComp.vue";

export default {
  name: "HomeView",
  components: { HeaderComp },
};
</script>

<template>
  <header-comp />
  <RouterView />
  <!-- <MainComp />   -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

main {
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #e4e4e6;
  margin: 0;
  color: #50545c;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
