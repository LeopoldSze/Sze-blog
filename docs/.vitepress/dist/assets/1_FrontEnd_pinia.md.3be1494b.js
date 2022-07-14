import{_ as n,c as s,o as a,a as t}from"./app.fbb580f6.js";const f='{"title":"\u7279\u6027","description":"","frontmatter":{},"headers":[],"relativePath":"1_FrontEnd/pinia.md"}',p={},o=t(`<h4 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h4><ul><li>\u76F4\u89C2\uFF0C\u50CF\u5B9A\u4E49 <code>compnents</code> \u4E00\u6837\u5730\u5B9A\u4E49 <code>store</code></li><li>\u5B8C\u6574\u7684 <code>typescript</code> \u652F\u6301</li><li>\u53BB\u9664 <code>mutations</code>\uFF0C\u53EA\u6709 <code>state</code>, <code>getters</code>, <code>actions</code></li><li><code>actions</code> \u652F\u6301\u540C\u6B65\u548C\u5F02\u6B65</li><li><code>Vue Devtools</code> \u652F\u6301 <code>Pinia</code>\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u5F00\u53D1\u4F53\u9A8C</li><li>\u80FD\u591F\u6784\u5EFA\u591A\u4E2A <code>stores</code>\uFF0C\u5E76\u5B9E\u73B0\u81EA\u52A8\u5730\u4EE3\u7801\u62C6\u5206</li><li>\u6781\u5176\u8F7B\u91CF(1KB)\uFF0C\u751A\u81F3\u611F\u89C9\u4E0D\u5230\u5B83\u7684\u5B58\u5728</li></ul><br><h4 id="_1-\u5B89\u88C5" tabindex="-1">1. \u5B89\u88C5 <a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> pinia

<span class="token comment"># or</span>

<span class="token function">yarn</span> <span class="token function">add</span> pinia

<span class="token comment"># or</span>

<span class="token function">npm</span> <span class="token function">install</span> pinia
</code></pre></div><br><h4 id="_2-\u521B\u5EFA" tabindex="-1">2. \u521B\u5EFA <a class="header-anchor" href="#_2-\u521B\u5EFA" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
</code></pre></div><br><h4 id="_3-\u5B9A\u4E49-store" tabindex="-1">3. \u5B9A\u4E49 store <a class="header-anchor" href="#_3-\u5B9A\u4E49-store" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><br><h4 id="_4-\u4F7F\u7528" tabindex="-1">4. \u4F7F\u7528 <a class="header-anchor" href="#_4-\u4F7F\u7528" aria-hidden="true">#</a></h4><br><h5 id="_1-\u666E\u901A\u4F7F\u7528" tabindex="-1">1. \u666E\u901A\u4F7F\u7528 <a class="header-anchor" href="#_1-\u666E\u901A\u4F7F\u7528" aria-hidden="true">#</a></h5><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMainStore<span class="token punctuation">,</span> IMainStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/main&#39;</span>

<span class="token keyword">const</span> store<span class="token operator">:</span> IMainStore <span class="token operator">=</span> <span class="token function">useMainStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
<span class="token comment">// state \u4FEE\u6539\u7684\u65B9\u5F0F</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span>count<span class="token operator">++</span> <span class="token comment">// \u7B2C\u4E00\u79CD</span>
<span class="token punctuation">}</span>
</code></pre></div><br><h5 id="_2-\u89E3\u6784\u4F7F\u7528" tabindex="-1">2. \u89E3\u6784\u4F7F\u7528 <a class="header-anchor" href="#_2-\u89E3\u6784\u4F7F\u7528" aria-hidden="true">#</a></h5><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMainStore<span class="token punctuation">,</span> IMainStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/main&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> store<span class="token operator">:</span> IMainStore <span class="token operator">=</span> <span class="token function">useMainStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span> <span class="token comment">// \u7B2C\u4E8C\u79CD\u4FEE\u6539\uFF1A\u4FDD\u7559\u89E3\u6784\u54CD\u5E94\u5F0F</span>
  
<span class="token comment">// state \u4FEE\u6539\u7684\u65B9\u5F0F</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span> <span class="token comment">// \u7B2C\u4E8C\u79CD</span>
<span class="token punctuation">}</span>

<span class="token comment">// $patch \u4FEE\u6539</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSub</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        count<span class="token operator">:</span> store<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// $patch \u51FD\u6570\u4FEE\u6539</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleTimes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token operator">:</span> IMainStore<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count <span class="token operator">*=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u66FF\u6362state</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleToggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span>$state <span class="token operator">=</span> <span class="token punctuation">{</span>
        count<span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u7F6Estate</span>
<span class="token keyword">const</span> <span class="token function-variable function">resetState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">$reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u542Cstate</span>
store<span class="token punctuation">.</span><span class="token function">$subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mutation<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6570\u636E\u53D8\u5316\uFF1A&#39;</span><span class="token punctuation">,</span> mutation<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><br><h5 id="_3-getters" tabindex="-1">3. getters <a class="header-anchor" href="#_3-getters" aria-hidden="true">#</a></h5><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">IMainStore</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">double</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
    
    <span class="token comment">// \u4F7F\u7528this</span>
    <span class="token function-variable function">times</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u666E\u901A\u4F7F\u7528</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;getters&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>double <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// \u89E3\u6784\u4F7F\u7528</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;getters&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> double <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> double <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre></div><br><h5 id="_4-actions" tabindex="-1">4. actions <a class="header-anchor" href="#_4-actions" aria-hidden="true">#</a></h5><div class="language-js"><pre><code><span class="token comment">// \u540C\u6B65\u548C\u5F02\u6B65\u90FD\u53EF\u4EE5</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/public/question.json&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>question <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.getQuestion&quot;</span><span class="token operator">&gt;</span>\u83B7\u53D6\u5F02\u6B65\u6570\u636E<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre></div>`,25),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
