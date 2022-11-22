<template>
  <header>
    <div class="menu">
      <span class="clic"> <RouterLink  to="/">Home</RouterLink> </span>
      <span></span>
      <span class="clic"> <RouterLink  to="/weather">Clima</RouterLink> </span>
      <span></span>
      <span class="clic"> <RouterLink  to="/about">Sobre</RouterLink> </span>
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
  background-image: linear-gradient(to right, #78A6F5 , rgb(82, 202, 188));
  font-size: 30px;
}

.clic{
  color: black;
  background-color: white;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgb(77, 77, 77);
}

.clic:hover{
  background-color: rgb(58, 151, 238);
  transition: background 1s ;
}

</style>
