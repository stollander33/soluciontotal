<template><div><blockquote>
<p>接着 <a href="https://zhb333.github.io/readme-blog/Python/Django/templates_3.html" target="_blank" rel="noopener noreferrer">自定义模板过滤器<ExternalLinkIcon/></a> 往下讲</p>
</blockquote>
<h2 id="一、引入模板" tabindex="-1"><a class="header-anchor" href="#一、引入模板" aria-hidden="true">#</a> 一、引入模板</h2>
<h3 id="include-标签的使用" tabindex="-1"><a class="header-anchor" href="#include-标签的使用" aria-hidden="true">#</a> <code v-pre>include</code> 标签的使用</h3>
<ul>
<li>
<p>新建 <code v-pre>templates/header.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>新建 <code v-pre>templates/footer.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>尾部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改 <code v-pre>templates/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
{% include 'header.html' %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
{% include 'footer.html' %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="include-标签中的模板查找路径" tabindex="-1"><a class="header-anchor" href="#include-标签中的模板查找路径" aria-hidden="true">#</a> <code v-pre>include</code> 标签中的模板查找路径</h3>
<p><strong>参照 <a href="http://localhost:8080/readme-blog/Python/Django/templates_1.html#%E4%B8%80%E3%80%81%E6%A8%A1%E6%9D%BF%E6%9F%A5%E6%89%BE%E8%B7%AF%E5%BE%84" target="_blank" rel="noopener noreferrer">render_to_string的模板查找路径<ExternalLinkIcon/></a></strong></p>
<h3 id="include-标签引入的模板可以引用当前模板中的变量" tabindex="-1"><a class="header-anchor" href="#include-标签引入的模板可以引用当前模板中的变量" aria-hidden="true">#</a> <code v-pre>include</code> 标签引入的模板可以引用当前模板中的变量</h3>
<ul>
<li>
<p>修改 <code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    context <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">'title'</span><span class="token punctuation">:</span> <span class="token string">'Django'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span> context<span class="token operator">=</span>context<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改 <code v-pre>templates/header.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{#头部 Django#}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>头部 {{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>但为了所有引用 <code v-pre>templates/header.html</code> 的模板都能使用 <code v-pre>title</code> 变量， 可以在 <code v-pre>include</code> 标签中传递该变量</p>
<p>修改 <code v-pre>templates/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{#头部 Young and Beautiful#}
{% include 'header.html' with title='Young and Beautiful' %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="二、模板继承" tabindex="-1"><a class="header-anchor" href="#二、模板继承" aria-hidden="true">#</a> 二、模板继承</h2>
<ul>
<li>
<p>新建 <code v-pre>templates/base.html</code>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
{% include 'header.html' with title='Young and Beautiful' %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    {% block content %}
        默认内容
    {% endblock %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
{% include 'footer.html' %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改 <code v-pre>templates/index.html</code>:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% extends 'base.html' %}

{% block content %}
首页中的内容
{% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>访问 <code v-pre>block</code> 标签被覆盖的内容：</p>
<p><code v-pre>templates/index.html</code>:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% extends 'base.html' %}

{% block content %}
首页中的内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ block.super }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
{% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>
