<template><div><h1 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h1>
<Tabs :data='[{"title":"Debian/Ubuntu"},{"title":"RHEL / Fedora / CentOS"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<ul>
<li>Obtenemos el paquete desde la página de Visual Code</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://az764295.vo.msecnd.net/stable/74b1f979648cc44d385a2286793c226e611f59e7/code_1.71.2-1663191218_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Instalamos el paquete</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> code_1.71.2-1663191218_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p>We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:</p>
<ul>
<li>importamos la key del repositorio</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://packages.microsoft.com/keys/microsoft.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>creamos la entrada del repositorio</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Actualizamos el cache de los repositorios e instalamos el paquete usando <strong>dnf</strong> (Fedora 22 y superiores):</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>dnf check-update
<span class="token function">sudo</span> dnf <span class="token function">install</span> code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>O versiones más viejas usando  <strong>yum</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum check-update
<span class="token function">sudo</span> yum <span class="token function">install</span> code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>
