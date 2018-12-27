<template>
  <div id="register">
    <Navbar/>
    <div id="form">
      <h3>Register:</h3>
      <input type="text" placeholder="Username:">
      <input type="password" placeholder="Password:">
      <input type="password" placeholder="Confirm Password:">
      <button>Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "./layout/Navbar.vue";
export default {
  name: "Register",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
#register {
  width: 100%;
  height: 100vh;
  background-color: lighten($color: #9a1641, $amount: 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 3em;
    -webkit-box-shadow: 10px 10px 35px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 35px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 35px -8px rgba(0, 0, 0, 0.75);
    h3 {
      margin-top: 0;
      color: #333;
    }
    input {
      margin-bottom: 15px;
      width: 100%;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      text-align: left;
      background: transparent;
      outline: 0;
      border: none;
      box-shadow: none;
      color: #333;
      font-size: 16px;
      border-bottom: 1px solid #333;
      padding-bottom: 0.75em;
      &::placeholder {
        text-align: left;
        color: #333 !important;
        opacity: 1;
      }
      &:-ms-input-placeholder {
        text-align: left;
        color: #333 !important;
      }
      &::-ms-input-placeholder {
        text-align: left;
        color: #333 !important;
      }
      &:focus::-moz-placeholder {
        text-align: left;
        transition: 0.1s !important;
        color: transparent !important;
      }
      &:focus:-moz-placeholder {
        text-align: left;
        transition: 0.1s !important;
        color: transparent !important;
      }
      &:focus::-webkit-input-placeholder {
        text-align: left;
        transition: 0.1s !important;
        color: transparent !important;
      }
      &:focus::-ms-input-placeholder {
        text-align: left;
        transition: 0.1s !important;
        color: transparent #333 !important;
      }
    }
    button {
      transition: 0.2s;
      background-color: #9a1641;
      width: 100%;
      cursor: pointer;
      font-weight: bolder;
      padding: 1em 0;
      outline: none;
      border: none;
      border-radius: 50px;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      color: #fff;
      &:hover {
        background-color: rgb(62, 206, 62);
      }
    }
  }
}
</style>
