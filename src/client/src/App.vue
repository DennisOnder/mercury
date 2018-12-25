<template>
  <div id="app">
    <div class="title">
      <h1>mercury</h1>
      <h3>crypto-currency chat app.</h3>
    </div>
    <div class="text-container">
      <p>...a place where you can chat with crypto-lovers,</p>
      <p>and check how your favorite cryptocurrency is doing.</p>
    </div>
    <div class="buttons">
      <button>Log In</button>
      <button>Register</button>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
#app {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    top: 400px;
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
}
</style>
