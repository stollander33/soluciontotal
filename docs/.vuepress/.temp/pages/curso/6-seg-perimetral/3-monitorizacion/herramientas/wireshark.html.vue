<template><div><p>Herramienta para captura de paquetes</p>
<ul>
<li>Conjunto de plugins</li>
<li>Multiplataforma</li>
<li>Modo gráfico (wireshark-gnome)</li>
<li>Modo texto (tshark)</li>
</ul>
<h2 id="sniffer-de-trafico" tabindex="-1"><a class="header-anchor" href="#sniffer-de-trafico" aria-hidden="true">#</a> Sniffer de tráfico</h2>
<blockquote>
<p><strong>Es necesario ejecutar Wireshark con privilegios de root</strong>,
puesto que de lo contrario no podremos configurar las interfaces de red.</p>
</blockquote>
<ul>
<li>
<p>Vamos al menú Capture -&gt; Options</p>
</li>
<li>
<p>Interface: es la tarjeta de red que utilizaremos para realizar la captura de los paquetes.</p>
</li>
<li>
<p>Capture packets in promiscuous mode: opción bastante
importante. Al estar seleccionada Wireshark captura TODOS
los paquetes que la interfaz reciba/envíe.</p>
</li>
</ul>
<p>– Hubs
– Switches</p>
<ul>
<li>
<p>Limit each packet to: límita el tamaño máximo de cada paquete capturado.</p>
</li>
<li>
<p>Capture filter: sirve para asignar un filtro a la captura. Los filtros son útiles para mostrar sólo la información deseada, por ejemplo: paquetes enviados por la IP XX.XXX.XXX.XX, o sólo paquetes HTTP, etc.</p>
</li>
<li>
<p>File: aquí especificamos el archivo donde serán guardados los
paquetes capturados. Es posible además separar los archivos cada vez que alcancen un tamaño, o cada cierto tiempo.</p>
</li>
<li>
<p>Stop capture: nos sirve para detener automáticamente una
captura después de ciertas condiciones (tiempo, tamaño del archivo de captura y número de paquetes).</p>
</li>
</ul>
<p>En las opciones de visualización (Display Options), es posible
configurar a Wireshark para:</p>
<ul>
<li>
<p>Actualizar el panel de paquetes cada vez que se capture uno (Update list of packets in real time)</p>
</li>
<li>
<p>Realizar un scroll-down cada vez que se capture un paquete
(Automatic scrolling in live capture)</p>
</li>
<li>
<p>Ocultar el diálogo de información de captura (Hide capture info dialog)</p>
</li>
<li>
<p>Por último, las opciones de resolución de nombres (Name
resolution) le indican a Wireshark si debe o no intentar
resolver las direcciones MAC, el nombre de red y nombre del
tipo de transporte, de los paquetes capturados.</p>
</li>
</ul>
<p>:::warnig ¿Porqué solamente veo los paquetes que envía y recibe mi equipo?</p>
<ul>
<li>
<p>Estás tratando de esnifar una red switcheada (que se conecta
mediante un switch, y no un hub)</p>
</li>
<li>
<p>Estás conectado a un hub que está configurado como un switch
(mismo caso de arriba) No configuraste a Wireshark para que
esnifara en modo promiscuo (Capture packets in promiscuous
mode)</p>
</li>
<li>
<p>En caso tal que la conexión de tu red esté detrás de un switch, no es posible que veas los paquetes que transmiten y reciben otros equipos. Esto no quiere decir que sea imposible hacerlo; lo más común a realizar en estos casos es un ataque Man in the Middle a través de un ARP Poisoning.</p>
</li>
</ul>
<p>:::</p>
<h3 id="filtros" tabindex="-1"><a class="header-anchor" href="#filtros" aria-hidden="true">#</a> Filtros</h3>
<p>Permiten filtrar la información mostrada:</p>
<ul>
<li>Dirección IP   “ip.addr == x.x.x.x”</li>
<li>Dirección MAC  “eth.addr == xx:xx:xx:xx:xx:xx”</li>
<li>Protocolo ICMP “icmp”</li>
<li>Puerto TCP     “tcp.port == x”</li>
<li>Puerto UDP     “udp.port == x”</li>
<li>Tamaño de TCP  “tcp.len &gt; x &amp;&amp; tcp.len &lt; size=&quot;3“”</li>
</ul>
</div></template>
