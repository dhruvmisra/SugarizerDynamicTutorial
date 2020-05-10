<template>
  <div id="app">
    <h1>Sugarizer Dynamic Tutorial</h1>
    <CodeSection :code="tutorial ? tutorial.steps[1].content[0] : ''" />
  </div>
</template>

<script>
import CodeSection from './components/CodeSection.vue'
import Tutorial from '@/tutorial.json'

export default {
  name: 'App',
  data: () => ({
    tutorial: null,
    code: `
define(["sugar-web/activity/activity"], function (activity) {

  // Manipulate the DOM only when it is ready.
  requirejs(['domReady!'], function (doc) {

    // Initialize the activity.
    activity.setup();

  });

});
    `
  }),
  components: {
    CodeSection
  },
  mounted() {
    this.tutorial = Tutorial;
  }
}
</script>

<style>
</style>
