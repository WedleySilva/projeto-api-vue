<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "./components/template/FooterComp.vue";
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
