<template>
  <section class="code">
    <pre>
      <code class="language-markdown">{{ code }}</code>
    </pre>
  </section>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markdown';

export default {
  data: () => ({
    html: ''
  }),
  props: {
    code: String
  },
  mounted() {
    this.html = Prism.highlight(this.code, Prism.languages.markdown, 'markdown');
    console.log(this.html);
  }
}
</script>

<style>

</style>