<template>
  <div id="tutorial-view">
    <h1 class="heading">Sugarizer Dynamic Tutorial</h1>
    <LanguageSelector
      :languages="languages"
      :selected="selectedLanguage"
      @languageSelected="switchLanguage"
    />
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
import Step from "@/components/Step.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import StepSelector from "@/components/StepSelector.vue";
import Tutorial from "@/tutorial.json";

export default {
  name: "Tutorial",
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

    if(this.$route.query.step) {
      this.selectedStep = this.$route.query.step;
    }
    if(this.$route.query.lang) {
      this.selectedLanguage = this.$route.query.lang;
    }
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

</style>
