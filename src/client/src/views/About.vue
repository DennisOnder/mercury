<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  mounted() {
    axios
      // Testing
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};
</script>

