<template><div><p>Los ordenadores pueden conectar varios discos internos porque las placas base suelen traer integrada una <strong>controladora de discos</strong> para dos o tres conexiones.</p>
<p>Y si pinchamos más controladoras, podremos conectar más dispositivos. Pero ¿<mark>para qué queremos varios discos en un ordenador</mark>?</p>
<p>Podemos aprovechar varios discos de un ordenador para:</p>
<ul>
<li>
<p>*Crear <strong>unidades más grandes</strong>. Dos discos de 500 GB juntos nos pueden dar una unidad de 1 TB. Con tres discos tenemos 1,5 TB, etc.</p>
</li>
<li>
<p>Crear <strong>unidades más rápidas</strong>. Si tenemos dos discos de 500 GB y configuramos el sistema para que, en cada fichero, los bloques pares se escriban en un disco y los impares en otro, después podremos hacer lecturas y escrituras en paralelo (en el mejor caso, ahorramos la mitad de tiempo).</p>
</li>
<li>
<p>Crear <strong>unidades más fiables</strong>. Si configuramos los dos discos anteriores para que, en cada fichero, los bloques se escriban a la vez en ambos discos, podemos estar tranquilos porque, si falla un disco, los datos estarán a salvo en el otro.</p>
</li>
</ul>
<h2 id="niveles-de-raid" tabindex="-1"><a class="header-anchor" href="#niveles-de-raid" aria-hidden="true">#</a> Niveles de RAID.</h2>
<p>Los más importantes son:</p>
<ul>
<li><strong>RAID 0</strong>. Agrupamos discos para tener un disco más grande, incluso más rápido. Los bloques que lleguen al disco <strong>RAID 0</strong> se escribirán en alguno de los discos del grupo.</li>
</ul>
<blockquote>
<p>##En el RAID 0 podemos elegir entre spanning y striping (que es lo más común). En cualquier caso, =<mark>si falla uno de los discos, lo perdemos todo</mark>=.</p>
</blockquote>
<ul>
<li><strong>RAID 1</strong>. Se le suele llamar mirror o espejo. Agrupamos discos por parejas, de manera que cada bloque que llegue al disco RAID 1 se escribirá en los dos discos a la vez.</li>
</ul>
<p>Si falla uno de los discos, no perdemos la información, porque estará en el otro. A cambio, sacrificamos la mitad de la capacidad (el usuario ha conectado dos discos de 500 GB y solo tiene disponibles 500 GB, en lugar de 1 TB) y no ganamos rendimiento.</p>
<ul>
<li><strong>RAID 5</strong>. el RAID 0 es más rápido, pero tan seguro como cualquiera de ellos. El RAID 1 es más seguro que los discos por separado, pero con el mismo rendimiento. El RAID 5 consigue ambas cosas con dos mecanismos:</li>
</ul>
<p>– Para cada dato que el sistema quiere almacenar en el RAID, este aplica un procedimiento matemático (en general, la paridad) para obtener información complementaria a ese dato, de tal manera que se puede recuperar el dato en caso de perder cualquier disco (sea disco de datos o paridad).</p>
<p>– Una vez obtenida la paridad, se hace striping para repartir el dato y su paridad por los discos conectados al RAID.</p>
<p>Procedimiento para generar un sistema de discos RAID</p>
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
