<template><div><h2 id="一、创建数据库" tabindex="-1"><a class="header-anchor" href="#一、创建数据库" aria-hidden="true">#</a> 一、创建数据库</h2>
<p>使用 <code v-pre>use databaseName</code> 命令切换数据库，如果数据库不存在则创建</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> use <span class="token builtin class-name">test</span>
switched to db <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>show collections</code> 命令查看数据库下的所有集合，新建的数据库的集合为 0 个</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、db-collection-insertone-创建当个文档" tabindex="-1"><a class="header-anchor" href="#二、db-collection-insertone-创建当个文档" aria-hidden="true">#</a> 二、<code v-pre>db.collection.insertOne()</code>创建当个文档</h2>
<p>The <code v-pre>insertOne()</code> method has the following syntax:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.insertOne<span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>document<span class="token operator">></span>,
   <span class="token punctuation">{</span>
      writeConcern: <span class="token operator">&lt;</span>document<span class="token operator">></span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">document</td>
<td style="text-align:center">document</td>
<td style="text-align:left">要插入到集合中的文档</td>
</tr>
<tr>
<td style="text-align:center">writeConcern</td>
<td style="text-align:center">document</td>
<td style="text-align:left">(可选的) 表示一个文档的安全写级别<br>如果在事务中运行，请不要设置该参数<br>(以后文章会讲到)</td>
</tr>
</tbody>
</table>
<p>往 <code v-pre>department</code> 这个集合插入第一条文档(<code v-pre>department</code>集合不存在时，会自动创建，并插入数据)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token string">"acknowledged"</span> <span class="token builtin class-name">:</span> true, <span class="token string">"insertedId"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回：一个文档描述</p>
<ul>
<li><code v-pre>acknowledged</code> 安全写级别默认开启</li>
<li><code v-pre>insertedId</code> 写入集合的文档主键 <code v-pre>_id</code> 的值</li>
</ul>
<h2 id="三、db-collection-insertone-操作失败的情况" tabindex="-1"><a class="header-anchor" href="#三、db-collection-insertone-操作失败的情况" aria-hidden="true">#</a> 三、<code v-pre>db.collection.insertOne</code> 操作失败的情况</h2>
<p>文档主键必须唯一，重复创建相同 <code v-pre>_id</code> 的文档时，将创建失败</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteError<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
	<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>,
	<span class="token string">"op"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
		<span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>,
		<span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"lisi"</span>,
		<span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">19</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、自动生成文档主键" tabindex="-1"><a class="header-anchor" href="#四、自动生成文档主键" aria-hidden="true">#</a> 四、自动生成文档主键</h2>
<p>人为的指定文档主键，并不安全，如果不指定 <code v-pre>_id</code>的值，<code v-pre>MongoDB</code> 会自动调用<code v-pre>ObjectId()</code> 生成文档主键，并确保唯一性</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> ObjectId<span class="token punctuation">(</span><span class="token punctuation">)</span>
ObjectId<span class="token punctuation">(</span><span class="token string">"5f4fe0abb3dbdc66cacb3b8e"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不指定 <code v-pre>_id</code> 进行创建</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">"acknowledged"</span> <span class="token builtin class-name">:</span> true,
	<span class="token string">"insertedId"</span> <span class="token builtin class-name">:</span> ObjectId<span class="token punctuation">(</span><span class="token string">"5f4fe031b3dbdc66cacb3b8d"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、db-collection-insertmany-创建多个文档" tabindex="-1"><a class="header-anchor" href="#五、db-collection-insertmany-创建多个文档" aria-hidden="true">#</a> 五、<code v-pre>db.collection.insertMany()</code>创建多个文档</h2>
<p>The <code v-pre>insertMany()</code> method has the following syntax:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.insertMany<span class="token punctuation">(</span>
   <span class="token punctuation">[</span> <span class="token operator">&lt;</span>document <span class="token operator"><span class="token file-descriptor important">1</span>></span> , <span class="token operator">&lt;</span>document <span class="token operator"><span class="token file-descriptor important">2</span>></span>, <span class="token punctuation">..</span>. <span class="token punctuation">]</span>,
   <span class="token punctuation">{</span>
      writeConcern: <span class="token operator">&lt;</span>document<span class="token operator">></span>,
      ordered: <span class="token operator">&lt;</span>boolean<span class="token operator">></span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">document</td>
<td style="text-align:center">document</td>
<td style="text-align:left">要插入到集合中的文档数组</td>
</tr>
<tr>
<td style="text-align:center">writeConcern</td>
<td style="text-align:center">document</td>
<td style="text-align:left">(可选的) 表示一个文档的安全写级别<br>如果在事务中运行，请不要设置该参数<br>(以后文章会讲到)</td>
</tr>
<tr>
<td style="text-align:center">ordered</td>
<td style="text-align:center">boolean</td>
<td style="text-align:left">(可选的) 一个布尔值，指定<code v-pre>mongod</code>实例应该执行有序插入还是无序插入。默认值为<code v-pre>true</code> <br> 如果为<code v-pre>false</code>，则执行无序插入，如果其中一个文档发生错误，则继续处理数组中的其余文档。</td>
</tr>
</tbody>
</table>
<p>一次性创建两个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"joe"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lily"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">"acknowledged"</span> <span class="token builtin class-name">:</span> true,
	<span class="token string">"insertedIds"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
		ObjectId<span class="token punctuation">(</span><span class="token string">"5f4fe3cdb3dbdc66cacb3b8f"</span><span class="token punctuation">)</span>,
		ObjectId<span class="token punctuation">(</span><span class="token string">"5f4fe3cdb3dbdc66cacb3b90"</span><span class="token punctuation">)</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：一个文档描述</p>
<ul>
<li><code v-pre>acknowledged</code> 安全写级别默认开启</li>
<li><code v-pre>insertedIds</code> 对于每个成功插入的文档，一个<code v-pre>_id</code> 数组</li>
</ul>
<h2 id="六、db-collection-insertmany-操作失败的情况" tabindex="-1"><a class="header-anchor" href="#六、db-collection-insertmany-操作失败的情况" aria-hidden="true">#</a> 六、<code v-pre>db.collection.insertMany</code> 操作失败的情况</h2>
<p>文档主键必须唯一，重复创建相同 <code v-pre>_id</code> 的文档时，将创建失败</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"mike"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lucy"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteError<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
			<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
			<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>,
			<span class="token string">"op"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>,
				<span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"mike"</span>,
				<span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">19</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上报错信息中发现 <code v-pre>nInserted</code> 值为 <code v-pre>0</code>, 即两条数据均没有创建成功</p>
<p><strong>当我们配置 <code v-pre>ordered</code> 为 <code v-pre>false</code> 时, 结果将会有所不同</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"mike"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lucy"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">ordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteError<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
			<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
			<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>,
			<span class="token string">"op"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>,
				<span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"mike"</span>,
				<span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">19</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果可以发现 <code v-pre>nInserted</code> 的值为 <code v-pre>1</code>, 即有一条数据创建成功，<code v-pre>_id</code> 为 <code v-pre>employee1</code> 的文档，因为主键重复创建失败，另一条文档因为没有错误，所以成功被创建</p>
<h2 id="七、db-collection-insert-创建一个或多个文档" tabindex="-1"><a class="header-anchor" href="#七、db-collection-insert-创建一个或多个文档" aria-hidden="true">#</a> 七、<code v-pre>db.collection.insert()</code> 创建一个或多个文档</h2>
<p>The insert() method has the following syntax:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.insert<span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>document or array of documents<span class="token operator">></span>,
   <span class="token punctuation">{</span>
     writeConcern: <span class="token operator">&lt;</span>document<span class="token operator">></span>,
     ordered: <span class="token operator">&lt;</span>boolean<span class="token operator">></span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">document</td>
<td style="text-align:center">document</td>
<td style="text-align:left">要插入到集合中的文档数组</td>
</tr>
<tr>
<td style="text-align:center">writeConcern</td>
<td style="text-align:center">document</td>
<td style="text-align:left">(可选的) 表示一个文档的安全写级别<br>如果在事务中运行，请不要设置该参数<br>(以后文章会讲到)</td>
</tr>
<tr>
<td style="text-align:center">ordered</td>
<td style="text-align:center">boolean</td>
<td style="text-align:left">(可选的) 一个布尔值，指定<code v-pre>mongod</code>实例应该执行有序插入还是无序插入。默认值为<code v-pre>true</code> <br> 如果为<code v-pre>false</code>，则执行无序插入，如果其中一个文档发生错误，则继续处理数组中的其余文档。</td>
</tr>
</tbody>
</table>
<p>创建一个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"jake"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个文档返回 <code v-pre>WriteResult</code> 对象</p>
<p>创建多个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"王五"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李二狗"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建多个文档返回 <code v-pre>BulkWriteResult</code> 对象</p>
<h2 id="八、db-collection-insert-操作失败的情况" tabindex="-1"><a class="header-anchor" href="#八、db-collection-insert-操作失败的情况" aria-hidden="true">#</a> 八、<code v-pre>db.collection.insert()</code> 操作失败的情况</h2>
<p>创建一个文档失败的情况</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李二蛋"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"writeError"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
		<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
		<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>WriteResult</code> 对象， 和创建成功返回同样类型的错误对象</p>
<p>创建多个文档失败的情况</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李四娣"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李逍遥"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
			<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
			<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>,
			<span class="token string">"op"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>,
				<span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"李四娣"</span>,
				<span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">16</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>BulkWriteResult</code> 对象， 和创建成功返回同样类型的错误对象</p>
<p>当设置 <code v-pre>ordered</code> 参数为 <code v-pre>false</code> 时，则执行无序插入，如果其中一个文档发生错误，则继续处理数组中的其余文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"employee1"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李四娣"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李逍遥"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">ordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
			<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
			<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: <span class="token entity" title="\&quot;">\"</span>employee1<span class="token entity" title="\&quot;">\"</span> }"</span>,
			<span class="token string">"op"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>,
				<span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"李四娣"</span>,
				<span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">16</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果发现，有一个报错，<code v-pre>nInserted</code> 为 <code v-pre>1</code> 则表示成功创建了 1 个文档</p>
<h2 id="九、db-collection-save-保存文档" tabindex="-1"><a class="header-anchor" href="#九、db-collection-save-保存文档" aria-hidden="true">#</a> 九、<code v-pre>db.collection.save()</code> 保存文档</h2>
<blockquote>
<p>The <code v-pre>save()</code> method uses either the insert or the update command.</p>
</blockquote>
<p><code v-pre>save()</code>方法， 当保存新文档时，会调用 <code v-pre>insert()</code> 方法创建文档，当保存的文档 <code v-pre>_id</code> 已存在，会调用 <code v-pre>update()</code> 方法更新文档</p>
<p><strong>提示:</strong> <code v-pre>MongoDB</code> 不推荐 <code v-pre>db.collection.save()</code> 方法。而是使用<code v-pre>db.collection.insertOne()</code>或<code v-pre>db.collection.replaceOne()</code>。</p>
<p><code v-pre>update()</code>、 <code v-pre>db.collection.replaceOne()</code> 更新文档操作，后面的文章会讲解</p>
<p>The save() method has the following form:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.save<span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>document<span class="token operator">></span>,
   <span class="token punctuation">{</span>
     writeConcern: <span class="token operator">&lt;</span>document<span class="token operator">></span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>save()</code> 方法创建一个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"郑屠户"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code v-pre>save()</code> 方法创建多个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"楚霸王"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李寻欢"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BulkWriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"writeErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"writeConcernErrors"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
	<span class="token string">"nUpserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nMatched"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nModified"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"nRemoved"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"upserted"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以发现，运行结果与 <code v-pre>insert()</code> 通用</strong></p>
<h2 id="十、objectid-文档主键" tabindex="-1"><a class="header-anchor" href="#十、objectid-文档主键" aria-hidden="true">#</a> 十、<code v-pre>ObjectId()</code> 文档主键</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ObjectId<span class="token punctuation">(</span><span class="token operator">&lt;</span>hexadecimal<span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">hexadecimal</td>
<td style="text-align:center">String</td>
<td style="text-align:left">(可选的)十二位的十六进制字符串值</td>
</tr>
</tbody>
</table>
<p>十二位的十六进制表示为：</p>
<ul>
<li>一个 4 字节的时间戳值，表示<code v-pre>ObjectId</code>的创建，自 Unix 时代以来以秒为单位进行度量</li>
<li>一个 5 字节的随机值</li>
<li>一个 3 字节的递增计数器，初始化为一个随机值</li>
</ul>
<p>方法和属性：</p>
<table>
<thead>
<tr>
<th style="text-align:center">Attribute/Method</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">str</td>
<td style="text-align:left">返回对象的十六进制字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">ObjectId.getTimestamp()</td>
<td style="text-align:left">将对象的时间戳部分作为日期返回。</td>
</tr>
<tr>
<td style="text-align:center">ObjectId.toString()</td>
<td style="text-align:left">以字符串文本&quot; ObjectId(…)&quot;的形式返回 JavaScript 表示形式。</td>
</tr>
<tr>
<td style="text-align:center">ObjectId.valueOf()</td>
<td style="text-align:left">返回以十六进制字符串形式表示的对象。返回的字符串是 str 属性</td>
</tr>
</tbody>
</table>
<p>创建一个 <code v-pre>ObjectId</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> const objId <span class="token operator">=</span> ObjectId<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">></span> objId
ObjectId<span class="token punctuation">(</span><span class="token string">"5f5084376310a4635f151165"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入十六进制字符串创建 <code v-pre>ObjectId</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> ObjectId<span class="token punctuation">(</span>objId.str<span class="token punctuation">)</span>
ObjectId<span class="token punctuation">(</span><span class="token string">"5f5084376310a4635f151165"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>属性和方法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> objId.str
5f5084376310a4635f151165
<span class="token operator">></span> objId.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
ObjectId<span class="token punctuation">(</span><span class="token string">"5f5084376310a4635f151165"</span><span class="token punctuation">)</span>
<span class="token operator">></span> objId.valueOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
5f5084376310a4635f151165
<span class="token operator">></span> objId.getTimestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
ISODate<span class="token punctuation">(</span><span class="token string">"2020-09-03T05:50:47Z"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、-复合主键" tabindex="-1"><a class="header-anchor" href="#十一、-复合主键" aria-hidden="true">#</a> 十一、 复合主键</h2>
<p>文档主键的值为另一个文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"leaving"</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"male"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"白小飞"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复合主键也要满足唯一性</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"writeError"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
		<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">11000</span>,
		<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"E11000 duplicate key error collection: test.department index: _id_ dup key: { _id: { status: <span class="token entity" title="\&quot;">\"</span>leaving<span class="token entity" title="\&quot;">\"</span>, gender: <span class="token entity" title="\&quot;">\"</span>male<span class="token entity" title="\&quot;">\"</span> } }"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，当复合主键文档的键值对顺序改变时，<code v-pre>MongoDB</code> 会认为是不同的文档主键</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"male"</span><span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"leaving"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"杨贵妃"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>WriteResult<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"nInserted"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="十二、总结" tabindex="-1"><a class="header-anchor" href="#十二、总结" aria-hidden="true">#</a> 十二、总结</h2>
<ul>
<li><code v-pre>db.collection.insertOne()</code> 将一个文档插入到集合中</li>
<li><code v-pre>db.collection.insertMany()</code> 将多个文档插入到集合中</li>
<li><code v-pre>db.collection.insert()</code> 将一个或多个文档插入到集合中。</li>
<li><code v-pre>db.collection.save()</code> 更新现有文档或插入新文档</li>
<li><code v-pre>ObjectId()</code> 生成文档主键对象</li>
<li>复合主键的概念</li>
</ul>
</div></template>
