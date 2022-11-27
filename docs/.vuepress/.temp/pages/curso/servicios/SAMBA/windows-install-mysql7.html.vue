<template><div><blockquote>
<p>MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性</p>
</blockquote>
<h2 id="下载mysql5-7" tabindex="-1"><a class="header-anchor" href="#下载mysql5-7" aria-hidden="true">#</a> 下载MySQL5.7</h2>
<p>点击 <a href="https://dev.mysql.com/downloads/mysql/5.7.html#downloads" title="MySQL5.7.24" target="_blank" rel="noopener noreferrer">MySQL5.7.24<ExternalLinkIcon/></a> 的进入下载页面</p>
<ul>
<li>根据自己的操作系统选择对应版本</li>
</ul>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-40bf1818c9853640.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="版本选择" title="MySQL版本选择" loading="lazy"></p>
<ul>
<li>进入下载页面， 点击下面的 <strong>No thanks, just start my download.</strong> 不注册，直接下载</li>
</ul>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-02db48bdca2bca7f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="下载" title="MySQL下载" loading="lazy"></p>
<ul>
<li>如果无法访问 <strong>MySQL官网</strong> 或者 下载龟速， 我这里提供了百度云的下载链接 <a href="https://pan.baidu.com/s/18emOYA4e3bIvZPqT3k_AKw" title="MySQL5.7.24" target="_blank" rel="noopener noreferrer">MySQL5.7.24<ExternalLinkIcon/></a>  提取码为: <em>4guz</em></li>
</ul>
<p>下载下来的文件为 <strong>mysql-5.7.24-winx64.zip</strong> 的压缩文件</p>
<ul>
<li>
<p>解压，并将解压后的文件夹，放置到平常软件的安装目录下 如： <strong>D:\app\mysql-5.7.24-winx64</strong></p>
</li>
<li>
<p>为 MySQL Server 配置环境变量</p>
</li>
</ul>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-e3416620ba619dcb.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="环境变量" title="MySQL环境变量" loading="lazy"></p>
<p><img src="http://upload-images.jianshu.io/upload_images/12493822-0a5dd53e21618fac.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="环境变量" title="MySQL环境变量" loading="lazy"></p>
<ul>
<li>
<p>注册 MySQL 服务</p>
<ul>
<li>创建<strong>D:\app\mysql-5.7.24-winx64\my.ini</strong></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[mysqld]
character_set_server=utf8 #网上很多是default-character-set=utf8 ，容易出错
port = 3306
basedir=D:\\app\\mysql-5.7.24-winx64
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB
[mysql]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>以管理员的身份运行cmd, 否则将安装mysqld 失败</strong></p>
</li>
<li>
<p><strong>cmd</strong> 进入 <strong>D:\app\mysql-5.7.24-winx64\bin</strong> 执行 <code v-pre>mysqld -install</code></p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>D:<span class="token punctuation">\</span>app<span class="token punctuation">\</span>mysql-5.7.24-winx64<span class="token punctuation">\</span>bin<span class="token operator">></span>mysqld <span class="token parameter variable">-install</span>
Service successfully installed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>初始化，创建root账户</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>root <span class="token parameter variable">--console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://upload-images.jianshu.io/upload_images/12493822-192b40f770b5dfb8.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="mysql初始密码" title="mysql初始密码" loading="lazy"></p>
</li>
<li>
<p>启动服务</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>net start mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>登录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>D:<span class="token punctuation">\</span>app<span class="token punctuation">\</span>mysql-5.7.24-winx64<span class="token punctuation">\</span>bin<span class="token operator">></span>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Enter password: ************ <span class="token punctuation">(</span>nGhqPrFwd9?C<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改密码</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> <span class="token builtin class-name">set</span> password <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>退出</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
