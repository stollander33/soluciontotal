---
title: RAID
author: stollander
tags:
  - almacenamiento
  - RAID

categories:
  - almacenamiento
postImage: /images/typescript.webp
headerDepth: 0
---


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
