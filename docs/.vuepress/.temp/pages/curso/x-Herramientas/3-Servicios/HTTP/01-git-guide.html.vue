<template><div><h2 id="一、git-的基本配置" tabindex="-1"><a class="header-anchor" href="#一、git-的基本配置" aria-hidden="true">#</a> 一、git 的基本配置</h2>
<ul>
<li>配置用户信息</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">'your_name'</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">'your_email@domain.com'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>config 的三个作用域</p>
<ul>
<li><code v-pre>--local</code> 只对某个仓库有效</li>
<li><code v-pre>--global</code> 对当前用户所有仓库有效</li>
<li><code v-pre>--system</code> 对系统登录的所有用户有效</li>
</ul>
<p>显示 config 的配置</p>
<ul>
<li><code v-pre>git config --list</code> 系统三个作用域的所有配置信息</li>
<li><code v-pre>git config --list --local</code> 当前仓库的配置信息</li>
<li><code v-pre>git config --list --glocal</code> 当前用户的全局配置信息</li>
<li><code v-pre>git config --list --system</code> 系统登录的所有用户的配置信息</li>
</ul>
<h2 id="二、建-git-仓库" tabindex="-1"><a class="header-anchor" href="#二、建-git-仓库" aria-hidden="true">#</a> 二、建 Git 仓库</h2>
<ul>
<li><code v-pre>git init</code> 把已有的项目代码纳入 Git 管理</li>
<li><code v-pre>git init &lt;name&gt;</code> 新建的项目直接用 Git 管理</li>
</ul>
<h2 id="三、-查看状态" tabindex="-1"><a class="header-anchor" href="#三、-查看状态" aria-hidden="true">#</a> 三、 查看状态</h2>
<p><code v-pre>git status</code></p>
<h2 id="四、添加到暂存区" tabindex="-1"><a class="header-anchor" href="#四、添加到暂存区" aria-hidden="true">#</a> 四、添加到暂存区</h2>
<ul>
<li><code v-pre>git add &lt;file&gt;...</code> 指定添加文件</li>
<li><code v-pre>git add .</code> 将工作区的修改全部添加到暂存区</li>
<li><code v-pre>git add -u</code> 将工作区被 git 管控的文件提交到暂存区</li>
</ul>
<h2 id="三、-提交版本记录" tabindex="-1"><a class="header-anchor" href="#三、-提交版本记录" aria-hidden="true">#</a> 三、 提交版本记录</h2>
<ul>
<li><code v-pre>git commit -m '&lt;message&gt;'</code> 将暂存区的内容提交到版本记录</li>
<li><code v-pre>git commit -am '&lt;message&gt;'</code> 将工作区的内容直接提交到版本记录</li>
</ul>
<h2 id="三、理解工作目录、暂存区和版本记录" tabindex="-1"><a class="header-anchor" href="#三、理解工作目录、暂存区和版本记录" aria-hidden="true">#</a> 三、理解工作目录、暂存区和版本记录</h2>
<p>示意图：</p>
<p><img src="https://upload-images.jianshu.io/upload_images/12493822-9cdc882237743986.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="git_flow.jpg" loading="lazy"></p>
<h2 id="四、-重命名的便捷方法" tabindex="-1"><a class="header-anchor" href="#四、-重命名的便捷方法" aria-hidden="true">#</a> 四、 重命名的便捷方法</h2>
<p><code v-pre>git mv &lt;file&gt; &lt;new file&gt;</code></p>
<h2 id="五、-查看历史版本" tabindex="-1"><a class="header-anchor" href="#五、-查看历史版本" aria-hidden="true">#</a> 五、 查看历史版本</h2>
<ul>
<li><code v-pre>git log</code> # 查看当前分支历史版本的详细信息</li>
<li><code v-pre>git log --oneline</code> # 单行模式查看</li>
<li><code v-pre>git log -n2</code> # 查看最近2个历史版本</li>
<li><code v-pre>git log -2</code> # 查看最近2个历史版本</li>
<li><code v-pre>git log -n2 --oneline</code> # 单行模式显示最近两个历史版本</li>
<li><code v-pre>git log --all --graph</code> # 图形化的结构查看历史版本</li>
<li><code v-pre>git log --all --online -n4 --graph</code> # 查看所有分支最近4条历史版本，并用图形化的结构显示</li>
<li><code v-pre>git help --web log</code> # 使用浏览器打开 git log 命令的使用手册</li>
</ul>
<h2 id="六、-图形界面" tabindex="-1"><a class="header-anchor" href="#六、-图形界面" aria-hidden="true">#</a> 六、 图形界面</h2>
<ul>
<li><code v-pre>gitk</code> 打开当前分支的图形化管理工具</li>
<li><code v-pre>gitk --all</code> 打开所有分支的图形化管理工具</li>
</ul>
<h2 id="七、查看分支信息" tabindex="-1"><a class="header-anchor" href="#七、查看分支信息" aria-hidden="true">#</a> 七、查看分支信息</h2>
<ul>
<li><code v-pre>git branch -v</code> # 查看本地的分支</li>
</ul>
<h2 id="八、新建和切换分支" tabindex="-1"><a class="header-anchor" href="#八、新建和切换分支" aria-hidden="true">#</a> 八、新建和切换分支</h2>
<ul>
<li><code v-pre>git checkout &lt;branch&gt;</code> 切换分支</li>
<li><code v-pre>git checkout &lt;new branch&gt; &lt;branch&gt;</code> # 基于分支创建新分支, 实际上就是基于该分支的HEAD的版本号创建新分支</li>
<li><code v-pre>git checkout -b &lt;branch name&gt;</code> # 基于当前分支的HEAD创建分支</li>
<li><code v-pre>git checkout -b &lt;branch name&gt; &lt;version&gt;</code> # 基于版本号创建分支</li>
</ul>
<h2 id="九、-分离头指针" tabindex="-1"><a class="header-anchor" href="#九、-分离头指针" aria-hidden="true">#</a> 九、 分离头指针</h2>
<ul>
<li><code v-pre>git checkout &lt;version&gt;</code> 再分离头指针状态下的修改和提交，切换到其它分支时都不会保留</li>
</ul>
<h2 id="十、-git-目录介绍" tabindex="-1"><a class="header-anchor" href="#十、-git-目录介绍" aria-hidden="true">#</a> 十、.git 目录介绍</h2>
<ul>
<li>
<p><code v-pre>.git/objects/</code> 存放 <code v-pre>commit</code>,<code v-pre>tree</code>,<code v-pre>blob</code>的提交记录</p>
</li>
<li>
<p><code v-pre>.git/HEAD</code> 文件中保存着当前工作的分支</p>
</li>
<li>
<p><code v-pre>.git/config</code> 是 <code v-pre>git</code> 仓库的配置文件</p>
</li>
<li>
<p><code v-pre>.git/refs/</code> 文件夹保存中分支、标签的引用信息</p>
<ul>
<li><code v-pre>.git/refs/heads/</code> 保存所有分支的引用信息</li>
<li><code v-pre>.git/refs/tags/</code> 保存所有标签的引用信息</li>
</ul>
</li>
</ul>
<h2 id="十一、查看版本号的类型和内容" tabindex="-1"><a class="header-anchor" href="#十一、查看版本号的类型和内容" aria-hidden="true">#</a> 十一、查看版本号的类型和内容</h2>
<p>git 中版本号有三种类型</p>
<ul>
<li>
<p>commit 版本类型</p>
</li>
<li>
<p>tree 一次版本提交的内容， 目录， 都对应 tree 类型</p>
</li>
<li>
<p>blob 文件类型</p>
</li>
<li>
<p><code v-pre>git cat-file -t &lt;version&gt;</code> 查看版本号的类型</p>
</li>
<li>
<p><code v-pre>git cat-file -p &lt;version&gt;</code> 查看版本号的内容</p>
</li>
</ul>
<h2 id="十二、-头指针" tabindex="-1"><a class="header-anchor" href="#十二、-头指针" aria-hidden="true">#</a> 十二、 头指针</h2>
<p>关键字 <code v-pre>HEAD</code> 指向当前分支的最后一次提交记录的版本号</p>
<ul>
<li><code v-pre>HEAD^</code>, <code v-pre>HEAD^1</code>, <code v-pre>HEAD~1</code> 指向头指针的上一次提交</li>
<li><code v-pre>HEAD^^</code>, <code v-pre>HEAD^1^1</code>, <code v-pre>HEAD~2</code> 指向头指针的前两次提交</li>
</ul>
<h2 id="十三、-删除分支" tabindex="-1"><a class="header-anchor" href="#十三、-删除分支" aria-hidden="true">#</a> 十三、 删除分支</h2>
<ul>
<li><code v-pre>git branch -d &lt;branch&gt;</code> 删除分支命令</li>
<li><code v-pre>git branch -D &lt;branch&gt;</code> <code v-pre>-d</code> 参数没能删除成功时，要使用 <code v-pre>-D</code> 参数</li>
</ul>
</div></template>
