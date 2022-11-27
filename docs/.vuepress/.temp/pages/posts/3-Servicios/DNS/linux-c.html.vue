<template><div><h2 id="一、c-语言是什么" tabindex="-1"><a class="header-anchor" href="#一、c-语言是什么" aria-hidden="true">#</a> 一、C 语言是什么？</h2>
<p>C 语言是一个有结构化程序设计、具有变量作用域以及递归功能的过程式语言。广泛用于系统软件与应用软件的开发。</p>
<p>C 语言，通俗的讲，就是人类和计算机交流的一种方式。</p>
<h3 id="_1-1-ansi-c" tabindex="-1"><a class="header-anchor" href="#_1-1-ansi-c" aria-hidden="true">#</a> 1.1 ANSI C</h3>
<p>ANSI C、ISO C、Standard C 是指美国国家标准协会（ANSI）和国际标准化组织（ISO）对 C 语言发布的标准。历史上，这个名字专门用于指代此标准的原始版本，也是支持最好的版本（称为 C89 或 C90）</p>
<h3 id="_1-2-c-语言的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-c-语言的特点" aria-hidden="true">#</a> 1.2 C 语言的特点</h3>
<ul>
<li>简单</li>
<li>快速</li>
<li>高性能</li>
<li>兼容性好</li>
<li>功能强大</li>
<li>易于学习</li>
</ul>
<h3 id="_1-3-c-语言适合做什么" tabindex="-1"><a class="header-anchor" href="#_1-3-c-语言适合做什么" aria-hidden="true">#</a> 1.3 C 语言适合做什么？</h3>
<p>什么样的程序最有价值？
什么样的场景最适合用 C 语言</p>
<ul>
<li>Linux 嵌入式 （小工具: ls cd 等）</li>
<li>和硬件打交道的程序 (操作系统 ARM 嵌入式 单片机 Arduino)</li>
<li>性能要求较高的应用程序 (nginx)</li>
</ul>
<h2 id="二、开发环境与配置" tabindex="-1"><a class="header-anchor" href="#二、开发环境与配置" aria-hidden="true">#</a> 二、开发环境与配置</h2>
<h3 id="_2-1-准备一个-linux-环境" tabindex="-1"><a class="header-anchor" href="#_2-1-准备一个-linux-环境" aria-hidden="true">#</a> 2.1 准备一个 linux 环境</h3>
<ul>
<li>虚拟机安装</li>
<li>云服务器</li>
</ul>
<h3 id="_2-2-编辑器" tabindex="-1"><a class="header-anchor" href="#_2-2-编辑器" aria-hidden="true">#</a> 2.2 编辑器</h3>
<ul>
<li>emacs (编辑器之神)</li>
<li>vim (神的编辑器)</li>
</ul>
<h3 id="_2-3-安装-vim" tabindex="-1"><a class="header-anchor" href="#_2-3-安装-vim" aria-hidden="true">#</a> 2.3 安装 vim</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-查看-cc-编译器" tabindex="-1"><a class="header-anchor" href="#_2-4-查看-cc-编译器" aria-hidden="true">#</a> 2.4 查看 cc 编译器</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示当前的 cc 编译器是 gcc 版本，gcc 是兼容 cc 的编译器</p>
<p><code v-pre>gcc version 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC)</code></p>
<p>也可以使用这条命令查看</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、linux-下的第一个c程序" tabindex="-1"><a class="header-anchor" href="#三、linux-下的第一个c程序" aria-hidden="true">#</a> 三、Linux 下的第一个C程序</h2>
<h3 id="_3-1-创建工程目录以及编辑-c-程序文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建工程目录以及编辑-c-程序文件" aria-hidden="true">#</a> 3.1 创建工程目录以及编辑 C 程序文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> less1
<span class="token builtin class-name">cd</span> less1
<span class="token function">vim</span> a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-hello-world" tabindex="-1"><a class="header-anchor" href="#_3-2-hello-world" aria-hidden="true">#</a> 3.2 hello world</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span> <span class="token comment">// 导入标准的输入输出流 头文件</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并退出</p>
<h3 id="_3-3-编译-c-程序" tabindex="-1"><a class="header-anchor" href="#_3-3-编译-c-程序" aria-hidden="true">#</a> 3.3 编译 c 程序</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cc a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会生成 a.out 的可执行文件</p>
<h3 id="_3-4-执行编译后的-c-程序" tabindex="-1"><a class="header-anchor" href="#_3-4-执行编译后的-c-程序" aria-hidden="true">#</a> 3.4 执行编译后的 c 程序</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果在命令行输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less1<span class="token punctuation">]</span><span class="token comment"># ./a.out</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、多文件操作" tabindex="-1"><a class="header-anchor" href="#四、多文件操作" aria-hidden="true">#</a> 四、多文件操作</h2>
<h3 id="_4-1-函数文件和入口文件分别定义" tabindex="-1"><a class="header-anchor" href="#_4-1-函数文件和入口文件分别定义" aria-hidden="true">#</a> 4.1 函数文件和入口文件分别定义</h3>
<ul>
<li>求最大值的函数文件 max.c</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>求最小值函数文件 max.c</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入口文件 main.c</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span> <span class="token comment">// 系统库中查找</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"max.c"</span> <span class="token comment">// 当前项目中查找</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"min.c"</span> <span class="token comment">// 当前项目中查找</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a  <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> maxNum <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> minNum <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"the max value is %d\n"</span><span class="token punctuation">,</span> maxNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"the min value is %d\n"</span><span class="token punctuation">,</span> minNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>编译并运行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc main.c <span class="token parameter variable">-o</span> main.out

