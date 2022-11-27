---
title: NFS
author: stollander
tags:
  - almacenamiento

categories:
  - almacenamiento
postImage: /images/typescript.webp
---

1. Listar los bloques (discos):

Isblk

2. Crear particiones:
fdisk /dev/(nombre del disco)

3. Crear el volumen fisico del LVM:
pvcreate /dev/(nombre del disco)

4. Crear el grupo de volumenes de LVM:
vgcreate VG_(nombre del grupo) /dev/(nombre del disco)

5. Crear el volumen ldgico y asignar el tamafno:

Ivcreate -L (tamano)G -n LV_(nombre del volumen) VG_(nombre
del grupo)

6. Crear el punto de montaje donde deseemos con mkdir.

7. Asignar un tipo de sistema de archivo al volumen ldgico:

mkfs -t (sistema de archivo) /dev/mapper/VG_(nombre del
grupo)- LV_(nombre del volumen)

8. Montar de forma temporal el volumen ldgico:

mount /dev/mapper/VG_(nombre del grupo)-LV_(nombre del
volumen) (punto de montaje)

0. Montar de forma permanente el volumen Idgico:

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