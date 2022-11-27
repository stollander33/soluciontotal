<template><div><p>En la gestión de discos, hay varios conceptos que son imprescindibles y es necesario conocer:</p>
<h2 id="particionado" tabindex="-1"><a class="header-anchor" href="#particionado" aria-hidden="true">#</a> Particionado</h2>
<ul>
<li><strong>fdisk</strong> es el comando utilizado para gestionar los discos y sus particiones:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">fdisk</span> /dev/nombre_del_disco
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="formatear" tabindex="-1"><a class="header-anchor" href="#formatear" aria-hidden="true">#</a> Formatear</h2>
<ul>
<li>Antes de poder utilizar una partición, es imprescindible darle un formato:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext4 /dev/nombre_particion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="montaje" tabindex="-1"><a class="header-anchor" href="#montaje" aria-hidden="true">#</a> Montaje</h2>
<ul>
<li>Para poder utilizar una partición, tambien debemos de utilizar un <strong>punto de montaje</strong></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> /dev/nombre_particion  /mnt/carpeta_montaje
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="montaje-definitivo" tabindex="-1"><a class="header-anchor" href="#montaje-definitivo" aria-hidden="true">#</a> Montaje definitivo</h2>
<p>Para que una partición sea <strong>montada en el arranque</strong>, debemos de añardirla dentro del archivo <strong>/etc/fstab</strong></p>
<div class="custom-container warning"><p class="custom-container-title">Precaución</p>
<p>Es muy recomendable, realizar una copia del archivo /etc/fstab, antes de realizar ningún cambio.
Si este archivo es incorrecto, podríamos causar que el sistema no arranque.</p>
</div>
<p>Cada linea de este archivo representa una partición</p>
<p>El formato de cada linea tiene lla forma</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># [particion/uuid]                      [montaje] [tipo_archivos] [opciones]</span>
/dev/sda1                                 /boot   ext4           defaults <span class="token number">1</span> <span class="token number">2</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>a0ce42a2-57ea-4f50-9782-116b88855e19 /home   btrfs          <span class="token assign-left variable">subvol</span><span class="token operator">=</span>home,compress<span class="token operator">=</span>zstd:1 <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Es recomendable utilizar el UUID, ya que la numeración de los discos podría cambiar.</p>
</li>
<li>
<p>Para obtener el uuid de una partición</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">sudo</span> blkid /dev/vda1

/dev/vda1: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">"58145b6f-514e-496d-9ed8-feaec2286603"</span> <span class="token assign-left variable">BLOCK_SIZE</span><span class="token operator">=</span><span class="token string">"4096"</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">"ext4"</span> <span class="token assign-left variable">PARTUUID</span><span class="token operator">=</span><span class="token string">"2588408c-01"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Para comprobar que el archivo /etc/fstab es correcto</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Este comando montará todas las particiones definidas en el archivo, o dará un error en el caso de que el archivo contenga errores.</p>
</div></template>
