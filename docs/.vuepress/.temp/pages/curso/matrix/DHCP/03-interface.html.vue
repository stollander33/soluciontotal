<template><div><h2 id="一、基本用法" tabindex="-1"><a class="header-anchor" href="#一、基本用法" aria-hidden="true">#</a> 一、基本用法</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NameInfo</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getFullName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span><span class="token operator">:</span> NameInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">'liu'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// lucy liu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、可选属性" tabindex="-1"><a class="header-anchor" href="#二、可选属性" aria-hidden="true">#</a> 二、可选属性</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getVegetables</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> type <span class="token punctuation">}</span><span class="token operator">:</span> Vegetable<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">A </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>color <span class="token operator">?</span> color <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getVegetables</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// A red tomato</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getVegetables</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'tomato'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// A tomato</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、多余属性检查" tabindex="-1"><a class="header-anchor" href="#三、多余属性检查" aria-hidden="true">#</a> 三、多余属性检查</h2>
<ul>
<li>类型断言</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getVegetables</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> Vegetable<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>索引签名</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 索引签名</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getVegetables</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>类型兼容性</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> vegetableInfo <span class="token operator">=</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'tomato'</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getVegetables</span><span class="token punctuation">(</span>vegetableInfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、只读属性" tabindex="-1"><a class="header-anchor" href="#四、只读属性" aria-hidden="true">#</a> 四、只读属性</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 只读属性</span>
<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> UserInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// user.age = 17 // 报错 Cannot assign to 'age' because it is a read-only property.</span>

<span class="token comment">// 限定数组元素是只读属性</span>

<span class="token keyword">interface</span> <span class="token class-name">ArrInterface</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myArr<span class="token operator">:</span> ArrInterface <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'lucy'</span><span class="token punctuation">]</span>
<span class="token comment">// myArr[0] = 17 // 报错 Cannot assign to '0' because it is a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、函数类型" tabindex="-1"><a class="header-anchor" href="#五、函数类型" aria-hidden="true">#</a> 五、函数类型</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AddFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">AddFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> <span class="token operator">=></span> n1 <span class="token operator">+</span> n2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、索引类型" tabindex="-1"><a class="header-anchor" href="#六、索引类型" aria-hidden="true">#</a> 六、索引类型</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 索引类型</span>
<span class="token keyword">interface</span> <span class="token class-name">RoleDic</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 属性名必须是数字类型</span>
<span class="token keyword">const</span> role1<span class="token operator">:</span> RoleDic <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">'superuser'</span><span class="token punctuation">,</span>
  <span class="token comment">// name: 'lucy' // 报错 'name' does not exist in type 'RoleDic'.</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RoleDic1</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 属性名可以是数字类型, 会自动转换为字符串类型</span>
<span class="token keyword">const</span> role2<span class="token operator">:</span> RoleDic1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">'superuser'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、接口继承" tabindex="-1"><a class="header-anchor" href="#七、接口继承" aria-hidden="true">#</a> 七、接口继承</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Vegetables</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Tomato</span> <span class="token keyword">extends</span> <span class="token class-name">Vegetables</span> <span class="token punctuation">{</span>
  radius<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Carrot</span> <span class="token keyword">extends</span> <span class="token class-name">Vegetables</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tomato<span class="token operator">:</span> Tomato <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
  radius<span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> carrot<span class="token operator">:</span> Carrot <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">'orange'</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、混合类型接口" tabindex="-1"><a class="header-anchor" href="#八、混合类型接口" aria-hidden="true">#</a> 八、混合类型接口</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> getCounter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Counter <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> c<span class="token punctuation">.</span>count<span class="token operator">++</span> <span class="token punctuation">}</span>
  c<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">const</span> counter<span class="token operator">:</span> Counter <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、接口与类" tabindex="-1"><a class="header-anchor" href="#九、接口与类" aria-hidden="true">#</a> 九、接口与类</h2>
<p>在类的部分一起讲解</p>
</div></template>
