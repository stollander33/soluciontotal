---
title: Copias de seguridad
index: true
order: 2
icon: creative
---


Vamos a distinguir entre:

* Backup de datos: Copia de seguridad de los datos del usuario o empresa que están almacenados en un ordenador. Hay que hacerlo diariamente, incluso con más frecuencia, dependiendo de la actividad de la empresa.

* Imagen del sistema: Copia de seguridad de los programas (sistema operativo y aplicaciones) que están instalados en un ordenador.


El segundo paso es identificar los datos que tenemos que salvar. Aquí tenemos que distinguir entre:

– **Ficheros**. Pueden ser unidades enteras, la típica carpeta Mis Documentos, etc. Existe la complicación de detectar los ficheros que están siendo modificados precisamente cuando se ha lanzado la copia.

– **Sistemas complejos**, como las bases de datos, donde la concurrencia de cambios suele ser mucho más alta que con ficheros, porque una operación afecta a varias tablas. Por este motivo, los servidores de base de datos ==tienen sus propios mecanismos de exportación del contenido de las tablas==.

## Tipos de copias

Hay tres tipos de copia:

* **Completa**: ==Incluye toda la información identificada==. Si era una unidad de disco, todos los archivos y carpetas que contiene; si era una base de datos, la exportación de todas sus tablas.

* **Diferencial**: ==Incluye la información que ha cambiado desde la última copia de seguridad completa==. 

* **Incremental**: ==Incluye toda la información que ha cambiado desde la última copia de seguridad==(completa o incremental). 

## Imagen del sistema

La imagen del sistema no es tan importante como los datos, porque en último extremo podríamos instalar desde cero, con el CD/DVD del sistema operativo, las aplicaciones necesarias, y después aplicaríamos la configuración necesaria. 

La imagen de un sistema es un volcado del contenido del todo el disco duro: ejecutables y datos del sistema operativo, ejecutables y datos de las aplicaciones instaladas y datos personales de los usuarios. 

- Generalmente se comprime en un único fichero cuyo tamaño dependerá del tamaño del disco, la ocupación y el tipo de contenidos. 

- Ese fichero suele estar cifrado y se almacena lejos del sistema original, como hacemos con las cintas del backup.

