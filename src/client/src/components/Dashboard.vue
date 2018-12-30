<template>
  <div id="dashboard">
    <Navbar/>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Api from "../services/Api";
import Navbar from "./layout/Navbar.vue";
import io from "socket.io-client";
const socket = io("http://localhost:8000");
export default {
  name: "Dashboard",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  mounted() {
    Api()
      .get("/api/test")
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    socket.emit("greeter", "Hello there!");
  }
};
</script>
