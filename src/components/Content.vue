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
    language: String
  },
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
      let content = require(`@/assets/${this.language}/${this.file}`);
      this.html = marked(content.default);
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
}
pre {
  white-space: normal !important;
}
pre code {
  padding: 1.5em 1.4em !important;
}
code {
  color: rgb(241, 157, 0);
  background: rgba(255, 166, 0, 0.1);
  font-size: 1.05em;
  border-radius: 3px;
  padding: 2px 4px !important;
  vertical-align: center;
  white-space: pre-wrap !important;
}
blockquote {
  padding: 1px 4px;
  padding-left: 10px;
  border-left: solid 6px rgb(86, 121, 197);
  background: #f8f8f8;  
}
blockquote h4 {
  margin-top: 0.5em;
}
</style>