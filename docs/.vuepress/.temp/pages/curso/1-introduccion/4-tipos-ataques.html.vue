<template><div><p>Una vez que alguien está decidido a atacarnos, puede elegir alguna de estas formas:</p>
<ul>
<li>
<p><strong>Interrupción</strong>: El ataque consigue provocar un corte en la prestación de un servicio: el servidor web no está disponible, el disco en red no aparece o solo podemos leer (no escribir), etc.</p>
</li>
<li>
<p><strong>Interceptación</strong>: El atacante ha logrado acceder a nuestras comunicaciones y ha copiado la información que estábamos transmitiendo.</p>
</li>
<li>
<p><strong>Modificación</strong>: Ha conseguido acceder, pero, en lugar de copiar la información, la está modificando para que llegue alterada hasta el destino y provoque alguna reacción anormal. Por ejemplo, cambia las cifras de una transacción bancaria.</p>
</li>
<li>
<p><strong>Fabricación</strong>: El atacante se hace pasar por el destino de la transmisión, por lo que puede tranquilamente conocer el objeto de nuestra comunicación, engañarnos para obtener información valiosa, etc.</p>
</li>
</ul>
<p>Para conseguir su objetivo puede aplicar una o varias de estas técnicas:</p>
<ul>
<li><strong>Ingeniería social</strong>: A la hora de poner una contraseña, los usuarios no suelen utilizar combinaciones aleatorias de caracteres. En cambio, recurren a palabras conocidas para ellos: el mes de su cumpleaños, el nombre de su calle, su mascota, su futbolista
favorito, etc. Si conocemos bien a esa persona, podemos intentar adivinar su contraseña.</li>
</ul>
<p>También constituye ingeniería social pedir por favor a un compañero de trabajo que introduzca su usuario y contraseña, que el nuestro parece que no funciona. En esa sesión podemos aprovechar para introducir un troyano, por ejemplo.</p>
<ul>
<li>
<p><strong>Phishing</strong>: El atacante se pone en contacto con la víctima (generalmente, un correo electrónico) haciéndose pasar por una empresa con la que tenga alguna relación (su banco, su empresa de telefonía, etc.). En el contenido del mensaje intenta convencer-
le para que pulse un enlace que le llevará a una (falsa) web de la empresa. En esa web le solicitarán su identificación habitual y desde ese momento el atacante podrá utilizarla.</p>
</li>
<li>
<p><strong>Keyloggers</strong>: Un troyano en nuestra máquina puede tomar nota de todas las teclas que pulsamos, buscando el momento en que introducimos un usuario y contraseña. Si lo consigue, los envía al atacante.</p>
</li>
<li>
<p><strong>Fuerza bruta</strong>: Las contraseñas son un número limitado de caracteres (letras, números y signos de puntuación). Una aplicación malware puede ir generando todas las combinaciones posibles y probarlas una a una; tarde o temprano, acertará.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Contramedidas contra la fuerza bruta</p>
<p>– Utilizar <strong>contraseñas fuertes</strong>. No utilizar nada personal e insertar en medio de la palabra o al final un número o un signo de puntuación. En algunos sistemas nos avisan de la fortaleza de la contraseña elegida.</p>
<p>– <strong>Cambiar la contraseña</strong> con frecuencia (un mes, una semana). Dependiendo del hardware utilizado, los ataques pueden tardar bastante; si antes hemos cambiado la clave, se lo ponemos difícil.</p>
<p>– <strong>Impedir ráfagas de intentos repetidos</strong>. Nuestro software de autenticación que solicita usuario y contraseña fácilmente puede detectar varios intentos consecutivos en muy poco tiempo. No puede ser un humano: debemos responder <mark>introduciendo una espera</mark>.</p>
</div>
</div></template>
