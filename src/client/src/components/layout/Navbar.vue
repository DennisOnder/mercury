<template>
  <nav id="nav">
    <img src="../../assets/logo.png" alt="Logo">
    <h3>mercury</h3>
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
  img {
    margin-left: 25px;
  }
  h3 {
    margin-left: 10px;
  }
}
</style>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

