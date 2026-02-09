import { createVCodeBlock } from '@wdns/vue-code-block';

/**
 * Reference:
 * https://webdevnerdstuff.github.io/vue-code-block/#playground
 * https://github.com/webdevnerdstuff/vue-code-block
 */

const VCodeBlock = createVCodeBlock({
  lang: 'javascript',
  highlightjs: true,
  theme: 'atom-one-dark',
  indent: 4,
});

export { VCodeBlock };
