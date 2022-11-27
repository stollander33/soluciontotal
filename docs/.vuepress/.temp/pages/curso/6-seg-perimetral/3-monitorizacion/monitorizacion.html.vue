<template><div><ul>
<li>
<p>En esta unidad vamos a aprender a conocer qué está pasando en nuestra red, qué están haciendo esos usuarios autorizados.</p>
</li>
<li>
<p>Para este fin necesitaremos espiarnos a nosotros mismos, buscando garantizar la disponibilidad de la red (localizaremos enlaces saturados) y detectar ataques en curso.</p>
</li>
</ul>
<p>Vamos a procesar el tráfico de nuestra red mediante dos tipos de técnicas:</p>
<Tabs :data='[{"title":"a alto nivel"},{"title":"a bajo nivel"}]' tab-id="monit">
<template #tab0="{ title, value, isActive }">
<ul>
<li>
<p>Se limita a tomar medidas agregadas, los llamados contadores. Por ejemplo, total de bytes enviados o recibidos en un interfaz, agrupados por puerto de origen o destino.</p>
</li>
<li>
<p>Es habitual en las empresas porque:</p>
<ul>
<li>Resulta fácil de activar en toda la red dado que son los propios equipos los que facilitan esta información sobre sus interfaces.</li>
<li>Genera relativamente poca información para transmitir y procesar.</li>
<li>Es suficiente para conocer la disponibilidad de la red o el tipo de tráfico que transita. Por ejemplo, conocer el porcentaje de tráfico HTTP de nuestra red nos puede llevar a instalar un proxy.</li>
</ul>
</li>
</ul>
</template>
<template #tab1="{ title, value, isActive }">
<ul>
<li>captura todos los paquetes que transitan por una interfaz (<strong>sniffer de red</strong>). Los paquetes solo son leídos, no interceptados.</li>
</ul>
</template>
</Tabs>
<h2 id="herramientas" tabindex="-1"><a class="header-anchor" href="#herramientas" aria-hidden="true">#</a> Herramientas</h2>
<Tabs :data='[{"title":"Linux"},{"title":"Windows"}]' tab-id="tools">
<template #tab0="{ title, value, isActive }">
<ul>
<li><strong>tcpdump</strong>: permite hacer un volcado de todo el tráfico que llega a una tarjeta de red</li>
</ul>
</template>
<template #tab1="{ title, value, isActive }">
<p>Instalamos el paquete:</p>
</template>
</Tabs>
</div></template>
