---
title: tcpdump
index: true
order: 1
icon: creative
---
 

tcpdump es una herramienta sencilla disponible en Linux que permite hacer un volcado
de todo el tráfico que llega a una tarjeta de red. Captura todo el tráfico, no solo el tráfi-
co TCP, como aparece en su nombre. Los paquetes leídos se muestran en pantalla o se
pueden almacenar en un fichero del disco para ser tratados posteriormente por esta mis-
ma herramienta u otra más avanzada. Se necesitan privilegios para ejecutarla, porque
necesitamos poner la tarjeta en modo promiscuo para que acepte todos los paquetes,
no solo los destinados a suMAC, como ya vimos en la Unidad 6.
La captura con tcpdump se puede hacer en uno de los extremos si la conversación que
estamos estudiando ocurre entre una máquina Unix y otra máquina Unix/Windows/etc.
(hay versiones de tcpdump para Windows, pero aquí es mejor WireShark). Aunque tam-
bién lo utilizaremos muchas veces para capturar las conversaciones que atraviesan un
router Linux. En la distribución representada en la Figura 7.15 podremos capturar las co-
municaciones entre los ordenadores de las dos VLAN y todas las conexiones a Internet,
aunque no podremos conocer qué hablan entre sí los ordenadores de una misma VLAN.