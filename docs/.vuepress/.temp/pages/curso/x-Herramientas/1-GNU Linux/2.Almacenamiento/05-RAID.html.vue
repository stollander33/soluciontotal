<template><div><p>Procedimiento para generar un sistema de discos RAID</p>
<ul>
<li>Particionar los discos para el RAID:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">fdisk</span> /dev/<span class="token punctuation">(</span>nombre del disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Formatear los discos:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkfs</span> <span class="token parameter variable">-t</span> <span class="token punctuation">(</span>tipo<span class="token punctuation">)</span> /dev/<span class="token punctuation">(</span>nombre del disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Gestion del conjunto:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mdadm</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-C</span> /dev/<span class="token punctuation">(</span>nombre del conjunto<span class="token punctuation">)</span> <span class="token parameter variable">-l</span> <span class="token punctuation">(</span>nivel<span class="token punctuation">)</span> <span class="token parameter variable">-n</span> <span class="token punctuation">(</span>nodiscos<span class="token punctuation">)</span>
/dev/<span class="token punctuation">(</span>nombre del disco<span class="token punctuation">)</span> /dev/<span class="token punctuation">(</span>nombre del disco<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Montamos de forma temporal con el comando mount.</p>
</li>
<li>
<p>Montamos definitivamente introduciendo el UUID del conjunto en fstab.</p>
</li>
</ul>
</div></template>
