<template><div><h2 id="一、-比较暂存区和head的文件差异" tabindex="-1"><a class="header-anchor" href="#一、-比较暂存区和head的文件差异" aria-hidden="true">#</a> 一、 比较暂存区和HEAD的文件差异</h2>
<p><code v-pre>git diff --cached</code></p>
<h2 id="二、-比较工作区和暂存区的文件差异" tabindex="-1"><a class="header-anchor" href="#二、-比较工作区和暂存区的文件差异" aria-hidden="true">#</a> 二、 比较工作区和暂存区的文件差异</h2>
<p><code v-pre>git diff</code></p>
<p>指定文件进行差异对比</p>
<p><code v-pre>git diff -- &lt;file&gt;...</code></p>
<h2 id="三、撤销暂存区的所有提交并恢复到工作区" tabindex="-1"><a class="header-anchor" href="#三、撤销暂存区的所有提交并恢复到工作区" aria-hidden="true">#</a> 三、撤销暂存区的所有提交并恢复到工作区</h2>
<p><code v-pre>git reset HEAD</code></p>
<h2 id="四、让暂存区的提交恢复到工作区" tabindex="-1"><a class="header-anchor" href="#四、让暂存区的提交恢复到工作区" aria-hidden="true">#</a> 四、让暂存区的提交恢复到工作区</h2>
<p><code v-pre>git checkout -- &lt;file&gt;...</code></p>
<h2 id="五、撤销暂存区的提交" tabindex="-1"><a class="header-anchor" href="#五、撤销暂存区的提交" aria-hidden="true">#</a> 五、撤销暂存区的提交</h2>
<ul>
<li>
<p><code v-pre>git restore --staged &lt;file&gt;...</code></p>
</li>
<li>
<p><code v-pre>git reset HEAD &lt;file&gt;...</code></p>
</li>
</ul>
<h2 id="六、撤销工作区的修改" tabindex="-1"><a class="header-anchor" href="#六、撤销工作区的修改" aria-hidden="true">#</a> 六、撤销工作区的修改</h2>
<p><code v-pre>git restore &lt;file&gt;...</code></p>
<h2 id="七、撤销最近的几次提交" tabindex="-1"><a class="header-anchor" href="#七、撤销最近的几次提交" aria-hidden="true">#</a> 七、撤销最近的几次提交</h2>
<p><code v-pre>git reset --hard &lt;hashId&gt;</code> 将头指针移到指定的 commit</p>
<h2 id="八、不同提交的指定文件的对比" tabindex="-1"><a class="header-anchor" href="#八、不同提交的指定文件的对比" aria-hidden="true">#</a> 八、不同提交的指定文件的对比</h2>
<ul>
<li><code v-pre>git diff &lt;branch&gt; &lt;other branch&gt;</code> 比较两个分支所有文件的差异</li>
<li><code v-pre>git diff &lt;branch&gt; &lt;other branch&gt; -- &lt;file&gt;...</code> 比较两个分支指定文件的差异</li>
<li><code v-pre>git diff &lt;commit ID&gt; &lt;other commit ID&gt; -- &lt;file&gt;...</code> 比较两个不同提交指定文件的差异</li>
</ul>
<h2 id="九、使用-git-删除文件" tabindex="-1"><a class="header-anchor" href="#九、使用-git-删除文件" aria-hidden="true">#</a> 九、使用 git 删除文件</h2>
<p><code v-pre>git rm &lt;file&gt;...</code></p>
<h2 id="十、临时处理其它任务的情况" tabindex="-1"><a class="header-anchor" href="#十、临时处理其它任务的情况" aria-hidden="true">#</a> 十、临时处理其它任务的情况</h2>
<p><code v-pre>git stash</code> 存放当前状态
<code v-pre>git stash list</code> 查看存放的状态
<code v-pre>git status</code> 查看工作区和暂存区的状态，执行了上面的命令后，此刻是干净的
<code v-pre>git stash apply</code> 干完其它事情后，恢复到之前存放的状态, 但不删除stash 堆栈中的记录
<code v-pre>git stash list</code> 还能看到之前存放的记录
<code v-pre>git reset --hard HEAD</code> 将工作区和暂存区清空
<code v-pre>git stash pop</code> 恢复到之前存放的状态, 并删除stash 堆栈中的记录
<code v-pre>git stash list</code> 现在看不到之前保存的记录了</p>
<h2 id="十一、创建仓库与备份" tabindex="-1"><a class="header-anchor" href="#十一、创建仓库与备份" aria-hidden="true">#</a> 十一、创建仓库与备份</h2>
<ul>
<li>
<p><code v-pre>git clone --bare &lt;/path/to/repo.git&gt;</code> 基于哑协议创建仓库</p>
</li>
<li>
<p><code v-pre>git clone --bare &lt;file:///path/to/repo.git&gt;</code> 基于智能协议创建仓库</p>
</li>
<li>
<p><code v-pre>git remote add &lt;repo name&gt; &lt;url&gt;</code> 添加远程仓库 url 格式根据传输协议进行配置</p>
</li>
<li>
<p><code v-pre>git push --set-upstream &lt;repo name&gt; &lt;branch&gt;</code> 将本地仓库备份到远程仓库</p>
</li>
</ul>
<h2 id="十二、修改最新的提交信息" tabindex="-1"><a class="header-anchor" href="#十二、修改最新的提交信息" aria-hidden="true">#</a> 十二、修改最新的提交信息</h2>
<p><code v-pre>git commit --amend</code></p>
<h2 id="十三、修改老旧的-commit-的提交信息" tabindex="-1"><a class="header-anchor" href="#十三、修改老旧的-commit-的提交信息" aria-hidden="true">#</a> 十三、修改老旧的 commit 的提交信息</h2>
<ul>
<li><code v-pre>git rebase -i &lt;parent version&gt;</code>, 在交互界面使用 <code v-pre>reword</code> 关键字进行指定操作</li>
</ul>
<h2 id="十四、-把连续多个-commit-集成为一个-commit" tabindex="-1"><a class="header-anchor" href="#十四、-把连续多个-commit-集成为一个-commit" aria-hidden="true">#</a> 十四、 把连续多个 commit 集成为一个 commit</h2>
<ul>
<li><code v-pre>git rebase -i &lt;parent version&gt;</code>, 在交互界面使用 <code v-pre>squash</code> 关键字进行指定操作</li>
</ul>
<h2 id="十五、把间隔的几个-commit-合成一个-commit" tabindex="-1"><a class="header-anchor" href="#十五、把间隔的几个-commit-合成一个-commit" aria-hidden="true">#</a> 十五、把间隔的几个 commit 合成一个 commit</h2>
<ul>
<li><code v-pre>git rebase -i &lt;parent version&gt;</code>, 在交互界面, 将间隔的几个commit移动到一起， 使用 <code v-pre>squash</code> 关键字进行指定操作</li>
<li><code v-pre>git rebase --continue</code> 间隔的几个 commit 合并在指定操作后, 需要接着运行这条命令继续进行合并</li>
</ul>
</div></template>
