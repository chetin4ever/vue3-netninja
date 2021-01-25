<template>
  <!-- <Modal header="Sign up for Giveaway" title="Grab Your Ninja swag for half price"/> -->
  <!-- use data binding to pass value -->
  <div v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModel" /> -->
    <Modal theme="sale" @close="toggleModel">
      <template v-slot:links>
        <a href="#">SignUp</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninjas Givaway</h1>
      <p>Grab your Ninjas swag for half price</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModel" /> -->
    <Modal theme="sale" @close="toggleModelTwo">
      <template v-slot:links>
        <a href="#">SignUp</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninjas Givaway</h1>
      <p>Grab your Ninjas swag for half price</p>
    </Modal>
  </div>
  <button @click.alt="toggleModel">openModal</button>
  <button @click="toggleModelTwo">openModaltwo</button>

  <h1>{{ this.title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click Me</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue.js App :)",
      header: "Sign up for Giveaway",
      text: "Grab Your Ninja swag for half price",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModel() {
      this.showModal = !this.showModal;
    },
    toggleModelTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>      

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
