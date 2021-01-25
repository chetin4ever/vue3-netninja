<template>
  <h1>Reaction Timer Game</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :dealy="dealy" @end="endGame" />
  <!-- <p v-if="showResults">Reaction Time : {{ score }} ms</p> -->
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";

import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      dealy: null,
      score: null,
      showResults: null,
    };
  },
  methods: {
    start() {
      this.dealy = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      console.log(this.dealy);
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
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
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
  color: white;
  font-size: 16px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
