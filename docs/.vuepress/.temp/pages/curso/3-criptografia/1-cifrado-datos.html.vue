<template><div><h2 id="¿por-que-cifrar" tabindex="-1"><a class="header-anchor" href="#¿por-que-cifrar" aria-hidden="true">#</a> ¿Por qué cifrar?</h2>
<ul>
<li>
<p><mark>La información es poder</mark>.</p>
</li>
<li>
<p>Para sacar el máximo partido de una información hay que compartirla con otros individuos</p>
</li>
</ul>
<ol>
<li>
<p>El autor del documento (<strong>emisor</strong>) debe <strong>transferirlo a algún soporte</strong> (disco duro, CD, pendrive USB, impresión en papel, cuenta de correo electrónico, upload a un servidor web, etc.)</p>
</li>
<li>
<p>y <strong>hacer llegar</strong> ese soporte hasta el destino (<strong>receptor</strong>) mediante algún canal de comunicación (empresa demensajería, fax, Internet, etc.).</p>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">Canles inseguros</p>
<p>En los canales de comunicación pueden estar acechando terceras personas con la intención de interceptarlo:</p>
<ul>
<li>sobornarán al mensajero para hacer una copia del disco duro/CD/USB o una fotocopia del papel,</li>
<li>«hackearán» el servidor de correo,</li>
<li>capturarán el tráfico de red en el servidor web.</li>
</ul>
<blockquote>
<p><strong>Es imposible</strong> asegurar que nunca conseguirán el documento. Nuestra esperanza es que, <mark>aunque lo tengan y lo puedan leer, no entiendan nada</mark> porque el contenido <strong>estará cifrado</strong>.</p>
</blockquote>
</div>
<h2 id="criptografia" tabindex="-1"><a class="header-anchor" href="#criptografia" aria-hidden="true">#</a> Criptografía</h2>
<p>La palabra <strong>criptografía</strong> viene del griego <strong>cripto</strong> (que <mark>significa «ocultar»</mark>) y <strong>graphos</strong> (que <mark>significa «escribir»</mark>).</p>
<p>La criptografía consiste en tomar el <strong>documento original</strong> y <mark>aplicarle un algoritmo</mark> cuyo resultado es un <strong>nuevo documento</strong>.</p>
<p>El destinatario al recibir el documento, sabrá aplicar el algoritmo para recuperar el documento original.</p>
<ul>
<li>Realmente, hace falta algo más que el algoritmo, porque el enemigo también puede conocerlo (incluso lo utiliza en sus propias comunicaciones). Por ejemplo, nosotros tenemos una red wifi con cifrado WPA, pero el vecino también. La privacidad la conseguimos gracias a la clave del algoritmo</li>
</ul>
<p><img src="@source/curso/3-criptografia/img/wpa.jpg" alt="Red Wifi WPA" loading="lazy"></p>
<h2 id="criptografia-simetrica" tabindex="-1"><a class="header-anchor" href="#criptografia-simetrica" aria-hidden="true">#</a> Criptografía simétrica</h2>
<ul>
<li>
<p>Los algoritmos de criptografía simétrica <mark>utilizan la misma clave para los dos procesos</mark> : <strong>cifrar</strong> y <strong>descifrar</strong>.</p>
</li>
<li>
<p>Son sencillos de utilizar y, en general, resultan bastante eficientes (tardan poco tiempo en cifrar o descifrar). Por este motivo, todos los algoritmos, desde la antigüedad hasta los años setenta, eran simétricos.</p>
</li>
<li>
<p>Los más utilizados actualmente son: DES, 3DES, AES, Blowfish e IDEA.</p>
</li>
</ul>
<p><img src="@source/curso/3-criptografia/img/c-simetrica.jpg" alt="Criptografía simétrica" loading="lazy"></p>
<ol>
<li>El emisor quiere enviar un documento al receptor.</li>
<li>Toma el documento y le aplica el algoritmo simétrico, usando la clave única, que también conoce el receptor.</li>
<li>El resultado es un documento cifrado que ya podemos enviar tranquilamente.</li>
<li>El receptor recibe este documento cifrado</li>
<li>Le aplica el mismo algoritmo con la misma clave, pero ahora en función de descifrar.</li>
</ol>
<ul>
<li>Si el documento cifrado no ha sido alterado en el camino y la clave es la misma, <mark>el resultado será el documento original</mark>.</li>
</ul>
<p>Los principales problemas de la criptografía simétrica son:</p>
<ul>
<li>
<p><strong>la circulación de las claves</strong>: cómo conseguimos que el emisor y el receptor tengan la clave buena. <mark>No podemos utilizar el mismo
canal inseguro</mark> por el que enviaremos el mensaje (la inseguridad nos ha llevado a cifrar).</p>
</li>
<li>
<p><strong>la gestión de las claves almacenadas</strong>: Si en una empresa hay diez trabajadores y tienen conversaciones privadas con todos, cada uno necesita establecer nueve claves distintas y encontrar nueve canales seguros para actualizarlas cada vez (en total 81 claves y 81 canales).</p>
</li>
</ul>
<p>¿Cada vez que cambie mi clave tengo que avisar a todos mis compañeros? Es poco manejable.</p>
<h2 id="criptografia-asimetrica" tabindex="-1"><a class="header-anchor" href="#criptografia-asimetrica" aria-hidden="true">#</a> Criptografía asimétrica</h2>
<p><img src="@source/curso/3-criptografia/img/c-asimetrica.jpg" alt="Criptografía asimétrica" loading="lazy"></p>
<p>La criptografía asimétrica resuelve los dos problemas de la clave simétrica:</p>
<ul>
<li>
<p><strong>No necesitamos canales seguros</strong> para comunicar la clave que utilizaremos en el cifrado. Podemos adjuntarla en nuestros correos, añadirla al perfil de nuestras redes sociales, «postearla» en un blog, incluso repartirla en octavillas por la calle.</p>
</li>
<li>
<p><strong>No hay desbordamiento</strong> en el tratamiento de <strong>claves y canales</strong>: Si somos nueve empleados, solo necesitamos nueve claves y un solo canal: la intranet de la empresa, un correo destinado a toda la empresa, etc. Y si aparece un empleado nuevo, serán diez claves y el mismo canal.</p>
</li>
</ul>
<p>El cifrado asimétrico no se puede utilizar para cifrar todos los paquetes intercambiados en una red local porque el bajo rendimiento del algoritmo ralentizaría el tráfico.</p>
<p>En su lugar se adopta un <mark>esquema híbrido</mark>:</p>
<ol>
<li>
<p>Criptografía <strong>asimétrica</strong> solo para el <strong>inicio de la sesión</strong>, cuando hay que generar un canal seguro donde acordar la clave simétrica aleatoria que se utilizará en esa conversación.</p>
</li>
<li>
<p>Criptografía <strong>simétrica</strong> durante la transmisión, utilizando la clave simétrica acordada durante el inicio de sesión. Generalmente se suele cambiar la clave simétrica cada cierto tiempo (minutos) para dificultar más el espionaje de la conversación.</p>
</li>
</ol>
<p>Un ejemplo con el protocolo SSH:</p>
<p><img src="@source/curso/3-criptografia/img/ssh.jpg" alt="Criptografía en SSH" loading="lazy"></p>
</div></template>
