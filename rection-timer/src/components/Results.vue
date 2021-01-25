<template>
  <p>The Reaction Time is: {{ score }}</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
import { onMounted } from "vue";
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Finger";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
  },
};
// console.log(this.props.score);
</script>
.rank{
  font-size:1.4em
}
<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>