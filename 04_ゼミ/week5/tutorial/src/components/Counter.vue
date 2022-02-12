<template>
  <div class="counter">
    <div>🔥{{ count }}🔥</div>
    <button v-on:click="countUp">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp() {
      this.count++
    },
  },
}
</script>

<!-- ❗️ <style scoped>を使うと、CSSのスコープをこの.vueファイルに限定できます! ❗️ -->
<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: lightgreen;
}
</style>