./main.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-引用编译后的函数文件" tabindex="-1"><a class="header-anchor" href="#_4-2-引用编译后的函数文件" aria-hidden="true">#</a> 4.2 引用编译后的函数文件</h3>
<p>当入口文件中引入很多自定义的 C 源程序代码时，一起编译时会很慢，如果引入的是编译后的文件，编译就会很快了</p>
<ul>
<li>编译函数源程序</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-c</span> max.c <span class="token parameter variable">-o</span> max.o
gcc <span class="token parameter variable">-c</span> min.c <span class="token parameter variable">-o</span> min.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注释入口文件中引入的 max.c min.c</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span> <span class="token comment">// 系统库中查找</span></span>
<span class="token comment">// #include "max.c" // 当前项目中查找</span>
<span class="token comment">// #include "min.c"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用命令行编译并运行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc min.o max.o main.c <span class="token parameter variable">-o</span> main.out
./main.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-编写头文件" tabindex="-1"><a class="header-anchor" href="#_4-3-编写头文件" aria-hidden="true">#</a> 4.3 编写头文件</h3>
<p>使用编译后的文件与入口函数一起编译时，能够加快编译速度，但是却看不到编译文件中的函数的用法，因此需要编写编译文件的头文件，让别人知道该编译文件的使用方法</p>
<ul>
<li>max.c 的头文件 max.h</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>min.c 的头文件 min.h</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在入口函数中引入头文件</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span> <span class="token comment">// 系统库中查找</span></span>
<span class="token comment">// #include "max.c" // 当前项目中查找</span>
<span class="token comment">// #include "min.c"</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"max.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"min.h"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、-makefile-的编写和使用" tabindex="-1"><a class="header-anchor" href="#五、-makefile-的编写和使用" aria-hidden="true">#</a> 五、 Makefile 的编写和使用</h2>
<p>如果我们在编译时，引入了有很多个编译文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc min.o max.o main.c <span class="token parameter variable">-o</span> main.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行就会变得很长很长，这种方式就不可行了，这时我们需要来编写 MakeFile</p>
<h3 id="_5-1-make-命令" tabindex="-1"><a class="header-anchor" href="#_5-1-make-命令" aria-hidden="true">#</a> 5.1 make 命令</h3>
<ul>
<li>make 工具可以将大型的开发项目分成若干个易于管理的模块</li>
<li>make 工具可以很清晰和很快捷的整理源文件</li>
<li>make 内部也是使用了 gcc</li>
</ul>
<p>查看 make 工具是否已经安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2-编写-makefile" tabindex="-1"><a class="header-anchor" href="#_5-2-编写-makefile" aria-hidden="true">#</a> 5.2 编写 Makefile</h3>
<div class="language-Makefile ext-Makefile line-numbers-mode"><pre v-pre class="language-Makefile"><code># main.out 是目标文件， 依赖于 min.o max.o main.c
# 通过执行 gcc min.o max.o main.c 生成 main.out
main.out:min.o max.o main.c
        gcc min.o max.o main.c -o main.out
