<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
  props: ["dealy"],
  data() {
    return {
      showBlock: false,
      time: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("component is mounted");
    setTimeout(() => {
      this.showBlock = true;
      console.log(this.dealy);
      this.startTimer();
    }, this.dealy);
  },
  updated() {
    console.log("comopnent is updated");
  },
  unmounted() {
    console.log("component is unmounted");
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 480px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  padding: 100px 0;
  margin: 40px auto;
  text-align: center;
}
</style>