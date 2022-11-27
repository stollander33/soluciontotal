---
# This is the title of the article
title: Instalación y configuración
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: Stollander
# Set writing time
#date: 2020-01-01
# A page can have multiple categories
category:
  - Curso
# A page can have multiple tags
tag:
  - Configuración

# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: false
# You can customize footer content
#footer: Instalación de requisitos previos 
# You can customize copyright content
#copyright: 
---

Antes de comenzar este curso, debemos de tener un entorno de trabajo adecuado a nuestras necesidades.

## Requisitos

* Maquina virtual: en este caso y para comenzar suave es un Fedora 26 WorkStation

* Visual Code instalado

El motor de virtualización utilizado será  <Badge text="QEMU/KVM"/> + <Badge text="libvirt"/>.

::: tip Instalación Libvirt y KVM

- Sigue esta guia para instalarlo en Debian,  **relative links** (i.e.: starting with `./`) for them.

:::


## Maquina virtual

La máquina necesitará:

- [Prosody - XMPP server](./vm/prosody.md)
- [Sparta - Network Tool](./vm/sparta.md)
- [Nvm y NodeJs](./vm/nvm.md)


