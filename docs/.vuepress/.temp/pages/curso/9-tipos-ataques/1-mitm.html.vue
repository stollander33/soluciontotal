<template><div><ul>
<li>
<p>La familia de protocolos TCP/IP se diseñó a <strong>principios de los años setenta</strong>.</p>
</li>
<li>
<p>Las limitaciones del hardware de esa época <strong>orientaron el diseño hacia la fiabilidad más que hacia la seguridad</strong></p>
</li>
</ul>
<h2 id="¿como-funciona" tabindex="-1"><a class="header-anchor" href="#¿como-funciona" aria-hidden="true">#</a> ¿Como funciona?</h2>
<p>En una comunicación entre dos equipos aparece un tercero que consigue que los paquetes intercambiados pasen por él.</p>
<p>Desde ese momento puede leer todo el tráfico (ataque de interceptación) o, lo que resulta más peligroso, alterar los datos para su beneficio (ataque de modificación).</p>
<p>El atacante puede interponerse en el tráfico entre origen y destino de dos maneras:</p>
<div class="custom-container info"><p class="custom-container-title">Por hardware</p>
<ul>
<li>El atacante tiene acceso directo a un elemento de red que forma parte del camino entre el origen y el destino.</li>
</ul>
<p><mark>Ejemplo</mark>: el cable que conectaba el origen con su switch de planta ahora pasa por la máquina del atacante.</p>
</div>
<div class="custom-container info"><p class="custom-container-title">Por software</p>
<ul>
<li>El atacante consigue que el origen crea que él es el destino, y también consigue que el destino crea que él es el origen.</li>
<li>Es mucho más simple que el anterior porque no hace falta tener acceso físico a los equipos.</li>
<li>Es fácil activar y desactivar el ataque a voluntad.</li>
<li>Por tanto, es más difícil detectarlo.</li>
</ul>
</div>
<h2 id="ejecutar-el-ataque" tabindex="-1"><a class="header-anchor" href="#ejecutar-el-ataque" aria-hidden="true">#</a> Ejecutar el ataque</h2>
<h2 id="contramedidas" tabindex="-1"><a class="header-anchor" href="#contramedidas" aria-hidden="true">#</a> Contramedidas</h2>
<ul>
<li>
<p>Los ataques MITM son difíciles de evitar.</p>
</li>
<li>
<p>Una primera idea es utilizar en todas las máquinas tablas ARP estáticas, renunciando al protocolo dinámico. Parece sencillo, pero supone mucho trabajo de mantenimiento</p>
</li>
<li>
<p>Es más razonable controlar el acceso a nuestra red: si el atacante no puede conectar su equipo, no podrá lanzar paquetes maliciosos.</p>
</li>
<li>
<p>También es interesante utilizar, siempre que sea posible, protocolos seguros con infraestructura de clave pública (PKI).</p>
</li>
<li>
<p>Encontrar asignaciones duplicadas debe hacernos sospechar.</p>
</li>
<li>
<p>Puede ser relativamente fácil detectar un ataque MITM de tipo ARP (utiliza paquetes broadcast, que llegan a todos los equipos de la red), la figura del intermediario se extiende a otros muchos protocolos.</p>
</li>
<li>
<p>En general, son susceptibles de ser atacados todos los protocolos donde no hay autenticación de los equipos que participan en la comunicación (recordar el concepto de seguridad extremo a extremo).</p>
</li>
</ul>
</div></template>
