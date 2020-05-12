<template>
  <div id="app">
    <h1 class="heading">Sugarizer Dynamic Tutorial</h1>
    <LanguageSelector :selected="selectedLanguage" @languageSelected="switchLanguage" />
    selectedLanguage: {{selectedLanguage}}
    <StepSelector :stepNumbers="stepNumbers" :selected="selectedStep" @stepSelected="switchStep" />
    <Step :step="stepToShow" :selectedStep="selectedStep" />
  </div>
</template>

<script>
import Step from './components/Step.vue';
import LanguageSelector from './components/LanguageSelector.vue';
import StepSelector from './components/StepSelector.vue';
import Tutorial from '@/tutorial.json';
// import TutJS from '@/tutorial.js';

export default {
  name: 'App',
  components: {
    Step,
    LanguageSelector,
    StepSelector
  },
  data: () => ({
    tutorial: null,
    selectedLanguage: 'VanillaJS',
    selectedStep: "0"
  }),
  computed: {
    stepNumbers() {
      return Object.keys(this.tutorial.steps);
    },
    stepToShow() {
      return this.tutorial.steps[this.selectedStep];
    }
  },
  created() {
    this.tutorial = Tutorial;
    // console.log(JSON.stringify(TutJS));
  },
  methods: {
    switchLanguage(language) {
      this.selectedLanguage = language;
    },
    switchStep(stepNum) {
      this.selectedStep = stepNum;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 5vw;
}
.heading {
  text-align: center;
  color: rgb(153, 180, 180);
}
</style>
