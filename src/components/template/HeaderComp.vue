<template>
  <header>
    <img src="@/assets/logosite.png" alt="" />

    <div class="menu">
       <RouterLink to="/"><button class="click">Home</button></RouterLink> 

       <RouterLink to="/weather"><button class="click">Clima</button></RouterLink> 
    </div>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");



header {
  font-family: "Nanum Gothic", sans-serif;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #2BACD7;
  font-size: 25px;
  justify-content: space-between;
}

.menu {
  margin-right: 20px;
}

.click {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: #78a6f5;
  transition: all 1000ms;
  font-size: 13px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #2BACD7;
  margin-left: 20px;
}

.click:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #78a6f5;
  box-shadow: 4px 5px 17px -4px #2BACD7;
}

.click::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #78a6f5;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.click:hover::before {
  width: 250%;
}


img {
  width: 130px;
  filter: drop-shadow(4px 3px 4px #1F1F1F);
}
</style>
