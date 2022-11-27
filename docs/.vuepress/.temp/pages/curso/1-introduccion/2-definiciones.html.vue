<template><div><div class="custom-container tip"><p class="custom-container-title">Precisión en el lenguaje</p>
<p>Es muy importante ser precisos cuando utilizamps el lenguaje. Por ell para fijar los conceptos relacionados con la seguridad informática vamos a intentar elaborar un pequeño diccionario.</p>
</div>
<h2 id="seguridad-fisica-logica-activa-pasiva" tabindex="-1"><a class="header-anchor" href="#seguridad-fisica-logica-activa-pasiva" aria-hidden="true">#</a> * Seguridad física/lógica, activa/pasiva</h2>
<p>La seguridad física cubre todo lo referido a los equipos informáticos: ordenadores de propósito general, servidores especializados y equipamiento de red. La seguridad lógica se refiere a las distintas aplicaciones que ejecutan en cada uno de estos equipos.</p>
<p>Las amenazas contra la seguridad física son:</p>
<ul>
<li>
<p><strong>Desastres naturales</strong> (incendios, inundaciones, hundimientos, terremotos). Los tenemos en cuenta a la hora de ubicar el emplazamiento del centro de proceso de datos (CPD)</p>
</li>
<li>
<p><strong>Robos</strong>. Nuestros equipos, y sobre todo la información que contienen, resultan valiosos para otros individuos u  organizaciones.</p>
</li>
</ul>
<blockquote>
<p>Debemos proteger el acceso a la sala del CPD mediante múltiples medidas de seguridad: vigilantes, tarjetas de acceso, identificación mediante usuario y contraseña, etc.</p>
</blockquote>
<ul>
<li><strong>Fallos de suministro</strong>. Los ordenadores utilizan corriente eléctrica para funcionar y necesitan redes externas para comunicar con otras empresas y con los clientes. Estos servicios los contrataremos con determinados suministradores, pero <mark>debemos estar
preparados</mark> para las ocasiones en que no puedan proporcionarlo:</li>
</ul>
<blockquote>
<ul>
<li>unas baterías o un grupo electrógeno por si falla la corriente</li>
<li>una segunda conexión a Internet</li>
</ul>
</blockquote>
<p>Las <strong>amenazas contra la seguridad lógica</strong> son:</p>
<ul>
<li>
<p><strong>Virus</strong>, troyanos y malware en general. Como ocurre con el spam en el correo electrónico, el malware es software no deseado y que debemos eliminar.</p>
</li>
<li>
<p><strong>Pérdida de datos</strong>. Un defecto en el código fuente de una aplicación, o una configuración defectuosa de la misma, puede ocasionar modificaciones inexplicables en la información almacenada, incluso la pérdida de datos.</p>
</li>
<li>
<p><strong>Ataques a las aplicaciones de los servidores</strong>. Los hackers intentarán entrar a por los datos aprovechando cualquier vulnerabilidad del sistema operativo o de las aplicaciones que ejecutan en esa máquina (por eso conviene tener instalado el software mínimo imprescindible).</p>
</li>
</ul>
<h2 id="confidencialidad" tabindex="-1"><a class="header-anchor" href="#confidencialidad" aria-hidden="true">#</a> * Confidencialidad</h2>
<p>La <strong>confidencialidad</strong> intenta que la información <mark>solo sea utilizada por las personas o máquinas debidamente autorizadas</mark>. Para garantizar la confidencialidad necesitamos disponer de tres tipos de mecanismos:</p>
<ul>
<li>
<p><strong>Autenticación</strong>. La autenticación intenta confirmar que una persona o máquina es quien
dice ser, que no estamos hablando con un impostor.</p>
</li>
<li>
<p><strong>Autorización</strong>. Una vez autenticado, los distintos usuarios de la información tendrán distintos privilegios sobre ella. Básicamente dos: <mark>solo lectura</mark>, o <mark>lectura y modificación</mark>.</p>
</li>
<li>
<p><strong>Cifrado</strong>. La información estará cifrada para que sea inútil para cualquiera que no supere la autenticación.</p>
</li>
</ul>
<h2 id="integridad" tabindex="-1"><a class="header-anchor" href="#integridad" aria-hidden="true">#</a> * Integridad</h2>
<p>El objetivo de la integridad es que los datos queden almacenados tal y como espera el usuario: <mark>que no sean alterados</mark> sin su consentimiento.</p>
<p>Un ejemplo sería el identificador de la cuenta bancaria, que tiene cuatro grupos de números:</p>
<ul>
<li>Cuatro dígitos del código del banco.</li>
<li>Cuatro dígitos del código de la sucursal del banco donde hemos abierto la cuenta.</li>
<li>Dos dígitos de control.</li>
<li>Diez dígitos para el código de la cuenta, dentro de todas las abiertas en esa sucursal.</li>
<li>Los dígitos de control se obtienen por combinación numérica de los otros 18 números.</li>
</ul>
<div class="custom-container info"><p class="custom-container-title">Información</p>
<p>Esa combinación es una operación matemática que nos asegura que cualquier pequeño cambio en alguno de los 18 números generaría unos dígitos de control distintos.</p>
</div>
<p>Es decir, si queremos hacer una transferencia bancaria por teléfono y, al dictar el número de cuenta, cambiamos sin querer alguno de los dígitos (da igual cualquiera de los 20), quien apunta ese número de cuenta no podrá operar con ella porque es un número inválido, ya que los dígitos de control no corresponden a los otros 18.</p>
<h2 id="disponibilidad" tabindex="-1"><a class="header-anchor" href="#disponibilidad" aria-hidden="true">#</a> * Disponibilidad</h2>
<p>La disponibilidad intenta <mark>que los usuarios puedan acceder a los servicios con normalidad</mark> en el horario establecido. Para ello se invierte en sobredimensionar los recursos:</p>
<ul>
<li>
<p>Una tienda tiene dos datáfonos con dos bancos distintos. Así siempre puede ofrecer el cobro por tarjeta.</p>
</li>
<li>
<p>Un equipo de fútbol tiene varios suplentes en el banquillo. Así siempre puede intentar mantener once jugadores cuando alguno se lesiona.</p>
</li>
<li>
<p>Los aviones llevan piloto y copiloto.</p>
</li>
<li>
<p>Cuando se hacen obras entre dos estaciones de metro, hay una línea de autobuses que lleva de una a otra por superficie, y el ticket es el mismo.</p>
</li>
</ul>
<h2 id="no-repudio" tabindex="-1"><a class="header-anchor" href="#no-repudio" aria-hidden="true">#</a> * No repudio</h2>
<p>El no repudio se refiere a que, <strong>ante una relación entre dos partes</strong>, <strong>intentaremos evitar</strong> que cualquiera de ellas <mark>pueda negar que participara</mark> en esa relación.</p>
<p><mark>EJEMPLOS</mark></p>
<ul>
<li>Los contratos se firman por las dos partes. Por ejemplo, la hipoteca de una casa.</li>
<li>Firmamos el impreso de matriculación en un ciclo formativo.</li>
<li>En algunas tarjetas de crédito hay que firmar un papel con los datos de la compra, y la tienda se queda una copia.</li>
<li>Conservamos el ticket de compra para poder solicitar la devolución.</li>
<li>Cuando hacemos una reserva de vuelo obtenemos un localizador; a la hora de retirar el billete no pueden negar que hicimos la reserva.</li>
</ul>
<h3 id="caso-practico" tabindex="-1"><a class="header-anchor" href="#caso-practico" aria-hidden="true">#</a> CASO PRÁCTICO</h3>
<div class="custom-container tip"><p class="custom-container-title">Comprobación de integridad en Linux</p>
<ul>
<li>Duración  :  10 minutos</li>
<li>Dificultad:  Fácil</li>
<li>Objetivo:  Utilizar la suma de comprobación de ficheros.</li>
<li>Material. Ordenador con GNU Linux</li>
</ul>
</div>
<ol>
<li>En Linux el comando <strong>sum</strong> permite obtener de un fichero el equivalente al dígito de control de la cuenta bancaria. Si  modificamos el fichero, el valor devuelto por sum cambia.</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> esto es una prueba <span class="token operator">></span> a
<span class="token function">sum</span> a
<span class="token operator">></span>  01578 
<span class="token builtin class-name">echo</span> mas <span class="token operator">>></span>a
<span class="token function">sum</span> a
<span class="token operator">></span>  00204 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sabes-tienes-eres" tabindex="-1"><a class="header-anchor" href="#sabes-tienes-eres" aria-hidden="true">#</a> * Sabes-tienes-eres</h2>
<p>La autenticación es especialmente importante en temas de seguridad. Debemos estar muy seguros de la identidad de la persona o sistema que solicita acceder a nuestra información.</p>
<p>Un esquema muy utilizado para analizar la autenticación es clasificar las medidas adoptadas según tres criterios:</p>
<ul>
<li><strong>Algo que sabes</strong>: es necesario conocer alguna palabra secreta: la <mark>típica contraseña</mark>.</li>
<li><strong>Algo que tienes</strong>: es imprescindible aportar algún elemento material: generalmente <mark>una tarjeta</mark>.</li>
<li><strong>Algo que eres</strong>: El sistema solicita reconocer alguna característica física del individuo (<mark>biometría</mark>): huella dactilar, escáner de retina, reconocimiento de voz, etc.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Consejos</p>
<p>La autenticación será más fiable cuantos más criterios distintos cumpla</p>
</div>
<h2 id="vulnerabilidad" tabindex="-1"><a class="header-anchor" href="#vulnerabilidad" aria-hidden="true">#</a> Vulnerabilidad:</h2>
<p>Debilidad en un activo o control que puede ser aprovechado por uno o más agentes externos.</p>
<h2 id="amenaza" tabindex="-1"><a class="header-anchor" href="#amenaza" aria-hidden="true">#</a> Amenaza:</h2>
<p>Causa potencial de un incidente no deseado que puede resultar en daños a un sistema u organización.</p>
<h2 id="ataque" tabindex="-1"><a class="header-anchor" href="#ataque" aria-hidden="true">#</a> Ataque:</h2>
<p>Intento de destruir, exponer, alterar, inutilizar, robar, obtener acceso no autorizado o hacer uso indebido de los activos.</p>
</div></template>
