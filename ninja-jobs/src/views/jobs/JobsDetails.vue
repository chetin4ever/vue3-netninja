<template>
  <div v-if="job">
    <h1>Jobs Details Components</h1>
    <h2>{{ job.title }}</h2>
    <p>{{ job.details }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    console.log(this.props);
    console.log(this.id);
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>