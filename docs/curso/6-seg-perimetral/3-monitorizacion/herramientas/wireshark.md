---
title: Wireshark
index: true
order: 2
icon: creative
---

Herramienta para captura de paquetes

* Conjunto de plugins
* Multiplataforma
* Modo gráfico (wireshark-gnome)
* Modo texto (tshark)

## Sniffer de tráfico

> **Es necesario ejecutar Wireshark con privilegios de root**,
puesto que de lo contrario no podremos configurar las interfaces de red.

* Vamos al menú Capture -> Options

* Interface: es la tarjeta de red que utilizaremos para realizar la captura de los paquetes.
* Capture packets in promiscuous mode: opción bastante
importante. Al estar seleccionada Wireshark captura TODOS
los paquetes que la interfaz reciba/envíe.

– Hubs
– Switches


* Limit each packet to: límita el tamaño máximo de cada paquete capturado.

* Capture filter: sirve para asignar un filtro a la captura. Los filtros son útiles para mostrar sólo la información deseada, por ejemplo: paquetes enviados por la IP XX.XXX.XXX.XX, o sólo paquetes HTTP, etc.

* File: aquí especificamos el archivo donde serán guardados los
paquetes capturados. Es posible además separar los archivos cada vez que alcancen un tamaño, o cada cierto tiempo.

* Stop capture: nos sirve para detener automáticamente una
captura después de ciertas condiciones (tiempo, tamaño del archivo de captura y número de paquetes).



En las opciones de visualización (Display Options), es posible
configurar a Wireshark para:

* Actualizar el panel de paquetes cada vez que se capture uno (Update list of packets in real time)

* Realizar un scroll-down cada vez que se capture un paquete
(Automatic scrolling in live capture)

* Ocultar el diálogo de información de captura (Hide capture info dialog)

* Por último, las opciones de resolución de nombres (Name
resolution) le indican a Wireshark si debe o no intentar
resolver las direcciones MAC, el nombre de red y nombre del
tipo de transporte, de los paquetes capturados.

:::warnig ¿Porqué solamente veo los paquetes que envía y recibe mi equipo?

* Estás tratando de esnifar una red switcheada (que se conecta
mediante un switch, y no un hub)

* Estás conectado a un hub que está configurado como un switch
(mismo caso de arriba) No configuraste a Wireshark para que
esnifara en modo promiscuo (Capture packets in promiscuous
mode)

* En caso tal que la conexión de tu red esté detrás de un switch, no es posible que veas los paquetes que transmiten y reciben otros equipos. Esto no quiere decir que sea imposible hacerlo; lo más común a realizar en estos casos es un ataque Man in the Middle a través de un ARP Poisoning.

:::

### Filtros 

Permiten filtrar la información mostrada:

* Dirección IP   “ip.addr == x.x.x.x”
* Dirección MAC  “eth.addr == xx:xx:xx:xx:xx:xx”
* Protocolo ICMP “icmp”
* Puerto TCP     “tcp.port == x”
* Puerto UDP     “udp.port == x”
* Tamaño de TCP  “tcp.len > x && tcp.len < size="3“”

 