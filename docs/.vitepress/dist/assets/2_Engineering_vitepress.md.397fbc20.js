import{_ as s,c as n,o as a,a as e}from"./app.fbb580f6.js";const _='{"title":"\u914D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"2_Engineering/vitepress.md"}',t={},o=e(`<h4 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h4><div class="language-"><pre><code>// \u57FA\u7840\u76EE\u5F55\u7ED3\u6784
.
\u251C\u2500 docs
\u2502  \u251C\u2500 .vitepress
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 index.md
\u2514\u2500 package.json
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around.&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><br><h4 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h4><p><strong>\u9ED8\u8BA4\u6253\u5305\u4F4D\u7F6E\uFF1A</strong><code>docs/.vitepress/dist</code></p><div class="language-js"><pre><code><span class="token comment">// \u811A\u672C\u547D\u4EE4\uFF0C\u652F\u6301 --port --openx</span>
<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs --port 9000 --open&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;servce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><div class="language-shell"><pre><code><span class="token comment"># \u6253\u5305</span>
<span class="token function">yarn</span> build

<span class="token comment"># \u672C\u5730\u9884\u89C8</span>
<span class="token function">yarn</span> serve
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u{1F481}\u200D\u2642\uFE0F\u5982\u679C\u7F51\u7AD9\u88AB\u90E8\u7F72\u5728\u5B50\u76EE\u5F55\uFF0C\u5982 (<code>https://example.com/subdir/</code>), \u90A3\u5FC5\u987B\u8BBE\u7F6E\u5B50\u76EE\u5F55 <code>&#39;/subdir/&#39;</code> \u4F5C\u4E3A <code>docs/.vitepress/config.js</code> \u4E2D\u7684 <code>base</code> \u914D\u7F6E.</p></div>`,9),p=[o];function r(c,i,d,l,u,k){return a(),n("div",null,p)}var v=s(t,[["render",r]]);export{_ as __pageData,v as default};
