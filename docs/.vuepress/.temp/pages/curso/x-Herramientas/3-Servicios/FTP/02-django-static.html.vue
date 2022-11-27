<template><div><blockquote>
<p>接着 <a href="https://zhb333.github.io/readme-blog/Python/Django/templates_4.html" target="_blank" rel="noopener noreferrer">模板结构优化<ExternalLinkIcon/></a> 往下讲</p>
</blockquote>
<ul>
<li>
<p>确保<code v-pre>mysite/setting.py</code> 中 <code v-pre>INSTALLED_APPS</code> 已经安装了 <code v-pre>django.contrib.staticfiles</code></p>
</li>
<li>
<p>确保 <code v-pre>mysite/setting.py</code> 中设置了 <code v-pre>STATIC_URL</code></p>
</li>
<li>
<p>在已经安装的 <code v-pre>app</code> 下创建 <code v-pre>static</code> 文件夹，并将该应用的静态资源存放在里面 : <code v-pre>front/static/suolong.jpg</code></p>
<p><code v-pre>templates/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% block content %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/suolong.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suolong<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
{% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>mysite/setting.py</code> 中 <code v-pre>STATIC_URL</code> 值是可变的，这样以后引用静态资源的路径都要根据 <code v-pre>STATIC_URL</code> 是新值去修改，因此我们需要使用 <code v-pre>{% load static %}</code></p>
<p><code v-pre>templates/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% extends 'base.html' %}
{% load static %}

{% block content %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% static 'suolong.jpg' %}<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suolong<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
{% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>公共资源路径</p>
<p>在更目录下创建 <code v-pre>static</code> 文件夹</p>
<p><code v-pre>static/style.css</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>mysite/setting.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>STATICFILES_DIRS <span class="token operator">=</span> <span class="token punctuation">(</span>
    os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">'static'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>mysite/base.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% load static %}
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% static 'style.css' %}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在每个需要加载静态资源文件的模板中都要写 <code v-pre>{% load static %}</code>, 为了不在每个模板中都写，我们可以吧 <code v-pre>static</code> 变为 <code v-pre>DTL</code> 模板标签</p>
<p><code v-pre>mysite/setting.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>TEMPLATES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">'OPTIONS'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string">'builtins'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token string">'django.templatetags.static'</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这样就不用在每个页面中引入<code v-pre>{% load static %}</code></strong></p>
</li>
</ul>
</div></template>
