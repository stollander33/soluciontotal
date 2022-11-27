<template><div><h1 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> Iptables</h1>
<p>Cuando llega un paquete a la tarjeta de red, el sistema operativo decide qué hacer con él. El resultado de esa decisión puede ser:</p>
<ul>
<li>
<p><strong>Descartarlo</strong>: Si el destinatario del paquete no es nuestra máquina o, aunque lo sea, ningún proceso actual lo espera, el paquete termina aquí. Por ejemplo, llega una petición http a una máquina que no tiene un servidor web arrancado: la máquina lo ignora.</p>
</li>
<li>
<p><strong>Aceptarlo</strong>:</p>
<ul>
<li>
<p><mark>porque es para nosotros y hay un proceso que sabe qué hacer con ese paquete</mark>. Sería el ejemplo anterior, pero ahora sí tenemos un servidor web funcionando.</p>
</li>
<li>
<p><mark>aunque no sea para nosotros: porque somos un router</mark> y vamos a enviarlo por otra interfaz. En algunos casos llegaremos a modificar las cabeceras del paquete, como veremos más adelante.</p>
</li>
<li>
<p>aunque <mark>no es para nosotros y tampoco somos un router</mark>: pero estamos escuchando todos los paquetes porque <mark>somos un sniffer de red</mark>.</p>
</li>
</ul>
</li>
</ul>
<h3 id="fases" tabindex="-1"><a class="header-anchor" href="#fases" aria-hidden="true">#</a> Fases</h3>
<blockquote>
<p>también se denominan <strong>chain</strong>, porque <mark>encadena una regla con otra</mark>.</p>
</blockquote>
<p>En el caso de Linux, iptables permite introducir reglas en cada una de estas fases:</p>
<ul>
<li>
<p><strong>INPUT</strong>: Cuando llega el paquete para un proceso nuestro pero todavía no se lo hemos entregado</p>
</li>
<li>
<p><strong>FORWARD</strong>: Cuando somos un router y estamos a punto de traspasar el paquete de una interfaz a otra</p>
</li>
<li>
<p><strong>OUTPUT</strong>: Cuando un paquete está listo para salir por una interfaz</p>
</li>
<li>
<p><strong>PREROUTING</strong>: Se ejecuta antes de input. Sirve para obviar el enrutamiento porque sabemos exactamente qué tratamiento dar a esos paquetes.</p>
</li>
<li>
<p><strong>POSTROUTING</strong> (después de output y después de forward): Se utiliza para aplicar alguna modificación a los paquetes que están a punto de abandonar la máquina.</p>
</li>
</ul>
<h3 id="reglas" tabindex="-1"><a class="header-anchor" href="#reglas" aria-hidden="true">#</a> Reglas</h3>
<p>Las reglas de iptables tienen una lista de condiciones y una acción, de manera que, cuando un paquete cumple todas las condiciones de una regla, se ejecuta la acción.</p>
<p>Las acciones pueden ser simplemente aceptar o rechazar el paquete, o también modificarlo.</p>
<h3 id="tablas" tabindex="-1"><a class="header-anchor" href="#tablas" aria-hidden="true">#</a> Tablas</h3>
<p>Pero no todas las acciones están disponibles en todas las situaciones. Por esto las reglas se agrupan en <strong>tres tablas principales</strong>:</p>
<ul>
<li>
<p><strong>FILTER</strong>: Es la tabla principal. Su misión es <mark>aceptar o rechazar</mark> paquetes. Es el firewall propiamente dicho.</p>
</li>
<li>
<p><strong>NAT</strong>:  Las reglas de esta tabla <mark>permiten cambiar la dirección de origen o destino</mark> de los paquetes.</p>
</li>
<li>
<p><strong>MANGLE</strong>: En esta tabla podemos alterar varios campos de la cabecera IP, como el ToS (Type of Service). Se suele usar para aplicar QoS (Quality of Service), marcando los paquetes de determinados servicios para luego priorizarlos.</p>
</li>
</ul>
<p>Dentro de cada tabla, las reglas se agrupan a su vez por la etapa del procesamiento de paquetes donde se aplican (prerouting, input, etc.), aunque no todas las tablas tienen
todas las etapas.</p>
<p>Para cada etapa hay una lista de reglas que se recorre secuencialmente hasta que el paquete cumple una regla.</p>
<p>En ese momento se ejecuta la acción asociada a la regla y se deja de aplicar el resto de las reglas de esa etapa (salvo la acción LOG, como veremos más adelante).</p>
<p>Si el paquete no cumple ninguna regla de esa etapa, se aplica la acción por defecto de la etapa.</p>
<p><img src="@source/curso/6-seg-perimetral/4-Firewalls/img/iptables.jpg" alt="Funcionamiento de iptables" loading="lazy"></p>
</div></template>
