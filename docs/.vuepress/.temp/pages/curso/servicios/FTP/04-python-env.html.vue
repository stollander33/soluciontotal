<template><div><blockquote>
<p>每个Python应用可能需要各自拥有一套“独立”的Python运行环境。虚拟环境 就是用来为一个应用创建一套“隔离”的 Python运行环境</p>
</blockquote>
<h2 id="virtualenv" tabindex="-1"><a class="header-anchor" href="#virtualenv" aria-hidden="true">#</a> virtualenv</h2>
<h3 id="virtualenv-的基本用法" tabindex="-1"><a class="header-anchor" href="#virtualenv-的基本用法" aria-hidden="true">#</a> virtualenv 的基本用法</h3>
<blockquote>
<p>A tool for creating isolated 'virtual' python environments.</p>
</blockquote>
<p>查看是否已经安装过 virtualenv</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 virtualenv</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 virtualenv 创建一个 Python 虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建使用系统默认Python 版本的虚拟环境</span>
virtualenv myenv

<span class="token comment"># 创建指定 Python 版本的 虚拟环境</span>
virtualenv <span class="token parameter variable">-p</span> C:<span class="token punctuation">\</span>Python37<span class="token punctuation">\</span>python.exe myenv

<span class="token builtin class-name">cd</span> myenv

<span class="token comment"># 进入虚拟环境</span>
<span class="token comment"># powershell 默认不允许执行未签名的脚本，为了能成功进入虚拟环境，请先执行：</span>
<span class="token comment"># Set-ExecutionPolicy -Scope CurrentUser</span>
<span class="token comment"># ExecutionPolicy: RemoteSigned</span>
.<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>activate

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功进入虚拟环境的标志是，在命令提示符前面显示 用括号包裹的 Python 虚拟环境名：<strong>(myenv) PS D:\code\myenv</strong></p>
<p>查看虚拟环境下的pip安装包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到只有 <strong>pip</strong> , <strong>setuptools</strong> , <strong>wheel</strong> 三个默认安装包</p>
<p>退出虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在虚拟环境的任意目录下</span>
deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="virtualenvwrapper" tabindex="-1"><a class="header-anchor" href="#virtualenvwrapper" aria-hidden="true">#</a> virtualenvwrapper</h2>
<blockquote>
<p>virtualenvwrapper 基于 virtualenv， 可以更方便的管理 Python 虚拟环境， 如果使用 virtualenvwrapper-win 作为 Python 虚拟环境的管理工具，完全可以不必安装 virtualenv</p>
</blockquote>
<p><strong>需要注意的是， virtualenvwrapper 在 Windows 系统中 只能通过 cmd 才能正常使用</strong></p>
<p>安装 virtualenvwrapper</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 非Windows</span>
<span class="token comment"># pip install virtualenvwrapper</span>

<span class="token comment"># Windows</span>
pip <span class="token function">install</span> virtualenvwrapper-win
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建并进入虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mkvirtualenv myenv

<span class="token comment"># 指定 Python 版本创建 虚拟环境</span>
mkvirtualenv <span class="token parameter variable">--python</span><span class="token operator">=</span>D:<span class="token punctuation">\</span><span class="token punctuation">\</span>app<span class="token punctuation">\</span><span class="token punctuation">\</span>python37<span class="token punctuation">\</span><span class="token punctuation">\</span>python.ext myenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上命令创建的虚拟环境，会统一储存在 <strong>C:\Users\Administrator\Envs\</strong></p>
<p>如果想更改虚拟环境储存的目录，需要设置一个 <strong>WORKON_HOME</strong> 的系统环境变量， 关于如何设置 Windows 环境变量，请找 <a href="https://www.baidu.com" title="百度" target="_blank" rel="noopener noreferrer">度娘<ExternalLinkIcon/></a> 或 <a href="https://www.google.com.hk" title="谷歌" target="_blank" rel="noopener noreferrer">谷哥<ExternalLinkIcon/></a></p>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-c7037731f61af48a.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="WORKON_HOME" title="WORKON_HOME" loading="lazy"></p>
<p>进入虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 可以在任意目录，下切换虚拟环境</span>
<span class="token comment"># 注意， 该命令在powershell 终端无效， 在 cmd 中才有效果</span>
workon myenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>rmvirtualenv myenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看所有虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>lsvirtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入当前虚拟环境所在的目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cdvirtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pycharm-与-virtualenvwrapper-的配合" tabindex="-1"><a class="header-anchor" href="#pycharm-与-virtualenvwrapper-的配合" aria-hidden="true">#</a> Pycharm 与 virtualenvwrapper 的配合</h2>
<p><strong>pycharm 本身集成了 virtualenv， 创建新项目时会要求生成虚拟环境， 只要把pycharm生成的虚拟环境安装到 virtualenvwrapper 的虚拟环境目录 ，那么 virtualenvwrapper 同样可以管理 Pycharm生成的是虚拟环境</strong></p>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-1fdaa9871675a5ed.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="WORKON_HOME" title="WORKON_HOME" loading="lazy"></p>
</div></template>
