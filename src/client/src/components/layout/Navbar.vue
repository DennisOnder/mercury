<template>
  <nav id="nav">
    <div id="container" v-on:click="backHome()">
      <img src="../../assets/logo.png" alt="Logo">
      <h3>mercury</h3>
    </div>
  </nav>
</template>

<style scoped lang="scss">
#nav {
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-shadow: 0px 3px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 15px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 15px -2px rgba(0, 0, 0, 0.75);
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  padding: 0 25px;
  z-index: 1;
  #container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 26px;
      height: 26px;
      margin-left: 25px;
      margin-right: 2.5px;
    }
    h3 {
      font-size: 26px;
      margin-left: 2.5px;
    }
  }
}
</style>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    backHome() {
      window.location.replace('/#/');
    }
  }
};
</script>
