<template><div><ol>
<li>Listar los bloques (discos):</li>
</ol>
<p>Isblk</p>
<ol start="2">
<li>
<p>Crear particiones:
fdisk /dev/(nombre del disco)</p>
</li>
<li>
<p>Crear el volumen fisico del LVM:
pvcreate /dev/(nombre del disco)</p>
</li>
<li>
<p>Crear el grupo de volumenes de LVM:
vgcreate VG_(nombre del grupo) /dev/(nombre del disco)</p>
</li>
<li>
<p>Crear el volumen ldgico y asignar el tamafno:</p>
</li>
</ol>
<p>Ivcreate -L (tamano)G -n LV_(nombre del volumen) VG_(nombre
del grupo)</p>
<ol start="6">
<li>
<p>Crear el punto de montaje donde deseemos con mkdir.</p>
</li>
<li>
<p>Asignar un tipo de sistema de archivo al volumen ldgico:</p>
</li>
</ol>
<p>mkfs -t (sistema de archivo) /dev/mapper/VG_(nombre del
grupo)- LV_(nombre del volumen)</p>
<ol start="8">
<li>Montar de forma temporal el volumen ldgico:</li>
</ol>
<p>mount /dev/mapper/VG_(nombre del grupo)-LV_(nombre del
volumen) (punto de montaje)</p>
<ol start="0">
<li>Montar de forma permanente el volumen Idgico:</li>
</ol>
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
