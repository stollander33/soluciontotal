<template><div><h2 id="一、安装-mysqlclient" tabindex="-1"><a class="header-anchor" href="#一、安装-mysqlclient" aria-hidden="true">#</a> 一、安装 <code v-pre>mysqlclient</code></h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> mysqlclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、-配置连接数据库" tabindex="-1"><a class="header-anchor" href="#二、-配置连接数据库" aria-hidden="true">#</a> 二、 配置连接数据库</h2>
<p><code v-pre>mysite/settings.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'default'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'ENGINE'</span><span class="token punctuation">:</span> <span class="token string">'django.db.backends.mysql'</span><span class="token punctuation">,</span>
        <span class="token comment"># 数据库名</span>
        <span class="token string">'NAME'</span><span class="token punctuation">:</span> <span class="token string">'django_db1'</span><span class="token punctuation">,</span>
        <span class="token string">'USER'</span><span class="token punctuation">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
        <span class="token string">'PASSWORD'</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
        <span class="token string">'HOST'</span><span class="token punctuation">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
        <span class="token string">'PORT'</span><span class="token punctuation">:</span> <span class="token string">'3306'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用原生-sql-操作数据库" tabindex="-1"><a class="header-anchor" href="#三、使用原生-sql-操作数据库" aria-hidden="true">#</a> 三、使用原生 <code v-pre>sql</code> 操作数据库</h2>
<ul>
<li>
<p>使用 <code v-pre>navicat</code> 新建数据库 <code v-pre>django_db1</code></p>
</li>
<li>
<p>在数据库 <code v-pre>django_db1</code> 新建表 <code v-pre>book</code></p>
</li>
<li>
<p>新增数据：</p>
<p><code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> connection


<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"insert into book(title,author) values('深入理解ES6', '尼古拉斯')"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/index.html'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>浏览器访问： <code v-pre>localhost:8000</code>, 便会新增一条数据</p>
</li>
<li>
<p>查询数据</p>
<p><code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"select * from book"</span><span class="token punctuation">)</span>
<span class="token comment"># 查询一条数据</span>
<span class="token comment"># row = cursor.fetchone()</span>
<span class="token comment"># 指定查询的条数</span>
<span class="token comment"># rows = cursor.fetchmany(2)</span>
<span class="token comment"># 查询所有数据</span>
rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> rows<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/index.html'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="四、python-db-api下-cursor对象-常用接口" tabindex="-1"><a class="header-anchor" href="#四、python-db-api下-cursor对象-常用接口" aria-hidden="true">#</a> 四、<code v-pre>Python DB API</code>下 <code v-pre>cursor</code>对象，常用接口</h2>
<ul>
<li>
<p><code v-pre>description</code></p>
<p>执行 <code v-pre>cursor.execute</code>后，可通过 <code v-pre>cursor.description</code> 查看字段信息</p>
<p><code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"select * from book"</span><span class="token punctuation">)</span>
<span class="token comment"># (('id', 3, 1, 11, 11, 0, 0), ('title', 253, 15, 765, 765, 0, 0), ('author', 253, 12, 765, 765, 0, 0))</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>description<span class="token punctuation">)</span>
rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> rows<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/index.html'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>rowcount</code></p>
<p>执行 <code v-pre>sql</code> 删除，新增，修改时，返回受影响的条数， 查询时，返回查询数据的条数</p>
<p><code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"delete from book where id=2"</span><span class="token punctuation">)</span>
<span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>rowcount<span class="token punctuation">)</span>
<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/index.html'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>close</code></p>
<p>关闭游标</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>execute</code></p>
<p>用于执行 <code v-pre>sql</code> 语句， 还可以传递参数</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'select * from book where id=%s'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>fetchone</code></p>
</li>
<li>
<p><code v-pre>fetchmany</code></p>
</li>
<li>
<p><code v-pre>fetchall</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 查询一条数据</span>
row <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 指定查询的条数</span>
rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchmany<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 查询所有数据</span>
rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="五、图书管理系统案例" tabindex="-1"><a class="header-anchor" href="#五、图书管理系统案例" aria-hidden="true">#</a> 五、图书管理系统案例</h2>
<ul>
<li>
<p>进入虚拟环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>workon myenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建一个新的项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>django-admin startproject book_manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建 <code v-pre>front</code> 应用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> book_manager
python manage.py startapp front
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置将 <code v-pre>front</code> 应用，注册到已安装应用
<code v-pre>book_manager/setting.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'front'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<ol>
<li>
<p>使用 <code v-pre>Navicat</code> 创建数据库 <code v-pre>book_manager</code></p>
</li>
<li>
<p>创建表 <code v-pre>book</code>, 三个字段： <code v-pre>id</code>、 <code v-pre>title</code>、 <code v-pre>author</code></p>
</li>
<li>
<p>配置数据库连接
<code v-pre>book_manager/settings.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'default'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'ENGINE'</span><span class="token punctuation">:</span> <span class="token string">'django.db.backends.mysql'</span><span class="token punctuation">,</span>
        <span class="token comment"># 数据库名</span>
        <span class="token string">'NAME'</span><span class="token punctuation">:</span> <span class="token string">'book_manager'</span><span class="token punctuation">,</span>
        <span class="token string">'USER'</span><span class="token punctuation">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
        <span class="token string">'PASSWORD'</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
        <span class="token string">'HOST'</span><span class="token punctuation">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
        <span class="token string">'PORT'</span><span class="token punctuation">:</span> <span class="token string">'3306'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置路由</p>
<p><code v-pre>book_manager/urls.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">'front.urls'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>front/urls.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

