<template>
  <header>
    <div class="menu">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/weather">Clima</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/about">Sobre</RouterLink> </span>
    </div>
  </header>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

header span {
  padding: 0 20px;
}

header {
  font-family: 'Nanum Gothic', sans-serif;
  padding: 40px;
  text-align: center;
  background: #78A6F5;
  color: #F9F9F9;
  font-size: 30px;
}

</style>
