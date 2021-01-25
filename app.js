app = Vue.createApp({
  // shorthand for function inside object
  data() {
    return {
      showBooks: true,
      title: "the final empire",
      auther: "Brandom Sanderson",
      age: 45,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = "the carver"
      this.title = title
    },
    toggleBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log("event")
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
})
app.mount("#app")
