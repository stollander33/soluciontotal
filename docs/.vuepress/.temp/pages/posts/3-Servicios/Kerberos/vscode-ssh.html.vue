<template><div><h2 id="一、安装-remote-ssh-插件" tabindex="-1"><a class="header-anchor" href="#一、安装-remote-ssh-插件" aria-hidden="true">#</a> 一、安装 Remote-SSH 插件</h2>
<ul>
<li>在插件市场，找到 <code v-pre>Remote-SSH</code> 并安装</li>
<li>安装成功后，会在左侧功能区多出一个功能选项</li>
</ul>
<h2 id="二、remote-ssh-配置" tabindex="-1"><a class="header-anchor" href="#二、remote-ssh-配置" aria-hidden="true">#</a> 二、Remote-SSH 配置</h2>
<ul>
<li>进入功能选项，点击 <code v-pre>configure</code>（小齿轮）</li>
<li>选择 <code v-pre>C:\Users\administrator\.ssh\config</code></li>
<li>添加配置项
<ul>
<li>Host 连接的别名</li>
<li>User 登录远程服务的用户名</li>
<li>Hostname 远程 IP 地址， 填写自己的 IP 地址</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Host 腾讯云
User root
Hostname 192.168.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>添加完配置后，会在左侧连接列表中多出一个连接项</li>
<li>点击连接项右侧的 <code v-pre>Connect to Host in New Window</code> 会重新打开一个新的 vscode 进程</li>
<li>在新打开的 vscode 界面中，会有一个选择项，选择 <code v-pre>Linux</code></li>
<li>接着需要输入云服务器的的密码，这样就可以连接上远程主机了</li>
<li>在左侧目录区，点击 <code v-pre>打开文件夹</code> 可以选择要使用 vscode 编辑的目录，但是还需要重新输入密码</li>
</ul>
<h2 id="三、免密登录" tabindex="-1"><a class="header-anchor" href="#三、免密登录" aria-hidden="true">#</a> 三、免密登录</h2>
<ul>
<li>使用管理员身份打开 <code v-pre>PowerShell</code></li>
<li>进入用户根目录<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><code v-pre>ssh-keygen</code> 生成本地私钥和公钥 , 一路回车即可</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>进入 .shh 目录<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> .ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>将公钥上传到远程服务器, 运行以下命令，并输入密码，注意 填写自己 IP 地址</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">scp</span> .<span class="token punctuation">\</span>id_rsa.pub root@118.24.109.123:/root/.ssh/pubkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>xshell</code> 或其它工具登录远程服务器，将<code v-pre>id_rsa.pub</code>公钥的内容, 追加到<code v-pre>authorized_keys</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/.ssh/
<span class="token function">cat</span> pubkey <span class="token operator">>></span> authorized_keys
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> pubkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，以后使用本机<code v-pre>vscode</code>的<code v-pre>Remote-SSH</code>插件连接该云服务器时，就不需要输入密码了！</p>
<h2 id="四、使用-git-自带的-ssh" tabindex="-1"><a class="header-anchor" href="#四、使用-git-自带的-ssh" aria-hidden="true">#</a> 四、使用 git 自带的 ssh</h2>
<p>打开 cmd, 查看 ssh 版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示的版本为： <code v-pre>OpenSSH_for_Windows_7.7p1</code></p>
<p>配置系统环境变量
将 <code v-pre>C:\Program Files\Git\usr\bin</code> 添加到环境变量，并置于 <code v-pre>C:\Windows\System32\OpenSSH\</code> 前面</p>
<p>重新打开 cmd 查看 ssh 版本, 修改后的版本为： <code v-pre>OpenSSH_8.0p1</code></p>
</div></template>
