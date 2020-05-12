<template>
  <div>
    <h1>{{ step.title }}</h1>
    <Content :file="step.file" :dictionary="dictionary" :key="selectedStep" />
  </div>
</template>

<script>
import Content from './Content';

export default {
  components: {
    Content
  },
  props: {
    step: Object,
    selectedStep: String,
    dictionary: Object
  }
}
</script>

<style>

</style>