<template><div><h2 id="firma-digital" tabindex="-1"><a class="header-anchor" href="#firma-digital" aria-hidden="true">#</a> Firma digital</h2>
<p><img src="@source/curso/3-criptografia/img/hash-asimetrico.jpg" alt="Mecanismo de firma" loading="lazy"></p>
<p>El procedimiento completo sería:</p>
<ul>
<li>
<p>El emisor aplica la función hash al original para generar el resumen -&gt; documento resumen</p>
</li>
<li>
<p>El emisor toma su clave privada para aplicar el algoritmo asimétrico al documento resumen -&gt; documento resumen cifrado</p>
</li>
<li>
<p>El emisor toma la clave pública del receptor para aplicar el algoritmo asimétrico al documento original y al documento resumen -&gt; El resultado es un documento conjunto cifrado que se envía al receptor.</p>
</li>
<li>
<p>El receptor, utiliza su clave privada para descifrar los documentos y la clave pública del origen para comprobar la firma.</p>
</li>
</ul>
<h3 id="clientes-de-confianza" tabindex="-1"><a class="header-anchor" href="#clientes-de-confianza" aria-hidden="true">#</a> Clientes de confianza</h3>
<p>El mecanismo de firma también se utiliza para garantizar al servidor que somos un <strong>cliente de confianza</strong>, y así podemos evitar introducir usuario y contraseña (autenticación sin contraseña).</p>
<p><strong>Previamente</strong>, el servidor <strong>debe tener</strong> almacenada <strong>la clave pública del cliente</strong>.</p>
<ol>
<li>
<p>el cliente empieza una sesión y solicita autenticación sin contraseña.</p>
</li>
<li>
<p>el servidor <strong>genera un documento especial</strong>, llamado <mark>desafío</mark> (compuesto de cifras y letras elegidas aleatoriamente).</p>
</li>
<li>
<p><strong>Busca</strong> en sus ficheros <strong>la clave pública del cliente</strong>, <strong>cifra</strong> con ella <strong>ese desafío</strong> y <strong>se lo envía al cliente</strong>.</p>
</li>
<li>
<p>el cliente <strong>lo recibe</strong>, lo intenta <strong>descifrar con su clave privada</strong> y <strong>devulve el resultado al servidor</strong>.</p>
</li>
<li>
<p>el servidor <strong>compara</strong> la secuencia de caracteres recibida con el desafío que generó; si son iguales, efectivamente el cliente es de confianza y puede conectar directamente.</p>
</li>
</ol>
</div></template>
