<template>
  <section class="content">
    <div v-html="html"></div>
  </section>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/an-old-hope.css';

export default {
  data: () => ({
    html: ''
  }),
  props: {
    file: String,
    dictionary: Object
  },
  // watch: {
  //   dictionary: function(newVal, oldVal) {
  //     this.switchCode();
  //   }
  // },
  mounted() {
    const renderer = new marked.Renderer();
    renderer.code = (code, lang) => `<pre><code class="hljs ${lang || ''}">${this.doRenderCode(code, lang)}</code></pre>`;

    marked.setOptions({
      renderer,
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    this.parseContent();
  },
  methods: {
    doRenderCode(code, lang) {
      return lang ? hljs.highlight(lang, code, true).value : hljs.highlightAuto(code).value
    },
    parseContent() {
      let content = require(`@/assets/${language}/${this.file}`);
      this.html = marked(content.default);
      let vm = this;
      this.$nextTick(() => {
        vm.switchCode();
      })
    },

    // switchCode() {
    //   console.log(this.dictionary);
    //   let codeElements = document.getElementsByClassName('code');
    //   for(let element of codeElements) {
    //     console.log(this.dictionary[element.id]);
    //     element.innerHTML = `<pre><code class="hljs">${this.doRenderCode(this.dictionary[element.id].code, this.dictionary[element.id].lang)}</code></pre>`
    //   }
    // }
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