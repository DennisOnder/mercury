<template>
  <div id="dashboard">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import Navbar from "./layout/Navbar.vue";
export default {
  name: "Dashboard",
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

