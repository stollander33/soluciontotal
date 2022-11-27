<template><div><h3 id="vim-常用的四种模式" tabindex="-1"><a class="header-anchor" href="#vim-常用的四种模式" aria-hidden="true">#</a> Vim 常用的四种模式</h3>
<ul>
<li>normal(普通) 模式</li>
<li>insert(编辑) 模式</li>
<li>visual(可视) 模式</li>
<li>command(命令) 模式</li>
</ul>
<p>默认使用 normal 模式，大部分情况是在浏览而不是在编辑, 在 normal 模式下可以进行各种命令操作和移动</p>
<h3 id="进入-insert-模式" tabindex="-1"><a class="header-anchor" href="#进入-insert-模式" aria-hidden="true">#</a> 进入 insert 模式</h3>
<p>在 normal 模式下，使用以下命令进入 insert 模式</p>
<p>i (inser before char) 在当前字符前插入
I (insert before line) 在行首插入</p>
<p>a (insert after char) 在当前字符后插入
A (insert after line) 在行尾插入</p>
<p>o (insert below line) 在下一行插入
O (insert above line) 在上一行插入</p>
<p>s 删除当前字符并进入插入模式
S 删除当前行并进入插入模式</p>
<p>c 删除匹配的字符并进入插入模式
C 删除当前字符到行尾的字符，并进入插入模式</p>
<p>gi 跳转到上一次编辑的位置，进入插入模式</p>
<h3 id="insert-模式下的小技巧" tabindex="-1"><a class="header-anchor" href="#insert-模式下的小技巧" aria-hidden="true">#</a> insert 模式下的小技巧</h3>
<ul>
<li>ctrl + h 删除上一个字符，相当于退格键</li>
<li>ctrl + w 删除上一个单词</li>
<li>ctrl + u 删除到行首</li>
<li>ctrl + [ 回到 normal 模式，相当于 esc</li>
</ul>
<h3 id="command-模式的常用操作" tabindex="-1"><a class="header-anchor" href="#command-模式的常用操作" aria-hidden="true">#</a> Command 模式的常用操作</h3>
<p>在 normal 模式下，使用 <code v-pre>:</code> 进入命令模式</p>
<p>保存退出</p>
<ul>
<li><code v-pre>:w</code> write, 保存</li>
<li><code v-pre>:q</code> quit 退出文件</li>
</ul>
<p>分割窗口</p>
<ul>
<li><code v-pre>:sp</code> split 水平分屏 快捷键 ctrl + w s</li>
<li><code v-pre>:vs</code> vertical split 垂直分屏 ctrl + w v</li>
</ul>
<p>在分割的窗口间跳转</p>
<ul>
<li><code v-pre>ctrl + w w</code> 在窗口间循环切换</li>
<li><code v-pre>ctrl + w h</code> 切换到左边的窗口</li>
<li><code v-pre>ctrl + w j</code> 切换到下边的窗口</li>
<li><code v-pre>ctrl + w k</code> 切换到上边的窗口</li>
<li><code v-pre>ctrl + w l</code> 切换到右边的窗口</li>
</ul>
<p>替换</p>
<ul>
<li><code v-pre>:%s/pattern/string/g</code> 全局替换</li>
<li><code v-pre>:%s/\&lt;pattern\&gt;/string/g</code> 精确匹配全局替换</li>
<li><code v-pre>%10,20s/pattern/string/g</code> 指定范围替换</li>
</ul>
<p>多文件操作</p>
<ul>
<li><code v-pre>:e {filename}</code> 打开当前目录的其它文件</li>
<li><code v-pre>ctrl + p</code> 打开文件</li>
<li><code v-pre>tabNext</code> 切换到下一个打开的文件</li>
<li><code v-pre>tabPrevious</code> 切换到上一个打开的文件</li>
<li><code v-pre>tabOnly</code> 除了当前文件，关闭其它打开的文件</li>
<li><code v-pre>ctrl + f4</code> 关闭当前打开文件</li>
</ul>
<h3 id="进入-visual-模式" tabindex="-1"><a class="header-anchor" href="#进入-visual-模式" aria-hidden="true">#</a> 进入 visual 模式</h3>
<ul>
<li>v 进入可视模式</li>
<li>V 进入可视模式，行选择</li>
<li>ctrl + v 进入可视模式， 块选择</li>
</ul>
<h3 id="normal-模式快速移动" tabindex="-1"><a class="header-anchor" href="#normal-模式快速移动" aria-hidden="true">#</a> normal 模式快速移动</h3>
<p>按字符移动</p>
<ul>
<li>h 向左移动一个字符</li>
<li>j 向下移动一行</li>
<li>k 向上移动一行</li>
<li>l 向右移动一行</li>
</ul>
<p>行间搜索移动</p>
<ul>
<li>f{char} 移动到当前行的 {char} 字符上</li>
<li>t{char} 移动到当前行的 {char} 字符前</li>
<li>F{char} 反向移动到当前行的 {char} 字符上</li>
<li>T{char} 反向移动到当前行的 {char} 字符前</li>
<li>; 行间搜索的以一个匹配项</li>
<li>, 行间搜索的上一个匹配项</li>
</ul>
<p>水平移动</p>
<ul>
<li>0 移动到行首的第一个字符</li>
<li>^ 移动到行首的第一个非空字符</li>
<li>$ 移动到行尾</li>
<li>g_ 移动到行尾非空白字符</li>
</ul>
<p>垂直移动</p>
<ul>
<li>( 移动到上一个句子</li>
<li>) 移动到下一个句子</li>
<li>{ 移动到上一个段落</li>
<li>} 移动到下一个段落</li>
</ul>
<p>页面移动</p>
<ul>
<li>gg 跳转到页面开头</li>
<li>G 跳转到页面结尾</li>
<li>ctrl + o 跳转到上一个位置</li>
</ul>
<p>屏幕中移动</p>
<ul>
<li>H 跳转到屏幕开头</li>
<li>M 跳转到屏幕中间</li>
<li>L 跳转到屏幕结尾</li>
</ul>
<p>翻页</p>
<ul>
<li>ctrl + u 向上翻页</li>
<li>ctrl + f 向下翻页</li>
<li>zz 当前位置置为屏幕中间</li>
</ul>
<h3 id="操作文本块-text-object" tabindex="-1"><a class="header-anchor" href="#操作文本块-text-object" aria-hidden="true">#</a> 操作文本块-text object</h3>
<p>操作文本块的格式
<code v-pre>[number]&lt;command&gt;[text object]</code></p>
<p>文本对象常用到的两个语义化命令</p>
<ul>
<li>i inner 如： <code v-pre>ciw</code> 删除一个单词不包含单词周围的空白字符，并进入 insert 模式</li>
<li>a around 如 <code v-pre>daw</code> 删除一个单词包括单词周围的空白字符</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>4diw <span class="token comment">#删除四个单词</span>
vaw <span class="token comment"># 选择一个单词，包括单词左右的空白字符，并进入 visual  模式</span>
ci<span class="token punctuation">{</span> <span class="token comment"># 删除 {} 中的文本，并进入 insert 模式</span>
ci<span class="token punctuation">(</span> <span class="token comment"># 删除 () 中的文本，并进入 insert 模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3>
<ul>
<li>/{string} 前向搜索</li>
<li>?{string} 反向搜索</li>
<li>n 跳转到下一个匹配</li>
<li>N 跳转到上一个匹配</li>
</ul>
<h3 id="使用宏完成批量操作" tabindex="-1"><a class="header-anchor" href="#使用宏完成批量操作" aria-hidden="true">#</a> 使用宏完成批量操作</h3>
<ul>
<li>q{register} 指定寄存器，开始录制操作</li>
<li>q 完成录制</li>
<li>@{register} 在选择的区域执行录制的操作</li>
</ul>
<h3 id="寄存器的使用" tabindex="-1"><a class="header-anchor" href="#寄存器的使用" aria-hidden="true">#</a> 寄存器的使用</h3>
<p>normal 模式下的复制、剪切、粘贴</p>
<ul>
<li>y yank 复制</li>
<li>d delete 剪切</li>
<li>p put 粘贴</li>
</ul>
<p>复制，剪切的内容默认都存放在 无名寄存器中 即：<code v-pre>&quot;&quot;</code>
因此，<code v-pre>p</code> 相当于 <code v-pre>&quot;&quot;p</code></p>
<p>在复制或剪切前可指定到自定义的寄存器中</p>
<ul>
<li><code v-pre>&quot;adiw</code> 在寄存器 a 中存放删除的单词</li>
<li><code v-pre>&quot;ap</code> 粘贴寄存器 a 中的内容</li>
<li><code v-pre>&quot;+dd</code> 删除一行，并将删除的内容存放到系统剪贴板中，寄存器+ 代表系统剪贴板</li>
</ul>
<p>在 insert 模式下，可通过 <code v-pre>shift + insert</code>将系统剪贴板的内容粘贴到文件中</p>
</div></template>
