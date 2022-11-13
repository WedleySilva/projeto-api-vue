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
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

body {
  background-color: #50545c;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #98b7e1;
}
</style>
