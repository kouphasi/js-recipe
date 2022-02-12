<template>
  <Tutorial></Tutorial>
  <Counter></Counter>
</template>

<script>
import Tutorial from "./components/Tutorial.vue"
import Counter from "./components/Counter.vue"
export default {
  name: "App",
  components: {
    Tutorial,
    Counter,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
