<template><div><h1 id="descripcion" tabindex="-1"><a class="header-anchor" href="#descripcion" aria-hidden="true">#</a> Descripción</h1>
<p>SPARTA es una aplicación GUI de Python que simplifica las pruebas de penetración de la infraestructura de red al ayudar al probador de penetración en la fase de escaneo y enumeración.</p>
<p>Le permite al evaluador ahorrar tiempo al tener acceso de apuntar y hacer clic a su kit de herramientas y al mostrar todos los resultados de la herramienta de una manera conveniente. Si se dedica poco tiempo a configurar comandos y herramientas, se puede dedicar más tiempo a analizar los resultados.</p>
<p>A pesar de las capacidades de automatización, los comandos y herramientas utilizados son totalmente personalizables ya que cada probador tiene sus propios métodos, hábitos y preferencias.</p>
<h1 id="requisitos" tabindex="-1"><a class="header-anchor" href="#requisitos" aria-hidden="true">#</a> Requisitos</h1>
<p>Se recomienda utilizar <strong>Kali Linux</strong>, ya que tiene instaladas la mayoría de las herramientas; sin embargo, lo más probable es que SPARTA también funcione en sistemas basados ​​en Debian.</p>
<blockquote>
<p>Nosotros intentaremos hacer que funcione en Fedora 😃</p>
</blockquote>
<Tabs :data='[{"title":"Kali/Debian"},{"title":"centos"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> python3-sqlalchemy python3-pyqt5 wkhtmltopdf <span class="token punctuation">\</span>
    ldap-utils rwho rsh-client x11-apps finger <span class="token punctuation">\</span> 
    nmap hydra <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p>todo</p>
</template>
</Tabs>
<h1 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/share/
<span class="token function">git</span> clone https://github.com/secforce/sparta.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Para disponer de sparta como comando, daremos <strong>permisos de ejecución</strong> y crearemos un enlace simbolico en <strong>/usr/bin/sparta</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/share/sparta/sparta
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/sparta/sparta /usr/bin/sparta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
