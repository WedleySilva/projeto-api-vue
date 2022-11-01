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

header span {
  padding: 0 20px;
}

header {
  
  padding: 40px;
  text-align: center;
  background: black;
  color: white;
  font-size: 30px;
  
}

</style>
