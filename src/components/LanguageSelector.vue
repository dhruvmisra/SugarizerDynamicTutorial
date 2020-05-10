<template>
  <section>
    <form class="language-selection">
      <div class="form-field" v-for="language in languages" :key="language">
        <input
          type="radio"
          name="language"
          :value="language"
          :checked="selected == language"
          @input="$emit('languageSelected', language)"
        />
        <label :for="language">{{ language }}</label>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: ["selected"],
  data: () => ({
    languages: ["VanillaJS", "Vue.js", "React"]
  })
};
</script>

<style scoped>
.language-selection {
  display: flex;
  justify-content: center;
}
.form-field {
  margin: 15px;
}
</style>