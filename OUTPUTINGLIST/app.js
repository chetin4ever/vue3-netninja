app = Vue.createApp({
  // shorthand for function inside object
  data() {
    return {
      url: "www.chetin4ever.mobie.in",
      showBooks: true,
      books: [
        {
          title: "the final empire",
          auther: "Brandom Sanderson",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          auther: "Brandom Sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the name of the wind",
          auther: "Patrik routhfuss",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    }
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBook() {
      return this.books.filter((book) => book.isFav)
    },
  },
})
app.mount("#app")
