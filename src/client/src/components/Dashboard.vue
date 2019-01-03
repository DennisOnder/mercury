<template>
  <div id="dashboard">
    <Navbar/>
    <!-- Chat section - left hand side of the dashboard -->
    <div id="chat">
      <div id="messages">
        <!-- Chat messages output -->
      </div>
    </div>
    <div id="messageInput">
      <input @input="saveInput" id="messageField" type="text" placeholder="Message:">
      <button v-on:click="sendMessage()">Send</button>
    </div>
    <!-- Charts section - right hand side of the dashboard -->
    <div id="charts">
      <canvas id="myChart" width="400" height="200"></canvas>
      <div id="footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Api from "../services/Api";
import * as Chart from "chart.js";
import Keys from "../utils/Keys";
import Navbar from "./layout/Navbar.vue";
import io from "socket.io-client";
import jwtDecode from 'jwt-decode';
const socket = io("http://localhost:8000");
socket.on('sendMessages', (data: any): void => {
  const output = document.getElementById('messages');
  data.forEach((message: any): void => {
    const newMessage = {
      name: message.name,
      message: message.message
    };
    const newDiv = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const textParagraph = document.createElement('p');
    const boldText = document.createElement('b');
    newDiv.setAttribute('class', 'message');
    textParagraph.textContent = newMessage.message;
    boldText.textContent = newMessage.name;
    nameParagraph.appendChild(boldText);
    newDiv.appendChild(nameParagraph);
    newDiv.appendChild(textParagraph);
    output.appendChild(newDiv);
    for (let i = 0; i < output.children.length; i++) {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      if (output.children[i].firstChild.firstChild.textContent === decoded.username) {
        output.children[i].classList.add('userMessage');
      }
    }
  });
});
export default {
  name: "Dashboard",
  components: {
    Navbar
  },
  data() {
    return {
      messageText: '',
      username: ''
    }
  },
  methods: {
    sendMessage: function() {
      const newMessage = {
        name: this.username,
        message: this.messageText
      };
      socket.emit('newMessage', newMessage);
    },
    saveInput: function(e: any): void {
      const el = e.target;
      this.messageText = el.value;
    }
  },
  mounted() {
  // fetch(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&api_key=${Keys.apiKey}`)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.log(err));
  // Check for a valid JWT
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      window.location.replace('/#/login');
    } else {
      this.username = decoded.username;
    }
  } else {
    window.location.replace('/#/login');
  }
  socket.emit('dashboardConnected');
  Api()
    .get("/api/test")
    .then(res => res.data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
};
</script>

<style lang="scss">
#chat {
  position: absolute;
  overflow-y: auto;
  bottom: 10%;
  left: 0;
  width: 50%;
  height: 80%;
  #messages {
    margin: 0 25px;
    .message {
      background-color: #9a1641;
      width: 50%;
      padding: 0.75em;
      margin-bottom: 10px;
      border-radius: 5px;
      float: left;
      p {
        margin: 5px 10px;
        color: #fff;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
      }
    }
    .userMessage {
      background-color: #666;
      float: right;
      p {
        color: #eee;
      }
    }
    &:last-child {
      margin-bottom: 100px;
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
#charts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

