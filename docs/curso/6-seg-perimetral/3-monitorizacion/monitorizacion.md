---
title: Monitorización tráfico
index: true
order: 1
icon: creative
headerDepth: 0
---
 
* En esta unidad vamos a aprender a conocer qué está pasando en nuestra red, qué están haciendo esos usuarios autorizados. 

* Para este fin necesitaremos espiarnos a nosotros mismos, buscando garantizar la disponibilidad de la red (localizaremos enlaces saturados) y detectar ataques en curso.


Vamos a procesar el tráfico de nuestra red mediante dos tipos de técnicas:


::: tabs#monit

@tab a alto nivel

- Se limita a tomar medidas agregadas, los llamados contadores. Por ejemplo, total de bytes enviados o recibidos en un interfaz, agrupados por puerto de origen o destino. 

- Es habitual en las empresas porque:
  * Resulta fácil de activar en toda la red dado que son los propios equipos los que facilitan esta información sobre sus interfaces.
  * Genera relativamente poca información para transmitir y procesar.
  * Es suficiente para conocer la disponibilidad de la red o el tipo de tráfico que transita. Por ejemplo, conocer el porcentaje de tráfico HTTP de nuestra red nos puede llevar a instalar un proxy.


@tab a bajo nivel

* captura todos los paquetes que transitan por una interfaz (**sniffer de red**). Los paquetes solo son leídos, no interceptados. 

* Aunque esta información es mucho más rica que los simples contadores, la captura ==es muy costosa== de activar ==en toda la red==, porque se ==dispara la cantidad de información== que hay que ==transmitir y procesar== 
:::


## Herramientas

::: tabs#tools

@tab Linux

* **tcpdump**: permite hacer un volcado de todo el tráfico que llega a una tarjeta de red



@tab Windows


Instalamos el paquete:

:::
