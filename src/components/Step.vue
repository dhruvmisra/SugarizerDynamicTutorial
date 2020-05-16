<template>
  <div>
    <h1>{{ step.title }}</h1>
    <Content :file="step.file" :language="selectedLanguage" :dictionary="dictionary" :key="selectedStep" />
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
    language: String,
  }
}
</script>

<style>

</style>