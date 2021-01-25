<template>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
        <!-- <h2>{{ job.id }}</h2> -->
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>loding data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // jobs: [
      //   { id: 1, title: "ninja UX Desiner", details: "lorem" },
      //   { id: 2, title: "ninja web Devloper", details: "lorem" },
      //   { id: 3, title: "ninja Vue Devloper", details: "lorem" },
      // ],
      jobs: [],
    };
  },
  mounted() {
    fetch(" http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  margin: 10px auto;
  cursor: pointer;
  color: #444;
}
.job a {
  text-decoration: none;
}
.job h2:hover {
  background: #ddd;
}
</style>
