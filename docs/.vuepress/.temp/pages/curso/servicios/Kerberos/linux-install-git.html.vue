<template><div><h2 id="一、下载最新的-git-版本" tabindex="-1"><a class="header-anchor" href="#一、下载最新的-git-版本" aria-hidden="true">#</a> 一、下载最新的 <code v-pre>git</code> 版本</h2>
<ul>
<li>下载地址： <a href="https://github.com/git/git/releases" target="_blank" rel="noopener noreferrer">https://github.com/git/git/releases<ExternalLinkIcon/></a></li>
<li>下载最新的 <code v-pre>tar.gz</code> 格式</li>
</ul>
<h2 id="二、将git压缩包上传到服务器" tabindex="-1"><a class="header-anchor" href="#二、将git压缩包上传到服务器" aria-hidden="true">#</a> 二、将git压缩包上传到服务器</h2>
<ul>
<li>打开 <code v-pre>xshell</code>, 使用 <code v-pre>rz</code> 工具， 将压缩包上传到 <code v-pre>/usr</code></li>
<li>解压 <code v-pre>tar -zxvf git-2.29.0.tar.gz</code></li>
<li>进入目录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> git-2.29.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、安装" tabindex="-1"><a class="header-anchor" href="#三、安装" aria-hidden="true">#</a> 三、安装</h2>
<ul>
<li>安装所需依赖</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>移除旧版本的 git</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> remove <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>编译git源码</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local/git all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装git至/usr/local/git路径</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local/git <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>配置环境变量</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在底部添加</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>export PATH=$PATH:/usr/local/git/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>刷新环境变量</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看git版本</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、git-配置" tabindex="-1"><a class="header-anchor" href="#四、git-配置" aria-hidden="true">#</a> 四、git 配置</h2>
<ul>
<li>配置邮箱和用户名</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"your name"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"your email"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>生成公钥和私钥，用于ssh连接</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"your email"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看公钥</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /root/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将公钥复制到github
<ul>
<li>访问 <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">https://www.github.com<ExternalLinkIcon/></a></li>
<li>点击头像 -&gt; Settings -&gt; SSH and GPG keys</li>
<li>点击 New SSH key</li>
<li>填写公钥名称，以及复制公钥</li>
</ul>
</li>
</ul>
<p><strong>完~</strong></p>
</div></template>
