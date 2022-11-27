<template><div><p>Vamos a distinguir entre:</p>
<ul>
<li>
<p>Backup de datos: Copia de seguridad de los datos del usuario o empresa que están almacenados en un ordenador. Hay que hacerlo diariamente, incluso con más frecuencia, dependiendo de la actividad de la empresa.</p>
</li>
<li>
<p>Imagen del sistema: Copia de seguridad de los programas (sistema operativo y aplicaciones) que están instalados en un ordenador.</p>
</li>
</ul>
<p>El segundo paso es identificar los datos que tenemos que salvar. Aquí tenemos que distinguir entre:</p>
<p>– <strong>Ficheros</strong>. Pueden ser unidades enteras, la típica carpeta Mis Documentos, etc. Existe la complicación de detectar los ficheros que están siendo modificados precisamente cuando se ha lanzado la copia.</p>
<p>– <strong>Sistemas complejos</strong>, como las bases de datos, donde la concurrencia de cambios suele ser mucho más alta que con ficheros, porque una operación afecta a varias tablas. Por este motivo, los servidores de base de datos <mark>tienen sus propios mecanismos de exportación del contenido de las tablas</mark>.</p>
<h2 id="tipos-de-copias" tabindex="-1"><a class="header-anchor" href="#tipos-de-copias" aria-hidden="true">#</a> Tipos de copias</h2>
<p>Hay tres tipos de copia:</p>
<ul>
<li>
<p><strong>Completa</strong>: <mark>Incluye toda la información identificada</mark>. Si era una unidad de disco, todos los archivos y carpetas que contiene; si era una base de datos, la exportación de todas sus tablas.</p>
</li>
<li>
<p><strong>Diferencial</strong>: <mark>Incluye la información que ha cambiado desde la última copia de seguridad completa</mark>.</p>
</li>
<li>
<p><strong>Incremental</strong>: <mark>Incluye toda la información que ha cambiado desde la última copia de seguridad</mark>(completa o incremental).</p>
</li>
</ul>
<h2 id="imagen-del-sistema" tabindex="-1"><a class="header-anchor" href="#imagen-del-sistema" aria-hidden="true">#</a> Imagen del sistema</h2>
<p>La imagen del sistema no es tan importante como los datos, porque en último extremo podríamos instalar desde cero, con el CD/DVD del sistema operativo, las aplicaciones necesarias, y después aplicaríamos la configuración necesaria.</p>
<p>La imagen de un sistema es un volcado del contenido del todo el disco duro: ejecutables y datos del sistema operativo, ejecutables y datos de las aplicaciones instaladas y datos personales de los usuarios.</p>
<ul>
<li>
<p>Generalmente se comprime en un único fichero cuyo tamaño dependerá del tamaño del disco, la ocupación y el tipo de contenidos.</p>
</li>
<li>
<p>Ese fichero suele estar cifrado y se almacena lejos del sistema original, como hacemos con las cintas del backup.</p>
</li>
</ul>
</div></template>
