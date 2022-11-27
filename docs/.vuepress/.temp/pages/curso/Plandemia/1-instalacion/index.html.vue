<template><div><h2 id="instalando-con-tutor" tabindex="-1"><a class="header-anchor" href="#instalando-con-tutor" aria-hidden="true">#</a> Instalando con Tutor</h2>
<p>Tutor es la distribución oficial de <strong>Open edX</strong> basada en <strong>Docker</strong> , tanto para producción como para desarrollo local.</p>
<p>El objetivo de Tutor es facilitar la implementación, personalización, actualización y escala de Open edX. Tutor es confiable, rápido, extensible y ya se usa para implementar cientos de plataformas Open edX en todo el mundo.</p>
<h2 id="instalar-tutor-con-pip" tabindex="-1"><a class="header-anchor" href="#instalar-tutor-con-pip" aria-hidden="true">#</a> Instalar Tutor con pip</h2>
<ol>
<li>Instale la última versión estable de Tutor desde pip:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token string">"tutor[full]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Ejecutar Tutor</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tutor <span class="token builtin class-name">local</span> quickstart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">instalación local</p>
<p>En la instalación se configuran los siguiente dominios</p>
<blockquote>
<p>LMS_HOST = <a href="http://local.overhang.io" target="_blank" rel="noopener noreferrer">local.overhang.io<ExternalLinkIcon/></a>
CMS_HOST = <a href="http://studio.local.overhang.io" target="_blank" rel="noopener noreferrer">studio.local.overhang.io<ExternalLinkIcon/></a>
ENABLE_HTTPS = False</p>
</blockquote>
<ul>
<li>Añadir los hosts al fichero <strong>/etc/hosts</strong></li>
</ul>
</div>
</div></template>
