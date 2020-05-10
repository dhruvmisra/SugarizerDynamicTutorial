<template>
  <div>
    <h1>{{ step.title }}</h1>
    <CodeSection :code="step.content[0]" :lang="'md'" />
  </div>
</template>

<script>
import CodeSection from './CodeSection';

export default {
  components: {
    CodeSection
  },
  props: {
    step: Object,
    code: String
  }
}
</script>

<style>

</style>