# 如果缺少 min.o max.o, 需要先执行下面的命令生成 min.o max.o
# 如果 min.o max.o 已经存在， 再次编译时，就不会再生成 min.o max.o 了
# 如果 min.o 或 max.o 做了修改，再次编译时，也会重新生成 min.o 或 max.o
# min.o 是目标文件，依赖 min.c
# 通过执行 gcc -c min.c 生成 min.o
min.o:min.c
        gcc -c min.c
# max.o 是目标文件，依赖 max.c
# 通过执行 gcc -c max.c 生成 max.o
max.o:max.c
        gcc -c max.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-执行-makefile-生成目标文件" tabindex="-1"><a class="header-anchor" href="#_5-3-执行-makefile-生成目标文件" aria-hidden="true">#</a> 5.3 执行 Makefile 生成目标文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> Makefile

./main.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、-main-函数的详解" tabindex="-1"><a class="header-anchor" href="#六、-main-函数的详解" aria-hidden="true">#</a> 六、 main 函数的详解</h2>
<h3 id="_6-1-main-函数中的-return" tabindex="-1"><a class="header-anchor" href="#_6-1-main-函数中的-return" aria-hidden="true">#</a> 6.1 main 函数中的 return</h3>
<ul>
<li>在 shell 命令行中可以通过 <code v-pre>echo $?</code> 查看上一条命令的执行结果</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out</span>
hello world
<span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出 0 表示上一条命令执行成功, 而 0 也是 main 函数里的返回结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令，会接着执行 ls</p>
<ul>
<li>main 函数返回 非 0 表示程序运行错误</li>
</ul>
<p>如果 main 函数的返回值不为 0， 表示程序执行失败</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argv<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argc<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译运行后的结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out</span>
hello world
<span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令，不会接着执行 ls</p>
<h3 id="_6-2-main-函数中的参数" tabindex="-1"><a class="header-anchor" href="#_6-2-main-函数中的参数" aria-hidden="true">#</a> 6.2 main 函数中的参数</h3>
<p>main 函数的完整形式</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// argv 表示命令行参数的个数</span>
<span class="token comment">// argc 表示命令行参数组成的字符串数组</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argv<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argc<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"argv is %d\n"</span><span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">int</span> i<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argv<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"argc[%d] is %s\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> argc<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并运行的结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out -a -b</span>
argv is <span class="token number">3</span>
argc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> is ./a.out
argc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> is <span class="token parameter variable">-a</span>
argc<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> is <span class="token parameter variable">-b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、-输入流、输出流、错误流" tabindex="-1"><a class="header-anchor" href="#七、-输入流、输出流、错误流" aria-hidden="true">#</a> 七、 输入流、输出流、错误流</h2>
<h3 id="_7-1-标准输入流输出流以及错误流" tabindex="-1"><a class="header-anchor" href="#_7-1-标准输入流输出流以及错误流" aria-hidden="true">#</a> 7.1 标准输入流输出流以及错误流</h3>
<ul>
<li>stdout 标准输出流</li>
<li>stdin 标准输入流</li>
<li>stderr 标准错误流</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// stdout 标准输出流</span>
  <span class="token comment">// printf("Please input a number: \n");</span>
  <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span> <span class="token string">"Please input a number: \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">int</span> a<span class="token punctuation">;</span>
  <span class="token comment">// stdin 标准输入流</span>
  <span class="token comment">// scanf("%d", &amp;a);</span>
  <span class="token function">fscanf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// stderr 标准错误流</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"the inputed value must be greater than 0\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-输入流输出流以及错误流的重定向" tabindex="-1"><a class="header-anchor" href="#_7-2-输入流输出流以及错误流的重定向" aria-hidden="true">#</a> 7.2 输入流输出流以及错误流的重定向</h3>