app_name <span class="token operator">=</span> <span class="token string">'front'</span>

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
   path<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>index<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   path<span class="token punctuation">(</span><span class="token string">'create/'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>create_book<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'create'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   path<span class="token punctuation">(</span><span class="token string">'detail/&lt;int:book_id>'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>book_detail<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'detail'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   path<span class="token punctuation">(</span><span class="token string">'delete/&lt;int:book_id>'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>book_delete<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'delete'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   path<span class="token punctuation">(</span><span class="token string">'edit/&lt;int:book_id>'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>book_edit<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'edit'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写视图函数</p>
<p><code v-pre>front/views.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render<span class="token punctuation">,</span> reverse<span class="token punctuation">,</span> redirect
<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> connection


<span class="token comment"># 获取操作数据库锚点</span>
<span class="token keyword">def</span> <span class="token function">get_cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 首页，展示所有图书</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> get_cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'select * from book'</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> cursor<span class="token punctuation">.</span>description<span class="token punctuation">]</span>
    books <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> values <span class="token keyword">in</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/index.html'</span><span class="token punctuation">,</span> context<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"books"</span><span class="token punctuation">:</span> books<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 新增图书</span>
<span class="token keyword">def</span> <span class="token function">create_book</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">:</span>
        title <span class="token operator">=</span> request<span class="token punctuation">.</span>POST<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span>
        author <span class="token operator">=</span> request<span class="token punctuation">.</span>POST<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'author'</span><span class="token punctuation">)</span>
        cursor <span class="token operator">=</span> get_cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'insert into book(title, author) values(%s, %s)'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>title<span class="token punctuation">,</span> author<span class="token punctuation">)</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> redirect<span class="token punctuation">(</span>reverse<span class="token punctuation">(</span><span class="token string">'front:index'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/create.html'</span><span class="token punctuation">)</span>

<span class="token comment"># 图书详情</span>
<span class="token keyword">def</span> <span class="token function">book_detail</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> get_cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'select * from book where id=%s'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>book_id<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> cursor<span class="token punctuation">.</span>description<span class="token punctuation">]</span>
    book <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/detail.html'</span><span class="token punctuation">,</span> context<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"book"</span><span class="token punctuation">:</span> book<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 删除图书</span>
<span class="token keyword">def</span> <span class="token function">book_delete</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> get_cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'delete from book where id=%s'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>book_id<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> redirect<span class="token punctuation">(</span>reverse<span class="token punctuation">(</span><span class="token string">'front:index'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 编辑图书</span>
<span class="token keyword">def</span> <span class="token function">book_edit</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> get_cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">:</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'select * from book where id=%s'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>book_id<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        keys <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> cursor<span class="token punctuation">.</span>description<span class="token punctuation">]</span>
        book <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">'front/edit.html'</span><span class="token punctuation">,</span> context<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"book"</span><span class="token punctuation">:</span> book<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        title <span class="token operator">=</span> request<span class="token punctuation">.</span>POST<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span>
        author <span class="token operator">=</span> request<span class="token punctuation">.</span>POST<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'author'</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">'update book set title=%s, author=%s where id=%s'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> redirect<span class="token punctuation">(</span>reverse<span class="token punctuation">(</span><span class="token string">'front:index'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将 <code v-pre>static</code> 注册为模板标签
<code v-pre>book_manager/settings.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>TEMPLATES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">'OPTIONS'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">'builtins'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token string">'django.templatetags.static'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关闭表单 <code v-pre>csrf</code> 验证
<code v-pre>book_manager/settings.py</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># 'django.middleware.csrf.CsrfViewMiddleware',</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写模板<br>
<code v-pre>front/templates/front/base.html</code></p>
</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>图书管理系统<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% static 'front/style.css' %}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
        {% include 'front/header.html' %}
        {% block content %}
        {% endblock %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/templates/front/header.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/create/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>新增图书<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/templates/front/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    {% extends "front/base.html" %}

    {% block content %}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>所有图书<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>序号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>书名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-author<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>作者<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
                {% for book in books %}
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ forloop.counter }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% url 'front:detail' book_id=book.id %}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ book.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-author<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ book.author }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
                {% endfor %}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
    {% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/templates/front/create.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    {% extends "front/base.html" %}

    {% block content %}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>新增图书<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>create-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 书名：
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 作者：
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新增图书<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    {% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/templates/front/detail.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    {% extends "front/base.html" %}

    {% block content %}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>图书详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {% for key, value in book.items %}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ key }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
            {% endfor %}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>book-del<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small-danger-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>book-edit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small-default-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>编辑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">const</span> delBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#book-del'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> editBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#book-edit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            delBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'{% url '</span><span class="token literal-property property">front</span><span class="token operator">:</span><span class="token keyword">delete</span><span class="token string">' book_id=book.id %}'</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            editBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'{% url '</span><span class="token literal-property property">front</span><span class="token operator">:</span>edit<span class="token string">' book_id=book.id %}'</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    {% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/templates/front/edit.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    {% extends "front/base.html" %}

    {% block content %}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>编辑图书<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% url 'front:edit' book_id=book.id %}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>create-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 书名：
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ book.title }}<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 作者：
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ book.author }}<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>编辑图书<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    {% endblock %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><code v-pre>front/static/front/style.css</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>    <span class="token selector">body, ul, li, h1</span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav ul</span> <span class="token punctuation">{</span>
        <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav li</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav a</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
        <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav a:hover</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#create-form</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 15px auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#create-form p</span> <span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">padding-top</span><span class="token punctuation">:</span>  25px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.input-text</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.default-btn</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #89a1a9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.small-default-btn</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #89a1a9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.small-danger-btn</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkred<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #89a1a9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">table</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 25px auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">td, th</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightblue<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.table-id</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.table-title</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.table-author</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">h1</span> <span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
