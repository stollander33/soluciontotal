---
title: LVM
author: stollander
tags:
  - almacenamiento

categories:
  - almacenamiento
postImage: /images/typescript.webp
---

## Discos y particiones



### Listar los discos disponibles

```bash
Isblk
```

### Crear particiones necesarias

```bash
fdisk /dev/(nombre_disco)
```

## Creación del volumen fisico

```bash
pvcreate /dev/(nombre_disco)
```

## Creación del grupo de volumen

```bash
vgcreate VG_(nombre_grupo) /dev/(nombre_disco)
```

## Crear el volumen ldgico

```bash
Ivcreate -L (tamano)G -n LV_(nombre_volumen) VG_(nombre_grupo)
```

### Asignar un tipo de sistema de archivos:

```shell
mkfs -t (sistema_archivos) /dev/mapper/VG_(nombre_grupo)- LV_(nombre_volumen)
```

### Montaje de los discos

* Crear el punto de montaje donde deseemos.

#### Montar de forma temporal el volumen ldgico:

mount /dev/mapper/VG_(nombre del grupo)-LV_(nombre del
volumen) (punto de montaje)

#### Montar de forma permanente el volumen Idgico:

> Crear una copia de trabajo para restablecer el fstab en caso de
error:
```sh
cp /etc/fstab /etc/BK_fstab
```

- Enviamos el UUID del volumen ldgico al fstab para su montaje
definitivo:

blkid /dev/VG_(nombre del grupo)-LV_(nombre del
volumen) >> /etc/fstab

- Editaremos el fstab para que quede asi:

UUID=335a5e5e-42af-4dcd-a31e-b463e8491dd2 (punto de montaje) (sistema de archivos) defaults 00

- Comprobamos que el fstab no tenga errores usando el comando
mount -a
Creamos los usuarios para el NFS y les asignamos una contrasena en
/home usando el comando adduser.

Listamos los directorios "home" de los usuarios.

Movemos el directorio "home" de cada usuario del NFS al punto de
montaje.