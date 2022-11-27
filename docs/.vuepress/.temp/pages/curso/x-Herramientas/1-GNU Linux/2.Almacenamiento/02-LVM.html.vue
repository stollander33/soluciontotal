<template><div><h2 id="discos-y-particiones" tabindex="-1"><a class="header-anchor" href="#discos-y-particiones" aria-hidden="true">#</a> Discos y particiones</h2>
<h3 id="listar-los-discos-disponibles" tabindex="-1"><a class="header-anchor" href="#listar-los-discos-disponibles" aria-hidden="true">#</a> Listar los discos disponibles</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Isblk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="crear-particiones-necesarias" tabindex="-1"><a class="header-anchor" href="#crear-particiones-necesarias" aria-hidden="true">#</a> Crear particiones necesarias</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">fdisk</span> /dev/<span class="token punctuation">(</span>nombre_disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="creacion-del-volumen-fisico" tabindex="-1"><a class="header-anchor" href="#creacion-del-volumen-fisico" aria-hidden="true">#</a> Creación del volumen fisico</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pvcreate /dev/<span class="token punctuation">(</span>nombre_disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="creacion-del-grupo-de-volumen" tabindex="-1"><a class="header-anchor" href="#creacion-del-grupo-de-volumen" aria-hidden="true">#</a> Creación del grupo de volumen</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vgcreate VG_<span class="token punctuation">(</span>nombre_grupo<span class="token punctuation">)</span> /dev/<span class="token punctuation">(</span>nombre_disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="crear-el-volumen-ldgico" tabindex="-1"><a class="header-anchor" href="#crear-el-volumen-ldgico" aria-hidden="true">#</a> Crear el volumen ldgico</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Ivcreate <span class="token parameter variable">-L</span> <span class="token punctuation">(</span>tamano<span class="token punctuation">)</span>G <span class="token parameter variable">-n</span> LV_<span class="token punctuation">(</span>nombre_volumen<span class="token punctuation">)</span> VG_<span class="token punctuation">(</span>nombre_grupo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="asignar-un-tipo-de-sistema-de-archivos" tabindex="-1"><a class="header-anchor" href="#asignar-un-tipo-de-sistema-de-archivos" aria-hidden="true">#</a> Asignar un tipo de sistema de archivos:</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkfs</span> <span class="token parameter variable">-t</span> <span class="token punctuation">(</span>sistema_archivos<span class="token punctuation">)</span> /dev/mapper/VG_<span class="token punctuation">(</span>nombre_grupo<span class="token punctuation">)</span>- LV_<span class="token punctuation">(</span>nombre_volumen<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="montaje-de-los-discos" tabindex="-1"><a class="header-anchor" href="#montaje-de-los-discos" aria-hidden="true">#</a> Montaje de los discos</h3>
<ul>
<li>Crear el punto de montaje donde deseemos.</li>
</ul>
<h4 id="montar-de-forma-temporal-el-volumen-ldgico" tabindex="-1"><a class="header-anchor" href="#montar-de-forma-temporal-el-volumen-ldgico" aria-hidden="true">#</a> Montar de forma temporal el volumen ldgico:</h4>
<p>mount /dev/mapper/VG_(nombre del grupo)-LV_(nombre del
volumen) (punto de montaje)</p>
<h4 id="montar-de-forma-permanente-el-volumen-idgico" tabindex="-1"><a class="header-anchor" href="#montar-de-forma-permanente-el-volumen-idgico" aria-hidden="true">#</a> Montar de forma permanente el volumen Idgico:</h4>
<blockquote>
<p>Crear una copia de trabajo para restablecer el fstab en caso de
error:</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /etc/fstab /etc/BK_fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Enviamos el UUID del volumen ldgico al fstab para su montaje
definitivo:</li>
</ul>
<p>blkid /dev/VG_(nombre del grupo)-LV_(nombre del
volumen) &gt;&gt; /etc/fstab</p>
<ul>
<li>Editaremos el fstab para que quede asi:</li>
</ul>
<p>UUID=335a5e5e-42af-4dcd-a31e-b463e8491dd2 (punto de montaje) (sistema de archivos) defaults 00</p>
<ul>
<li>Comprobamos que el fstab no tenga errores usando el comando
mount -a
Creamos los usuarios para el NFS y les asignamos una contrasena en
/home usando el comando adduser.</li>
</ul>
<p>Listamos los directorios &quot;home&quot; de los usuarios.</p>
<p>Movemos el directorio &quot;home&quot; de cada usuario del NFS al punto de
montaje.</p>
</div></template>
