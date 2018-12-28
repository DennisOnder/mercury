<template>
  <div id="dashboard">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import DashboardService from "../services/DashboardService";
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
  async created() {
    try {
      this.test = await DashboardService.prototype.testApi();
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
