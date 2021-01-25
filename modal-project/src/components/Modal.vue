<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ["header", "text", "theme"],
  props: ["header", "text", "theme"],

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style >
.modal {
  background: white;
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  border-radius: 10px;
}
.backdrop {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
}
.modal h1 {
  color: turquoise;
  border: none;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  text-decoration: none;
  padding: 8px;
  border: 2px solid #eee;
  border-radius: 4px;
  margin: 10px;
  color: #555;
}
.modal.sale .actions a {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale {
  color: white;
}
</style>