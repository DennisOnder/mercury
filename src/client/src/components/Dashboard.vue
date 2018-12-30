<template>
  <div id="dashboard">
    <Navbar/>
      <!-- Chat section - left hand side of the dashboard -->
    <div id="chat">
      <div id="messages">
        <div class="message">
          <p><b>name</b></p>
          <p>message</p>
        </div>
      </div>
    </div>
    <div id="messageInput">
      <input type="text" placeholder="Message:">
      <button>Send</button>
    </div>
      <!-- Charts section - right hand side of the dashboard -->
    <div id="charts">
      <div id="footer"></div>
    </div>
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
    // Check for a valid JWT
    Api()
      .get("/api/test")
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    socket.emit("greeter", "Hello there!");
  }
};
</script>

<style lang="scss">
#chat {
  position: absolute;
  overflow-y: auto;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 90%;
  #messages {
    margin: 0 25px;
    .message {
      background-color: #9a1641;
      width: 50%;
      padding: 0.75em;
      margin-bottom: 10px;
      border-radius: 5px;
      p {
        margin: 5px 10px;
        color: #fff;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
      }
    }
  }
}
#charts {
  width: 50%;
  height: 90%;
  position: absolute;
  bottom: 0;
  right: 0;
  // Remove this one
  border-left: 1px solid black;
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #9a1641;
  }
}
#messageInput {
  position: fixed;
  bottom: 0;
  width: 50%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #9a1641;
  input {
    outline: none;
    border: none;
    border-radius: 25px;
    padding: 0.25em 0.75em;
    margin-right: 5px;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    &::placeholder {
      font-family: 'Montserrat', Arial, Helvetica, sans-serif;
      font-weight: bolder;
    }
  }
  button {
    margin-left: 5px;
    outline: none;
    border: none;
    border-radius: 50px;
    padding: 0.25em 0.75em;
    background-color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>

