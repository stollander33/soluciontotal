---
title: RAID, rendimiento y redundancia
author: stollander
tags:
  - almacenamiento
  - RAID

categories:
  - almacenamiento
postImage: /images/typescript.webp
headerDepth: 0
---

Los ordenadores pueden conectar varios discos internos porque las placas base suelen traer integrada una **controladora de discos** para dos o tres conexiones. 

Y si pinchamos más controladoras, podremos conectar más dispositivos. Pero ¿==para qué queremos varios discos en un ordenador==? 


Podemos aprovechar varios discos de un ordenador para:
* *Crear **unidades más grandes**. Dos discos de 500 GB juntos nos pueden dar una unidad de 1 TB. Con tres discos tenemos 1,5 TB, etc. 


* Crear **unidades más rápidas**. Si tenemos dos discos de 500 GB y configuramos el sistema para que, en cada fichero, los bloques pares se escriban en un disco y los impares en otro, después podremos hacer lecturas y escrituras en paralelo (en el mejor caso, ahorramos la mitad de tiempo). 

* Crear **unidades más fiables**. Si configuramos los dos discos anteriores para que, en cada fichero, los bloques se escriban a la vez en ambos discos, podemos estar tranquilos porque, si falla un disco, los datos estarán a salvo en el otro.


## Niveles de RAID.

Los más importantes son:

* **RAID 0**. Agrupamos discos para tener un disco más grande, incluso más rápido. Los bloques que lleguen al disco **RAID 0** se escribirán en alguno de los discos del grupo. 

> ##En el RAID 0 podemos elegir entre spanning y striping (que es lo más común). En cualquier caso, ===si falla uno de los discos, lo perdemos todo===.


* **RAID 1**. Se le suele llamar mirror o espejo. Agrupamos discos por parejas, de manera que cada bloque que llegue al disco RAID 1 se escribirá en los dos discos a la vez. 

Si falla uno de los discos, no perdemos la información, porque estará en el otro. A cambio, sacrificamos la mitad de la capacidad (el usuario ha conectado dos discos de 500 GB y solo tiene disponibles 500 GB, en lugar de 1 TB) y no ganamos rendimiento.

* **RAID 5**. el RAID 0 es más rápido, pero tan seguro como cualquiera de ellos. El RAID 1 es más seguro que los discos por separado, pero con el mismo rendimiento. El RAID 5 consigue ambas cosas con dos mecanismos:

– Para cada dato que el sistema quiere almacenar en el RAID, este aplica un procedimiento matemático (en general, la paridad) para obtener información complementaria a ese dato, de tal manera que se puede recuperar el dato en caso de perder cualquier disco (sea disco de datos o paridad).

– Una vez obtenida la paridad, se hace striping para repartir el dato y su paridad por los discos conectados al RAID.




Procedimiento para generar un sistema de discos RAID

*  Particionar los discos para el RAID:

```bash
fdisk /dev/(nombre del disco)
```


* Formatear los discos:

```bash
mkfs -t (tipo) /dev/(nombre del disco)
```

* Gestion del conjunto:

```bash
mdadm -v -C /dev/(nombre del conjunto) -l (nivel) -n (nodiscos)
/dev/(nombre del disco) /dev/(nombre del disco)
```

* Montamos de forma temporal con el comando mount.

* Montamos definitivamente introduciendo el UUID del conjunto en fstab.
