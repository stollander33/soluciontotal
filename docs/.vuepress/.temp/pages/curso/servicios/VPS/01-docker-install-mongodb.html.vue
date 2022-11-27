<template><div><h2 id="一、-拉取-mongodb-官方-docker-镜像" tabindex="-1"><a class="header-anchor" href="#一、-拉取-mongodb-官方-docker-镜像" aria-hidden="true">#</a> 一、 拉取 <code v-pre>MongoDB</code> 官方 <code v-pre>docker</code> 镜像</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull mongo:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看下载的镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">ls</span>
<span class="token comment"># or</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mongo               <span class="token number">4</span>                   409c3f937574        <span class="token number">13</span> days ago         493MB
mongo-express       latest              323f84fbaf9b        <span class="token number">5</span> weeks ago         130MB
registry            <span class="token number">2</span>                   2d4f4b5309b1        <span class="token number">2</span> months ago        <span class="token number">26</span>.2MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、启动-mongodb-服务器容器" tabindex="-1"><a class="header-anchor" href="#二、启动-mongodb-服务器容器" aria-hidden="true">#</a> 二、启动 <code v-pre>MongoDB</code> 服务器容器</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mongo4 <span class="token parameter variable">-v</span> /mongodb/data:/data/db <span class="token parameter variable">-d</span> mongo:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>--name</code> 指定 <code v-pre>docker</code> 容器的名字为 <code v-pre>mongo4</code></li>
<li><code v-pre>-v</code> 将本地 <code v-pre>/mongodb/data</code> 挂载到容器环境的 <code v-pre>/data/db</code>(即<code v-pre>MongoDB保存数据的位置</code>)</li>
<li><code v-pre>-d</code> 后台运行 <code v-pre>docker</code> 进程</li>
</ul>
<p>查看 <code v-pre>docker</code> 容器状态</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># or</span>
<span class="token function">docker</span> container <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
ebd63a30b9ce        mongo:4             <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">9</span> seconds ago       Up <span class="token number">7</span> seconds        <span class="token number">27017</span>/tcp                mongo4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、mongo-express-网页版的-mongodb-数据库管理系统" tabindex="-1"><a class="header-anchor" href="#三、mongo-express-网页版的-mongodb-数据库管理系统" aria-hidden="true">#</a> 三、<code v-pre>mongo-express</code> 网页版的 <code v-pre>MongoDB</code> 数据库管理系统</h2>
<p>拉取 <code v-pre>mongo-express</code> 镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull mongo-express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行 <code v-pre>mongo-express</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--link</span> mongo4:mongo <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8081 mongo-express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>--link</code> 连接到 <code v-pre>mongo4</code>容器的 <code v-pre>mongo</code> 程序</li>
<li><code v-pre>-p</code> 指定访问 <code v-pre>mongo-express</code> 的 <code v-pre>HTTP</code> 端口</li>
</ul>
<p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run --link mongo4:mongo -p 8081:8081 mongo-express</span>
Waiting <span class="token keyword">for</span> mongo:27017<span class="token punctuation">..</span>.
Welcome to mongo-express
------------------------


Mongo Express server listening at http://0.0.0.0:8081
Server is <span class="token function">open</span> to allow connections from anyone <span class="token punctuation">(</span><span class="token number">0.0</span>.0.0<span class="token punctuation">)</span>
basicAuth credentials are <span class="token string">"admin:pass"</span>, it is recommended you change this <span class="token keyword">in</span> your config.js<span class="token operator">!</span>
Database connected
Admin Database connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问 <code v-pre>8081</code> 端口，可进入数据库的管理界面</p>
<h2 id="四、运行-mongo-shell" tabindex="-1"><a class="header-anchor" href="#四、运行-mongo-shell" aria-hidden="true">#</a> 四、运行 <code v-pre>Mongo Shell</code></h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> mongo4 mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it mongo4 mongo</span>
MongoDB shell version v4.4.0
connecting to: mongodb://127.0.0.1:27017/?compressors<span class="token operator">=</span>disabled<span class="token operator">&amp;</span><span class="token assign-left variable">gssapiServiceName</span><span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">"id"</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">"367a12f1-2201-4b20-be59-99163728ce84"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.4</span>.0
Welcome to the MongoDB shell.
For interactive help, <span class="token builtin class-name">type</span> <span class="token string">"help"</span><span class="token builtin class-name">.</span>
For <span class="token function">more</span> comprehensive documentation, see
	https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
	https://community.mongodb.com
---
The server generated these startup warnings when booting:
        <span class="token number">2020</span>-09-02T15:53:58.794+00:00: Access control is not enabled <span class="token keyword">for</span> the database. Read and <span class="token function">write</span> access to data and configuration is unrestricted
        <span class="token number">2020</span>-09-02T15:53:58.797+00:00: /sys/kernel/mm/transparent_hugepage/enabled is <span class="token string">'always'</span><span class="token builtin class-name">.</span> We suggest setting it to <span class="token string">'never'</span>
        <span class="token number">2020</span>-09-02T15:53:58.797+00:00: /sys/kernel/mm/transparent_hugepage/defrag is <span class="token string">'always'</span><span class="token builtin class-name">.</span> We suggest setting it to <span class="token string">'never'</span>
---
---
        Enable MongoDB's <span class="token function">free</span> cloud-based monitoring service, <span class="token function">which</span> will <span class="token keyword">then</span> receive and display
        metrics about your deployment <span class="token punctuation">(</span>disk utilization, CPU, operation statistics, etc<span class="token punctuation">)</span>.

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to <span class="token function">make</span> product
        improvements and to suggest MongoDB products and deployment options to you.

        To <span class="token builtin class-name">enable</span> <span class="token function">free</span> monitoring, run the following command: db.enableFreeMonitoring<span class="token punctuation">(</span><span class="token punctuation">)</span>
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring<span class="token punctuation">(</span><span class="token punctuation">)</span>
---
<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的运行结果，表示成功执行 <code v-pre>mongo4</code> 容器的 <code v-pre>mongo</code> 程序，并且可以，交互式的在 <code v-pre>mongo shell</code> 中执行命令</p>
<h2 id="五、第一条-mongodb-命令" tabindex="-1"><a class="header-anchor" href="#五、第一条-mongodb-命令" aria-hidden="true">#</a> 五、第一条 <code v-pre>MongoDB</code> 命令</h2>
<p>查看所有数据库</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>show databases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> show databases
admin   <span class="token number">0</span>.000GB
config  <span class="token number">0</span>.000GB
<span class="token builtin class-name">local</span>   <span class="token number">0</span>.000GB
<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
