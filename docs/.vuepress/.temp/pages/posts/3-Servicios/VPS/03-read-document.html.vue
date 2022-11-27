<template><div><h2 id="一、db-collection-find-读取文档" tabindex="-1"><a class="header-anchor" href="#一、db-collection-find-读取文档" aria-hidden="true">#</a> 一、<code v-pre>db.collection.find()</code> 读取文档</h2>
<blockquote>
<p>Selects documents in a collection or view and returns a cursor to the selected documents.</p>
</blockquote>
<p>选择集合或视图中的文档，并返回所选文档的游标。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.find<span class="token punctuation">(</span>query, projection<span class="token punctuation">)</span>
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
<td style="text-align:center">query</td>
<td style="text-align:center">document</td>
<td style="text-align:left">(可选的)使用查询操作符指定选择筛选器。若要返回集合中的所有文档，请省略此参数或传递一个空文档({})。</td>
</tr>
<tr>
<td style="text-align:center">projection</td>
<td style="text-align:center">document</td>
<td style="text-align:left">(可选的) 指定要在文档中返回与查询筛选器匹配的字段。要返回匹配文档中的所有字段，请省略此参数。</td>
</tr>
</tbody>
</table>
<p>读取所有文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、匹配查询" tabindex="-1"><a class="header-anchor" href="#二、匹配查询" aria-hidden="true">#</a> 二、匹配查询</h2>
<ul>
<li>
<p>查询 <code v-pre>name</code> 为 <code v-pre>lisi</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询 <code v-pre>name</code> 为 <code v-pre>lisi</code>, 且 <code v-pre>age</code> 为 <code v-pre>19</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询 <code v-pre>_id.status</code> 为 <code v-pre>leaving</code> 的文档（复合查询）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"_id.status"</span><span class="token operator">:</span> <span class="token string">"leaving"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="三、比较查询操作符" tabindex="-1"><a class="header-anchor" href="#三、比较查询操作符" aria-hidden="true">#</a> 三、比较查询操作符</h2>
<p>语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> $<span class="token operator">&lt;</span>operator<span class="token operator">></span>: <span class="token operator">&lt;</span>value<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>$eq</code> 相等</p>
<p>查询 <code v-pre>name</code> 为 <code v-pre>lisi</code>, 且 <code v-pre>age</code> 为 <code v-pre>19</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$eq</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$eq</span><span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or db.department.find({ name: "lisi", age: 19 });</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$ne</code> 不相等
查询 <code v-pre>name</code> 不等于 <code v-pre>lisi</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$ne</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>_id.status</code> 不等于 <code v-pre>leaving</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"_id.status"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$ne</span><span class="token operator">:</span> <span class="token string">"leaving"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$gt</code> 大于
查询 <code v-pre>age</code> 大于 <code v-pre>18</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$gte</code> 大于等于</p>
</li>
<li>
<p><code v-pre>$lt</code> 小于
查询 <code v-pre>name</code> 按字母大小比较， 小于 <code v-pre>lisi</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$lte</code> 小于等于</p>
</li>
<li>
<p><code v-pre>$in</code> 选择字段值等于指定数组中任何值的文档。
语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> field: <span class="token punctuation">{</span> <span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>value<span class="token operator"><span class="token file-descriptor important">1</span>></span>, <span class="token operator">&lt;</span>value<span class="token operator"><span class="token file-descriptor important">2</span>></span>, <span class="token punctuation">..</span>. <span class="token operator">&lt;</span>valueN<span class="token operator">></span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>name</code> 为 <code v-pre>lisi</code> 或 <code v-pre>zhangsan</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> $<span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$nin</code> 选择字段值不等于指定数组中任何值的文档。</p>
</li>
</ul>
<h2 id="四、逻辑查询操作符" tabindex="-1"><a class="header-anchor" href="#四、逻辑查询操作符" aria-hidden="true">#</a> 四、逻辑查询操作符</h2>
<ul>
<li>
<p><code v-pre>$not</code> 取反
语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> field: <span class="token punctuation">{</span> <span class="token variable">$not</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>operator-expression<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>age</code> 不大于 <code v-pre>18</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$not</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$and</code> 且
语法:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token variable">$and</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expression<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token punctuation">}</span>, <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expression<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token punctuation">}</span> , <span class="token punctuation">..</span>. , <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expressionN<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>age</code> 大于 <code v-pre>18</code> 小于 <code v-pre>30</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// db.department.find({ age: { $gt: 18, $lt: 30 } });</span>
<span class="token comment">// db.department.find({ $and: [{ age: { $gt: 18, $lt: 30 } }] });</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$and</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 <code v-pre>age</code> 小于 <code v-pre>30</code> 且 <code v-pre>name</code> 小于 <code v-pre>lisi</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// db.department.find({ name: { $lt: 'lisi' }, age: { $lt: 30 } })</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">$and</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$or</code> 或
语法：</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token variable">$or</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expression<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token punctuation">}</span>, <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expression<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token punctuation">}</span>, <span class="token punctuation">..</span>. , <span class="token punctuation">{</span> <span class="token operator">&lt;</span>expressionN<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>name</code> 为 <code v-pre>lisi</code> 或 <code v-pre>zhangsan</code> 的文</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// db.department.find({ name: { $in: ["lisi", "zhangsan"] } });</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$or</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>$nor</code> 不是</li>
</ul>
<p>查询 <code v-pre>name</code> 不为 <code v-pre>lisi</code> 或 <code v-pre>zhangsan</code> 的文</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// db.department.find({ name: { $nin: ["lisi", "zhangsan"] } });</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$nor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、-字段查询操作符" tabindex="-1"><a class="header-anchor" href="#五、-字段查询操作符" aria-hidden="true">#</a> 五、 字段查询操作符</h2>
<ul>
<li>
<p><code v-pre>$exists</code> 匹配具有指定字段的文档
语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> field: <span class="token punctuation">{</span> <span class="token variable">$exists</span><span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>boolean<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询具有 <code v-pre>_id.status</code> 属性的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"_id.status"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$exists</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询具有 <code v-pre>_id.status</code> 属性的文档, 且值不为 <code v-pre>working</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"_id.status"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$exists</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">$ne</span><span class="token operator">:</span> <span class="token string">"working"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$type</code> 匹配字段类型为指定类型的文档
语法：</p>
<p>具体类型</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> field: <span class="token punctuation">{</span> <span class="token variable">$type</span><span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>BSON type<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个类型</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> field: <span class="token punctuation">{</span> <span class="token variable">$type</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>BSON type<span class="token operator"><span class="token file-descriptor important">1</span>></span> , <span class="token operator">&lt;</span>BSON type<span class="token operator"><span class="token file-descriptor important">2</span>></span>, <span class="token punctuation">..</span>. <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>支持的类型：</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Number</th>
<th>Alias</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Double</td>
<td>1</td>
<td>“double”</td>
<td></td>
</tr>
<tr>
<td>String</td>
<td>2</td>
<td>“string”</td>
<td></td>
</tr>
<tr>
<td>Object</td>
<td>3</td>
<td>“object”</td>
<td></td>
</tr>
<tr>
<td>Array</td>
<td>4</td>
<td>“array”</td>
<td></td>
</tr>
<tr>
<td>Binary data</td>
<td>5</td>
<td>“binData”</td>
<td></td>
</tr>
<tr>
<td>Undefined</td>
<td>6</td>
<td>“undefined”</td>
<td>Deprecated.</td>
</tr>
<tr>
<td>ObjectId</td>
<td>7</td>
<td>“objectId”</td>
<td></td>
</tr>
<tr>
<td>Boolean</td>
<td>8</td>
<td>“bool”</td>
<td></td>
</tr>
<tr>
<td>Date</td>
<td>9</td>
<td>“date”</td>
<td></td>
</tr>
<tr>
<td>Null</td>
<td>10</td>
<td>“null”</td>
<td></td>
</tr>
<tr>
<td>Regular Expression</td>
<td>11</td>
<td>“regex”</td>
<td></td>
</tr>
<tr>
<td>DBPointer</td>
<td>12</td>
<td>“dbPointer”</td>
<td>Deprecated.</td>
</tr>
<tr>
<td>JavaScript</td>
<td>13</td>
<td>“javascript”</td>
<td></td>
</tr>
<tr>
<td>Symbol</td>
<td>14</td>
<td>“symbol”</td>
<td>Deprecated.</td>
</tr>
<tr>
<td>JavaScript (with scope)</td>
<td>15</td>
<td>“javascriptWithScope”</td>
<td>Deprecated in MongoDB 4.4.</td>
</tr>
<tr>
<td>32-bit integer</td>
<td>16</td>
<td>“int”</td>
<td></td>
</tr>
<tr>
<td>Timestamp</td>
<td>17</td>
<td>“timestamp”</td>
<td></td>
</tr>
<tr>
<td>64-bit integer</td>
<td>18</td>
<td>“long”</td>
<td></td>
</tr>
<tr>
<td>Decimal128</td>
<td>19</td>
<td>“decimal”</td>
<td>New in version 3.4.</td>
</tr>
<tr>
<td>Min key</td>
<td>-1</td>
<td>“minKey”</td>
<td></td>
</tr>
<tr>
<td>Max key</td>
<td>127</td>
<td>“maxKey”</td>
<td></td>
</tr>
</tbody>
</table>
<p>查询 <code v-pre>_id</code> 的类型为 <code v-pre>string</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$type</span><span class="token operator">:</span> <span class="token string">"string"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>_id</code> 类型为 <code v-pre>objectId</code> 或 <code v-pre>object</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"objectId"</span><span class="token punctuation">,</span> <span class="token string">"object"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="六、数组查询操作符" tabindex="-1"><a class="header-anchor" href="#六、数组查询操作符" aria-hidden="true">#</a> 六、数组查询操作符</h2>
<p>准备数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token string">"mongodb"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"nodejs"</span><span class="token punctuation">,</span> <span class="token string">"mongodb"</span><span class="token punctuation">,</span> <span class="token string">"ngix"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"nodejs"</span><span class="token punctuation">,</span> <span class="token string">"mongodb"</span><span class="token punctuation">,</span> <span class="token string">"docker"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"d"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"django"</span><span class="token punctuation">,</span> <span class="token string">"flask"</span><span class="token punctuation">,</span> <span class="token string">"pycharm"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"e"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"django"</span><span class="token punctuation">,</span> <span class="token string">"flask"</span><span class="token punctuation">,</span> <span class="token string">"vscode"</span><span class="token punctuation">,</span> <span class="token string">"vuex"</span><span class="token punctuation">,</span> <span class="token string">"element-ui"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>$all</code> 匹配包含所有指定值的数组。
语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$all</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>value<span class="token operator"><span class="token file-descriptor important">1</span>></span> , <span class="token operator">&lt;</span>value<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>skill</code> 有 <code v-pre>python</code>、<code v-pre>vue</code>、<code v-pre>mongodb</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$all</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"mongodb"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// db.department.find({ $and: [{ skill: 'python' }, { skill: 'vue' }, { skill: 'mongodb' }] })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 <code v-pre>skill</code> 有 <code v-pre>[&quot;django&quot;, &quot;flask&quot;, &quot;pycharm&quot;]</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'django'</span><span class="token punctuation">,</span> <span class="token string">'flask'</span><span class="token punctuation">,</span> <span class="token string">'pycharm'</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$elemMatch</code> 匹配包含指定值的数组
语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$elemMatch</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>query<span class="token operator"><span class="token file-descriptor important">1</span>></span>, <span class="token operator">&lt;</span>query<span class="token operator"><span class="token file-descriptor important">2</span>></span>, <span class="token punctuation">..</span>. <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 <code v-pre>skill</code> 中大于 <code v-pre>docker</code> 小于 <code v-pre>vue</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$elemMatch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"docker"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 <code v-pre>skill</code> 中(大于 <code v-pre>docker</code> 且 小于 <code v-pre>vue</code>) 而且 (大于 <code v-pre>docker</code> 且 小于 <code v-pre>webpack</code>)的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$all</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">$elemMatch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"docker"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">$elemMatch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"docker"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$size</code> 匹配指定大小的数组。
查询 <code v-pre>skill</code> 数组长度为 <code v-pre>3</code> 的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$size</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="七、运算查询操作符" tabindex="-1"><a class="header-anchor" href="#七、运算查询操作符" aria-hidden="true">#</a> 七、运算查询操作符</h2>
<ul>
<li>
<p><code v-pre>$regex</code> 选择值与指定正则表达式匹配的文档</p>
<p>语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$regex</span><span class="token builtin class-name">:</span> /pattern/, <span class="token variable">$options</span><span class="token builtin class-name">:</span> <span class="token string">'&lt;options>'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$regex</span><span class="token builtin class-name">:</span> <span class="token string">'pattern'</span>, <span class="token variable">$options</span><span class="token builtin class-name">:</span> <span class="token string">'&lt;options>'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$regex</span><span class="token builtin class-name">:</span> /pattern/<span class="token operator">&lt;</span>options<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以使用正则表达式对象(如<code v-pre>/pattern/</code>)来指定正则表达式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator">></span>: /pattern/<span class="token operator">&lt;</span>options<span class="token operator">></span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>$options</code>: 匹配模式</p>
<ul>
<li><code v-pre>i</code> 忽略大小写</li>
<li><code v-pre>m</code> 多行匹配</li>
<li><code v-pre>x</code> 将模式中的空白忽略</li>
<li><code v-pre>s</code> 将字符串视为单行,换行符作为普通字符;</li>
</ul>
<p>查询 <code v-pre>name</code> 以 <code v-pre>li</code> 或 <code v-pre>李</code> 开头, 忽略大小写的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$regex</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^li)|(^李)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> <span class="token string">"i"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$regex</span><span class="token operator">:</span> <span class="token string">"(^li)|(^李)"</span><span class="token punctuation">,</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> <span class="token string">"i"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$regex</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^li)|(^李)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^li)|(^李)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> $<span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^li</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^李</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="八、游标操作" tabindex="-1"><a class="header-anchor" href="#八、游标操作" aria-hidden="true">#</a> 八、游标操作</h2>
<p><code v-pre>db.collection.find()</code>方法返回一个游标, 要访问文档，需要迭代游标。但是，如果返回的游标没有使用<code v-pre>var</code>关键字分配给变量，那么游标最多只显示结果中前 20 条文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问查询结果的第一条文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历游标</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>myCursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printjson</span><span class="token punctuation">(</span>myCursor<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// myCursor.forEach(printjson);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，在 10 分钟内不活动或者已经遍历完的游标将自动关闭，覆盖此行为，可以使用<code v-pre> cursor.noCursorTimeout()</code>方法:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">noCursorTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动关闭游标</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myCursor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定返回文档的数量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>跳过指定数量的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>翻页时，假设每页显示 2 条文档，则第二页的数据应该为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code v-pre>limit</code>方法参数为 <code v-pre>0</code> 时，将返回剩下的所有文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取游标中文档的总个数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 不考虑是否调用了 `limit` 或 `skip` 方法, 将返回总个数</span>
myCursor<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果想知道调用了 `limit` 或 `skip` 方法后返回的个数</span>
myCursor<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> var myCursor <span class="token operator">=</span> db.department.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.noCursorTimeout<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">></span> myCursor.limit<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"employee1"</span>, <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"zhangsan"</span>, <span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> ObjectId<span class="token punctuation">(</span><span class="token string">"5f4fe031b3dbdc66cacb3b8d"</span><span class="token punctuation">)</span>, <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"lisi"</span>, <span class="token string">"age"</span> <span class="token builtin class-name">:</span> <span class="token number">19</span> <span class="token punctuation">}</span>
<span class="token operator">></span> myCursor.count<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">19</span>
<span class="token operator">></span> myCursor.count<span class="token punctuation">(</span>true<span class="token punctuation">)</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>cursor.sort(&lt;document&gt;)</code>对文档进行排序
在 sort 参数中指定要排序的字段，值为 1 或-1 分别指定升序或降序排序。</p>
<p>假如对游标中的文档按 <code v-pre>age</code> 升序， <code v-pre>name</code> 降序</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myCursor <span class="token operator">=</span> db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCursor<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 <code v-pre>age</code> 最大的文档</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>链式查询时，需要注意函数的优先级</strong></p>
<p><code v-pre>skip</code> 的优先级大于 <code v-pre>limit</code> 所以下面的命令，返回相同的结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>sort</code> 的优先级 大于 <code v-pre>skip</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// db.department.find({}).sort({ age: -1 }).skip(5).limit(5);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、文档的投射" tabindex="-1"><a class="header-anchor" href="#九、文档的投射" aria-hidden="true">#</a> 九、文档的投射</h2>
<p>投影参数决定在匹配的文档中返回哪些字段<br>
投影参数采用以下形式的文档</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token operator">&lt;</span>field<span class="token operator"><span class="token file-descriptor important">1</span>></span>: <span class="token operator">&lt;</span>value<span class="token operator">></span>, <span class="token operator">&lt;</span>field<span class="token operator"><span class="token file-descriptor important">2</span>></span>: <span class="token operator">&lt;</span>value<span class="token operator">></span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;field&gt;: &lt;1 or true&gt;</code> 指定包含的字段</li>
<li><code v-pre>&lt;field&gt;: &lt;0 or false&gt;</code> 指定排除的字段</li>
</ul>
<p>返回的文档中，只包含字段 <code v-pre>name</code> 和 <code v-pre>_id</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回的文档中，只包含字段 <code v-pre>name</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回的文档中，不包含字段 <code v-pre>name</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了文档主键 <code v-pre>_id</code> 外，不能再投射中使用，即包含与不包含的操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Error: error: <span class="token punctuation">{</span>
	<span class="token string">"ok"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
	<span class="token string">"errmsg"</span> <span class="token builtin class-name">:</span> <span class="token string">"Cannot do inclusion on field age in exclusion projection"</span>,
	<span class="token string">"code"</span> <span class="token builtin class-name">:</span> <span class="token number">31253</span>,
	<span class="token string">"codeName"</span> <span class="token builtin class-name">:</span> <span class="token string">"Location31253"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、-投影操作符" tabindex="-1"><a class="header-anchor" href="#十、-投影操作符" aria-hidden="true">#</a> 十、 投影操作符</h2>
<ul>
<li>
<p><code v-pre>$slice (projection)</code> 指定在查询结果中返回的数组中的元素数量</p>
<p>语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.find<span class="token punctuation">(</span>
 <span class="token operator">&lt;</span>query<span class="token operator">></span>,
 <span class="token punctuation">{</span> <span class="token operator">&lt;</span>arrayField<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$slice</span><span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>number to return<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.find<span class="token punctuation">(</span>
 <span class="token operator">&lt;</span>query<span class="token operator">></span>,
 <span class="token punctuation">{</span> <span class="token operator">&lt;</span>arrayField<span class="token operator">></span>: <span class="token punctuation">{</span> <span class="token variable">$slice</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>number to skip<span class="token operator">></span>, <span class="token operator">&lt;</span>number to reutrn<span class="token operator">></span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>skill</code> 数组中的前 2 个元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$slice</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 <code v-pre>skill</code> 数组中忽略第一个元素后的 2 个元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$slice</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 <code v-pre>skill</code> 数组中的最后 2 个元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$slice</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$elemMatch (projection)</code> 返回数组中满足条件的第一个元素</p>
<p>返回 <code v-pre>skill</code> 数组中的大于 <code v-pre>python</code> 的第一个元素<br>
<strong>如果没有找到匹配的元素，<code v-pre>skill</code> 字段将被忽略</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$elemMatch</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"python"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>该操作符，会忽略掉除了 <code v-pre>_id</code> 的其他字段, 其他字段需要显示指定</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$elemMatch</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"python"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用查询条件中的值: 如果查询条件中有 <code v-pre>skill</code> 数组的过滤条件，可以使用投射中使用下面的方式，调用 <code v-pre>$elemMatch</code> 操作符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>db<span class="token punctuation">.</span>department<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token string">"python"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"skill.$"</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// db.department.find({ skill: { $gt: 'python' } }, { skill: { $elemMatch: { $gt: 'python' } } })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="十一、-总结" tabindex="-1"><a class="header-anchor" href="#十一、-总结" aria-hidden="true">#</a> 十一、 总结</h2>
<ul>
<li><code v-pre>db.collection.find()</code></li>
<li>比较操作符</li>
<li>逻辑操作符</li>
<li>字段操作符</li>
<li>数组操作符</li>
<li>运算操作符</li>
<li>游标的操作</li>
<li>文档投射操作</li>
</ul>
</div></template>
