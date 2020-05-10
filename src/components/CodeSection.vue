<template>
  <section class="code">
    <pre>
      <code :class="'language-' + lang" :key="code">{{ code }}</code>
    </pre>
  </section>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';

export default {
  data: () => ({
    html: ''
  }),
  props: {
    code: String,
    lang: String
  },
  mounted() {
    // this.html = Prism.highlight(this.code, Prism.languages.markdown, 'markdown');
    // console.log(this.html);
  }
}
</script>

<style>
pre {
  white-space: normal !important;
}
code {
  white-space: pre-wrap !important;
}
/* :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #ffffff;
} */
</style>