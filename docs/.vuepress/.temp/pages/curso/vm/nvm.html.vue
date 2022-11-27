<template><div><h1 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h1>
<p>Para instalar o uptualizar <strong>nvm</strong>, debes de ejecutar el script de instalación.</p>
<p>Para esto deberas descargarlo manualmente o utlizar uno de los <strong>siguientes comandos</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">¿que hace el script?</p>
<p>El script clona el repositorio de nvm en <strong>~/.nvm</strong>, y añade unas lineas en los archivos de configuracion del usuario (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).</p>
</div>
<ul>
<li>Para activar nvm deberas ejecutar:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Para comprobar que todo esta funcionando, comprobaremos la version instalada</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm <span class="token parameter variable">--version</span>
<span class="token number">0.39</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Instalaremos una versión de Node</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y lo comprobamos:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
v16.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
