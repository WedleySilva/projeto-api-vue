<template>
  <header>
    <div class="menu">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/weather">Cilma</RouterLink> </span>
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
  height: 120px;
  width: 100%;
  background-color: #16141A;
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  justify-content: space-between;
}

</style>
