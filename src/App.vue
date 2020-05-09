<template>
  <div id="app">
    <h1>Sugarizer Dynamic Tutorial</h1>
    <CodeSection :code="'<some code>'" />
  </div>
</template>

<script>
import CodeSection from './components/CodeSection.vue'

export default {
  name: 'App',
  components: {
    CodeSection
  }
}
</script>

<style>
</style>
