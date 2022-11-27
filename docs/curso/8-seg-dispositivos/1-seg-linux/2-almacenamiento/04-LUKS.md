---
title: LUKS
author: stollander
tags:
  - luks

categories:
  - almacenamiento
postImage: /images/typescript.webp
---


- Instalar los médulos criptograficos de LUKS cryptsetup.

- Crear una particion en el disco que se desea habilitar para medio encriptado con fdisk.

- Gestionar/habilitar el medio como encriptado usando luksOpen.

- Formatear el medio encriptado usando luksFormat.

- Montar el dispositivo encriptado en /etc/crypttab y en /etc/fstab.
