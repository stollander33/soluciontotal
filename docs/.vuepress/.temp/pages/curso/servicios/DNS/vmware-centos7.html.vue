<template><div><h2 id="vmware-的下载、安装、配置" tabindex="-1"><a class="header-anchor" href="#vmware-的下载、安装、配置" aria-hidden="true">#</a> VMware 的下载、安装、配置</h2>
<h3 id="下载-vmware" tabindex="-1"><a class="header-anchor" href="#下载-vmware" aria-hidden="true">#</a> 下载 VMware</h3>
<p>链接：<a href="https://pan.baidu.com/s/1kPGm7yeIG7eTGjPyJzZdaw" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1kPGm7yeIG7eTGjPyJzZdaw<ExternalLinkIcon/></a>
提取码：degt
复制这段内容后打开百度网盘手机App，操作更方便哦</p>
<h3 id="安装及破解" tabindex="-1"><a class="header-anchor" href="#安装及破解" aria-hidden="true">#</a> 安装及破解</h3>
<ul>
<li>安装过程很简单，根据提示进行安装即可</li>
<li>安装完成，通过破解工具生成秘钥</li>
<li>VMware 帮助-&gt; 注册 把秘钥粘贴进去即可</li>
</ul>
<h3 id="vmware-配置" tabindex="-1"><a class="header-anchor" href="#vmware-配置" aria-hidden="true">#</a> Vmware 配置</h3>
<ol>
<li>VMware 的虚拟网络配置</li>
</ol>
<ul>
<li>VMware工具栏 -&gt; 编辑</li>
<li>-&gt; 虚拟网络编辑器</li>
<li>-&gt; 更改设置</li>
<li>-&gt; 点击VMnet8,查看&quot;子网IP&quot;是否与本机的 ip 匹配</li>
<li>如本机 ip 为 192.168.31.128 那么 VMnet8的子网 IP 应该为 192.168.31.0</li>
</ul>
<ol start="2">
<li>VMnet8网卡配置 （远程连接和SSH）</li>
</ol>
<ul>
<li>控制面板</li>
<li>网络和Internet</li>
<li>网络和共享中心</li>
<li>更改适配器设置</li>
<li>找到 VMnet8 网卡，右键属性</li>
<li>在 “网络” 面板里，勾选 VMware Bridge Protocol</li>
<li>双击 Internet 协议版本 4(TCP/IPv4)</li>
<li>选择 “自动获得IP地址”</li>
<li>选择 “自动获得 DNS 服务器地址”</li>
<li>确定，回到 “网络” 面板</li>
<li>点击 “共享”</li>
<li>勾选 允许其他网路用户通过此计算机的 Internet 连接来连接</li>
</ul>
<h2 id="centos-的下载、安装、配置" tabindex="-1"><a class="header-anchor" href="#centos-的下载、安装、配置" aria-hidden="true">#</a> centOS 的下载、安装、配置</h2>
<h3 id="centos下载" tabindex="-1"><a class="header-anchor" href="#centos下载" aria-hidden="true">#</a> centOS下载</h3>
<p>国内，可以使用 阿里云镜像 或 网易镜像 下载 centOS系统镜像</p>
<p>阿里云 centOS7 镜像地址：<br>
<code v-pre>https://mirrors.aliyun.com/centOS/</code><br>
找到自己想要版本进行下载即可</p>
<h3 id="新建虚拟机" tabindex="-1"><a class="header-anchor" href="#新建虚拟机" aria-hidden="true">#</a> 新建虚拟机</h3>
<ol>
<li>创建新的虚拟机引导</li>
</ol>
<ul>
<li>选择 “典型（推荐）”</li>
<li>稍后安装操作系统</li>
<li>客户机操作系统选择 “Linux”， 版本选择 &quot;CentOS 7 64位&quot;</li>
<li>虚拟机名称填写，安装位置选择</li>
<li>设置最大磁盘大小， 选择 “将虚拟磁盘拆分成多个文件”</li>
</ul>
<ol start="2">
<li>虚拟机设置</li>
</ol>
<ul>
<li>“内存”根据实际情况分配</li>
<li>“处理器” 根据实际情况分配</li>
<li>&quot;CD/DVD(IDE)&quot; 配置
<ul>
<li>选择 “使用 ISO 映像文件”</li>
<li>“浏览” 找到下载好的 CentOS 镜像文件</li>
</ul>
</li>
<li>“网络适配器”
<ul>
<li>“NAT 模式(N): 用于共享主机的IP地址”</li>
</ul>
</li>
<li>&quot;USB 控制器&quot; 移除</li>
<li>“声卡” 移除</li>
<li>“打印机” 移除</li>
<li>“显示器” 默认</li>
</ul>
<h3 id="安装-centos" tabindex="-1"><a class="header-anchor" href="#安装-centos" aria-hidden="true">#</a> 安装 CentOS</h3>
<ul>
<li>启动此虚拟机</li>
<li>上下方向键选择 “Install CentOS 7”</li>
<li>选择安装过程中的语言 &quot;English&quot; -&gt; &quot;Continue&quot;</li>
<li>&quot;SOFTWARE SELECTION&quot;
<ul>
<li>“Base Environment” 选择 “GNOME Desktop”</li>
<li>&quot;Add-Ons for Selected Environment&quot; 选择 “Development Tools”</li>
<li>&quot;Done&quot;</li>
</ul>
</li>
<li>&quot;INSTALLATION DESTINATION&quot;
<ul>
<li>进去后点击 &quot;Done&quot; 即可</li>
</ul>
</li>
<li>“NETWORK &amp; HOST NAME”
<ul>
<li>开启 “Ethernet(en32)”</li>
<li>点击 “configure”
<ul>
<li>选择 “General”</li>
<li>勾选 “Automatically connect to this network when it avaliable”</li>
<li>&quot;save&quot;</li>
<li>&quot;Done&quot;</li>
</ul>
</li>
</ul>
</li>
<li>&quot;Begin Installation&quot;</li>
<li>“ROOTPASSWORD”
<ul>
<li>设置 root 账号的密码， 大于等于6位即可，没有规则</li>
<li>“Done”</li>
</ul>
</li>
<li>“USER CREATION”
<ul>
<li>填写 “Full name” &quot;User name&quot;</li>
<li>勾选 “Make this user administrator”</li>
<li>填写密码有规则，包含大写字符小写字符数字</li>
<li>“Done”</li>
</ul>
</li>
<li>等待...</li>
<li>&quot;Reboot&quot;</li>
<li>&quot;LICENSE INFORMATION&quot;
<ul>
<li>勾选 &quot;I accept license agreement&quot;</li>
<li>&quot;Done&quot;</li>
</ul>
</li>
<li>&quot;FINISH CONFIGURATION&quot;</li>
</ul>
<h2 id="centos-配置" tabindex="-1"><a class="header-anchor" href="#centos-配置" aria-hidden="true">#</a> CentOS 配置</h2>
<h3 id="初始化设置" tabindex="-1"><a class="header-anchor" href="#初始化设置" aria-hidden="true">#</a> 初始化设置</h3>
<ul>
<li>输入用户密码登录</li>
<li>选择系统语言 “English” -&gt; Next</li>
<li>选择键盘风格 “English(US)” -&gt; Next</li>
<li>&quot;Privacy&quot; 默认 -&gt; Next</li>
<li>&quot;Connect Your Online Accounts&quot; 默认 -&gt; Skip</li>
<li>&quot;Start Using CentOS Linux&quot;</li>
</ul>
<h3 id="系统设置" tabindex="-1"><a class="header-anchor" href="#系统设置" aria-hidden="true">#</a> 系统设置</h3>
<ol>
<li>永不锁屏</li>
</ol>
<ul>
<li>点击 “Applications”</li>
<li>&quot;System Tools&quot; -&gt; “Settings”</li>
<li>-&gt; &quot;Privacy&quot;</li>
<li>-&gt; &quot;Screen Lock&quot; -&gt; &quot;Off&quot;</li>
</ul>
<ol start="2">
<li>永不息屏</li>
</ol>
<ul>
<li>点击 “Applications”</li>
<li>&quot;System Tools&quot; -&gt; “Settings”</li>
<li>-&gt; &quot;Power&quot;</li>
<li>-&gt; &quot;Blank screen&quot; -&gt; &quot;Never&quot;</li>
</ul>
<ol start="3">
<li>自动识别时区</li>
</ol>
<ul>
<li>点击 “Applications”</li>
<li>&quot;System Tools&quot; -&gt; “Settings”</li>
<li>-&gt; &quot;Details&quot;</li>
<li>-&gt; &quot;Date &amp; Time&quot;</li>
<li>-&gt; &quot;Automatic Time Zone&quot; -&gt; &quot;ON&quot;</li>
</ul>
<ol start="4">
<li>免密登录</li>
</ol>
<ul>
<li>点击 “Applications”</li>
<li>&quot;System Tools&quot; -&gt; “Settings”</li>
<li>-&gt; &quot;Details&quot;</li>
<li>-&gt; &quot;Users&quot;</li>
<li>-&gt; &quot;Unlock&quot;</li>
<li>-&gt; 输入用户密码</li>
<li>-&gt; &quot;Authenticate&quot;</li>
<li>&quot;Automatic Login&quot; -&gt; &quot;ON&quot;</li>
</ul>
<ol start="5">
<li>关机后，移除虚拟机设置中的 &quot;CD/DVD(IDE)&quot;</li>
</ol>
</div></template>
