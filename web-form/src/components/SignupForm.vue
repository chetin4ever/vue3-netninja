<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" v-model="email" />
    <label>Password:</label>
    <input type="password" v-model="password" />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>
    <label>Role :</label>
    <select v-model="role">
      <option value="devloper">Web Devloper</option>
      <option value="designer">Web Designer</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Aceept terms and condtions</label>
    </div>
    <div class="submit">
      <button>Create An Account</button>
    </div>
  </form>
  <p>Email:{{ email }}</p>
  <p>Password:{{ password }}</p>
  <p>Role:{{ role }}</p>
  <p>Terms condtion:{{ terms }}</p>
  <!-- <p>skills:{{ skills }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "lugi",
      password: "",
      role: "designer",
      tempSkill: "",
      skills: [],
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }

        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      console.log(skill);
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },
    handleSubmit() {
      console.log("form submitted");
      this.passwordError =
        this.password.length > 5 ? "" : "password must be 6 chracter long";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  background: white;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  background: none;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  background: #eee;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.submit {
  text-align: center;
}
button {
  background: #0b6dff;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>