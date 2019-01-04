<template>
  <div id="home">
    <!-- Loader/Spinner -->
    <div id="SpinnerWrapper">
      <div id="Spinner">
        <div class="container">
          <img src="../assets/logo.png" alt="Logo">
          <p><b>mercury</b></p>
        </div>
        <span>
          <div>
          </div>
        </span>
      </div>
    </div>
    <div id="homeContent">
      <div class="title">
      <h1>mercury</h1>
      <h3>crypto-currency chat app.</h3>
    </div>
    <div class="text-container">
      <p>...a place where you can chat with crypto-lovers,</p>
      <p>and check how your favorite cryptocurrency is doing.</p>
    </div>
    <div class="buttons">
      <button v-on:click="redirectToLogin()">Log In</button>
      <button v-on:click="redirectToRegister()">Sign Up</button>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
#home {
  width: 100%;
  height: 100vh;
  // Image provided by fellow Redditor and amazing artist alejagalesa!
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    position: absolute;
    top: 50px;
    left: 50px;
    h1 {
      font-size: 36px;
      font-weight: bolder;
      margin: 0;
    }
    h3 {
      font-size: 28px;
      font-weight: lighter;
      margin: 5px 0 0 0;
    }
  }
  .text-container {
    position: absolute;
    top: 250px;
    left: 50px;
    p {
      font-size: 20px;
      margin: 0 0 10px 0;
    }
  }
  .buttons {
    position: absolute;
    top: 50%;
    left: 50px;
    button {
      margin: 0 10px 0 0;
      height: 50px;
      width: 150px;
      outline: 0;
      border: none;
      background-color: #fff;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 16px;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background-color: lighten($color: #9a1641, $amount: 10%);
        color: #fff;
      }
    }
  }
  // Spinner
  #SpinnerWrapper {
    width: 100%;
    height: 100vh;
    #Spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #110d25;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        p {
            color: #fff;
            font-size: 28px;
            margin: 0 0 0 2.5px;
          }
        img {
          width: 28px;
          height: 28px;
          margin: 0 2.5px 0 0;
        }
      }
      span {
        width: 250px;
        height: 7px;
        background-color: #444;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        div {
          width: 0;
          height: 7px;
          background-color: #9A1641;
          border-radius: 10px;
          animation: animatedSpinner 2s;
          animation-fill-mode: forwards;
        }
      }
    }
  }
  // Home Content
  #homeContent {
    opacity: 0;
  }
}
@keyframes animatedSpinner {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>


<script lang="ts">
import jwtDecode from 'jwt-decode';
export default {
  data() {
    return {};
  },
  methods: {
    redirectToLogin() {
      window.location.replace("/#/login");
    },
    redirectToRegister() {
      window.location.replace("/#/register");
    }
  },
  mounted() {
    setTimeout(() => {
      // Replace with keyframes for smoothing the transition out
      document.getElementById('homeContent').style.opacity = '1';
      document.getElementById('Spinner').style.opacity = '0';
    }, 2000);
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
      } else {
        window.location.replace('/#/dashboard');
      }
    }
  }
};
</script>
