<template>
  <section class="step-selection">
    <button
      class="btn-step"
      :class="{ selected: selected == stepNum }"
      v-for="stepNum in stepNumbers"
      :key="stepNum"
      @click="$emit('stepSelected', stepNum)"
    >{{ stepNum }}</button>
  </section>
</template>

<script>
export default {
  props: ["stepNumbers", "selected"]
};
</script>

<style scoped>
.step-selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-step {
  padding: 5px 15px;
  margin: 5px;
  border: none;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  transition: all 200ms ease;
}
.btn-step:hover {
  filter: brightness(0.9);
}
.btn-step.selected {
  background: orange;
  color: white;
}
</style>