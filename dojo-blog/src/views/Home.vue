<template>
  <p ref="p">my name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">click me</button>
  <button @click="age++">add age 1</button>
  <input type="text" v-model="name" />
  <h1>ref</h1>
  <p>{{ ninjaOne.name }}-{{ ninjaOne.age }}</p>
  <button @click="handleRef">click me</button>
  <h1>reactive</h1>
  <p>{{ ninjaTwo.name }}-{{ ninjaTwo.age }}</p>
  <button @click="handleReactive">click me</button>
  <h2>Search Name</h2>
  <input type="text" v-model="search" />
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
</template>

<script>
import { computed, reactive, ref } from "vue";
// @ is an alias to /src

export default {
  setup() {
    // by defualt the value inside setup are non reactive so we have manually make them rective
    // let name = "chetan";
    // let age = 32;
    let name = ref("chetan");
    let age = ref(32);
    const ninjaOne = ref({ name: "chetan", age: 30 });
    const ninjaTwo = reactive({ name: "chetan", age: 30 });
    const ninjaNames = ref(["chetan", "piyush", "pratik", "vijay", "shubham"]);
    console.log("setup");
    const p = ref(null);
    console.log("p is:", p.value);
    const handleClick = () => {
      //this will not work
      // name = "luigi";
      name.value = "mario";
      console.log(p, p.value);
    };
    const handleRef = () => {
      ninjaOne.value.name = "mario";
    };
    const handleReactive = () => {
      ninjaTwo.name = "mario";
    };
    const search = ref("");
    const matchingNames = computed(() => {
      return ninjaNames.value.filter((name) => name.includes(search.value));
    });
    return {
      name,
      age,
      handleClick,
      p,
      ninjaOne,
      ninjaTwo,
      handleRef,
      handleReactive,
      search,
      matchingNames,
    };
  },
  // created() {
  //   console.log("created");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
};
</script>
