Vue.createApp({
  data() {
    return {
      inputMoney: "",
      inputedMoney: 0,
      money: 0,
      outputs: [],
    }
  },
  methods: {
    changeMoney: function (s = 0) {
      const n = Number(this.inputMoney)
      const now = new Date()
      let way
      if (s === 1) {
        this.money += n
        way = "入金"
      } else {
        this.money -= n
        way = "出金"
      }

      this.inputedMoney = n
      this.inputMoney = ""

      const log = {
        date: now,
        type: way,
        money: n,
      }
      this.outputs.push(log)
    },
  },
  computed: {
    nomoney: function () {
      const n = Number(this.inputMoney)
      let flag = false
      if (n > this.money) {
        flag = true
      }
      return flag
    },
  },
}).mount("#app")
