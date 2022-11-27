---
title: Ataques TCP/IP. MITM
index: true
order: 0
icon: creative
category:
  - Ataques
---

* La familia de protocolos TCP/IP se diseñó a **principios de los años setenta**. 

* Las limitaciones del hardware de esa época **orientaron el diseño hacia la fiabilidad más que hacia la seguridad**


## ¿Como funciona?

En una comunicación entre dos equipos aparece un tercero que consigue que los paquetes intercambiados pasen por él. 

Desde ese momento puede leer todo el tráfico (ataque de interceptación) o, lo que resulta más peligroso, alterar los datos para su beneficio (ataque de modificación).

El atacante puede interponerse en el tráfico entre origen y destino de dos maneras:

:::info Por hardware
* El atacante tiene acceso directo a un elemento de red que forma parte del camino entre el origen y el destino. 

==Ejemplo==: el cable que conectaba el origen con su switch de planta ahora pasa por la máquina del atacante.
::: 

:::info Por software
* El atacante consigue que el origen crea que él es el destino, y también consigue que el destino crea que él es el origen. 
* Es mucho más simple que el anterior porque no hace falta tener acceso físico a los equipos.
* Es fácil activar y desactivar el ataque a voluntad.
* Por tanto, es más difícil detectarlo.
:::

## Ejecutar el ataque 


## Contramedidas

* Los ataques MITM son difíciles de evitar. 

* Una primera idea es utilizar en todas las máquinas tablas ARP estáticas, renunciando al protocolo dinámico. Parece sencillo, pero supone mucho trabajo de mantenimiento

* Es más razonable controlar el acceso a nuestra red: si el atacante no puede conectar su equipo, no podrá lanzar paquetes maliciosos. 

* También es interesante utilizar, siempre que sea posible, protocolos seguros con infraestructura de clave pública (PKI). 

* Encontrar asignaciones duplicadas debe hacernos sospechar.

* Puede ser relativamente fácil detectar un ataque MITM de tipo ARP (utiliza paquetes broadcast, que llegan a todos los equipos de la red), la figura del intermediario se extiende a otros muchos protocolos. 

* En general, son susceptibles de ser atacados todos los protocolos donde no hay autenticación de los equipos que participan en la comunicación (recordar el concepto de seguridad extremo a extremo). 
