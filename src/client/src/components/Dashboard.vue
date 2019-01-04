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
import Chart from "chart.js";
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
      username: '',
      cryptodata: {},
      chart: ''
    }
  },
  methods: {
    sendMessage: function() {
      const input = document.getElementById('messageField');
      const newMessage = {
        name: this.username,
        message: this.messageText
      };
      socket.emit('newMessage', newMessage);
      input.value = '';
    },
    saveInput: function(e: any): void {
      const el = e.target;
      this.messageText = el.value;
    }
  },
  mounted() {
  // Check for a valid JWT
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      window.location.replace('/#/login');
    } else {
      this.username = decoded.username;
      socket.emit('dashboardConnected');
    }
  } else {
    window.location.replace('/#/login');
  };
  // Get Bitcoin data 
  fetch(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&api_key=${Keys.apiKey}`)
    .then(res => res.json())
    .then(json => {
      this.cryptodata = json;
    })
    .catch(err => console.log(err));
  setInterval(() => {
    fetch(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&api_key=${Keys.apiKey}`)
      .then(res => res.json())
      .then(json => {
        this.cryptodata = json;
        this.chart.data.datasets[0].data = [];
        this.chart.data.datasets[0].data.push(this.cryptodata.Data[5].close, this.cryptodata.Data[4].close, this.cryptodata.Data[3].close, this.cryptodata.Data[2].close, this.cryptodata.Data[1].close, this.cryptodata.Data[0].close);
        this.chart.update();
      })
      .catch(err => console.log(err));
  }, 60000);
  // Chart setup
  setTimeout(() => {
    const ctx = document.getElementById('myChart');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["5 minutes ago", "4 minutes ago", "3 minutes ago", "2 minutes ago", "1 minute ago", "Current"],
          datasets: [{
            label: 'Bitcoin Value in $USD',
              data: [this.cryptodata.Data[5].close, this.cryptodata.Data[4].close, this.cryptodata.Data[3].close, this.cryptodata.Data[2].close, this.cryptodata.Data[1].close, this.cryptodata.Data[0].close],
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
  }, 1000);
  }
};
</script>

<style lang="scss">
#chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 2px 0px 41px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 0px 41px -8px rgba(0,0,0,0.75);
  box-shadow: 2px 0px 41px -8px rgba(0,0,0,0.75);
  position: absolute;
  overflow-y: auto;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 100%;
  #messages {
    margin: 10% 25px;
    width: 80%;
    height: 80%;
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
      &:last-child {
        margin-bottom: 100px;
      }
    }
    .userMessage {
    background-color: #666;
    float: right;
    p {
        color: #eee;
      }
    }
  }
}
#charts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  #footer {
    z-index: 999;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #9a1641;
    -webkit-box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
    box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
  }
}
#messageInput {
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 50%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #9a1641;
  -webkit-box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
  box-shadow: 0px -1px 41px -8px rgba(0,0,0,0.75);
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

