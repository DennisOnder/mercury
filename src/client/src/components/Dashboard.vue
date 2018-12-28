<template>
  <div id="dashboard">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Api from "../services/Api";
import Navbar from "./layout/Navbar.vue";
export default {
  name: "Dashboard",
  components: {
    Navbar
  },
  data() {
    return {
      test: ""
    };
  },
  mounted() {
    Api()
      .get("/api/test")
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};
</script>
