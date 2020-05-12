<template>
  <section class="content">
    <div v-html="html"></div>
  </section>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/an-old-hope.css';
import jsStringEscape from 'js-string-escape';
import step1 from '@/step1.md';

export default {
  data: () => ({
    html: ''
  }),
  props: {
    file: String
  },
  mounted() {
    const renderer = new marked.Renderer()
    const doRenderCode = (code, lang) => lang ? hljs.highlight(lang, code, true).value : hljs.highlightAuto(code).value
    renderer.code = (code, lang) => `<pre><code class="hljs ${lang || ''}">${doRenderCode(code, lang)}</code></pre>`

    marked.setOptions({
      renderer,
      // highlight: function(code, language) {
      //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      //   return hljs.highlight(validLanguage, code).value;
      // },
      // langPrefix:'hljs ',
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    this.parseContent();
    // console.log(marked("" + jsStringEscape(step1)))
  },
  methods: {
    parseContent() {
      let content = require('@/assets/steps/' + this.file);
      this.html = marked(content.default);
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
pre {
  white-space: normal !important;
}
pre code {
  padding: 1.25em 1em !important;
}
code {
  background: rgb(243, 243, 243);
  border-radius: 3px;
  padding: 2px !important;
  white-space: pre-wrap !important;
}
/* :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #ffffff;
} */
</style>