<ul>
<li>标准输入流在 shell 中用 0 表示</li>
<li>标准输出流在 shell 中用 1 表示</li>
<li>标准错误流在 shell 中用 2 表示</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"please input value a: \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"please input value b: \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"the value of j can't equal to 0\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d/%d=%d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i<span class="token operator">/</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将标准输出流重定向到文件</li>
</ul>
<p>1 表示输出流，默认值，可以不写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator"><span class="token file-descriptor important">1</span>></span> stdout.txt
./a.out <span class="token operator">></span> stdout.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out > stdout.txt</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># cat stdout.txt</span>
please input value i:
please input value j:
<span class="token number">1</span>/1<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将标准输出流追加到文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator"><span class="token file-descriptor important">1</span>>></span> stdout.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将标准输入流重定向到文件</li>
</ul>
<p>文件内容为
stdin.txt</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>8
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>0 表示输入流， 默认值， 可以不写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator">&lt;</span><span class="token number">0</span> stdin.txt
./a.out <span class="token operator">&lt;</span> stdin.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out &lt; stdin.txt</span>
please input value i:
please input value j:
<span class="token number">8</span>/4<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将标准错误流重定向到文件
<ul>
<li><code v-pre>&gt;</code> 会重新写人,覆盖原有内容</li>
<li><code v-pre>&gt;&gt;</code> 表示追加到文件</li>
</ul>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator"><span class="token file-descriptor important">2</span>>></span> stderr.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译并运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># ./a.out 2>> stderr.txt</span>
please input value i:
<span class="token number">1</span>
please input value j:
<span class="token number">0</span>
<span class="token punctuation">[</span>root@VM_0_3_centos less2<span class="token punctuation">]</span><span class="token comment"># cat stderr.txt</span>
the value of j can't equal to <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>输入流、输出流、错误流的重定向</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./a.out <span class="token operator"><span class="token file-descriptor important">1</span>>></span> stdout.txt <span class="token operator"><span class="token file-descriptor important">2</span>>></span> stderr.txt <span class="token operator">&lt;</span><span class="token number">0</span> stdin.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="八、-使用管道打造实用的c语言程序" tabindex="-1"><a class="header-anchor" href="#八、-使用管道打造实用的c语言程序" aria-hidden="true">#</a> 八、 使用管道打造实用的C语言程序</h2>
<h3 id="_8-1-什么是管道" tabindex="-1"><a class="header-anchor" href="#_8-1-什么是管道" aria-hidden="true">#</a> 8.1 什么是管道？</h3>
<p>将前一个命令的输出流, 作为下一个命令的输入流</p>
<p>查看 /etc/ 包含 ab 的文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> /etc/ <span class="token operator">|</span> <span class="token function">grep</span> ab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看是否开启了 ssh 进程</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-2-使用管道计算平均值" tabindex="-1"><a class="header-anchor" href="#_8-2-使用管道计算平均值" aria-hidden="true">#</a> 8.2 使用管道计算平均值</h3>
<p>input.c</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\n"</span><span class="token punctuation">,</span> sum<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>avg.c</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d,%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">float</span> v <span class="token operator">=</span> s <span class="token operator">/</span> n<span class="token punctuation">;</span>
 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"avg = %f\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM_0_3_centos less3<span class="token punctuation">]</span><span class="token comment"># ./input.o | ./avg.o</span>
<span class="token number">5</span>
<span class="token number">98</span>
<span class="token number">0</span>
avg <span class="token operator">=</span> <span class="token number">51.000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
