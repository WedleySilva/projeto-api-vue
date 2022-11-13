<script>
import HeaderComp from "@/components/template/HeaderComp.vue";
import MainComp from "@/components/template/MainComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";


export default {
  name: "HomeView",
  components: { HeaderComp, FooterComp, MainComp },
};
</script>

<template>
  <header-comp />
  <RouterView />
  <MainComp />
  <footer-comp />

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

body {
  background-color: #BFC9DB;
  margin: 0;
  color: #50545C;
}

a {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #50545C;
}
</style>
