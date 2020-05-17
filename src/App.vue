<template>
  <div id="app">
    <h1 class="heading">Sugarizer Dynamic Tutorial</h1>
    <LanguageSelector
      :languages="languages"
      :selected="selectedLanguage"
      @languageSelected="switchLanguage"
    />
    selectedLanguage: {{selectedLanguage}}
    <StepSelector :stepNumbers="stepNumbers" :selected="selectedStep" @stepSelected="switchStep" />
    <Step
      :step="stepToShow"
      :selectedStep="selectedStep"
      :language="selectedLanguage"
    />
    <StepSelector :stepNumbers="stepNumbers" :selected="selectedStep" @stepSelected="switchStep" />
  </div>
</template>

<script>
import Step from "./components/Step.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import StepSelector from "./components/StepSelector.vue";
import Tutorial from "@/tutorial.json";

export default {
  name: "App",
  components: {
    Step,
    LanguageSelector,
    StepSelector
  },
  data: () => ({
    tutorial: null,
    languages: ["VanillaJS", "VueJS"],
    selectedLanguage: "VanillaJS",
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
    let vm = this;
    this.tutorial = Tutorial;
  },
  methods: {
    switchLanguage(language) {
      this.selectedLanguage = language;
    },
    switchStep(stepNum) {
      this.selectedStep = stepNum;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
#app {
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px 10vw;
}
.heading {
  text-align: center;
  color: rgb(153, 180, 180);
}
</style>
