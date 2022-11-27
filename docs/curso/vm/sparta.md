---
# This is the title of the article
title: Sparta
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
  - Networks
# A page can have multiple tags
tag:
  - Sparta
  - Networks

# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
#footer: Instalación de requisitos previos 
# You can customize copyright content
#copyright: 
---
# Descripción
SPARTA es una aplicación GUI de Python que simplifica las pruebas de penetración de la infraestructura de red al ayudar al probador de penetración en la fase de escaneo y enumeración.

Le permite al evaluador ahorrar tiempo al tener acceso de apuntar y hacer clic a su kit de herramientas y al mostrar todos los resultados de la herramienta de una manera conveniente. Si se dedica poco tiempo a configurar comandos y herramientas, se puede dedicar más tiempo a analizar los resultados.

A pesar de las capacidades de automatización, los comandos y herramientas utilizados son totalmente personalizables ya que cada probador tiene sus propios métodos, hábitos y preferencias.


# Requisitos

Se recomienda utilizar **Kali Linux**, ya que tiene instaladas la mayoría de las herramientas; sin embargo, lo más probable es que SPARTA también funcione en sistemas basados ​​en Debian.

> Nosotros intentaremos hacer que funcione en Fedora :)


::: tabs#shell

@tab Kali/Debian

```bash
apt install python3-sqlalchemy python3-pyqt5 wkhtmltopdf \
    ldap-utils rwho rsh-client x11-apps finger \ 
    nmap hydra -y
```


@tab centos

todo

:::



# Instalación

```bash
cd /usr/share/
git clone https://github.com/secforce/sparta.git
```

Para disponer de sparta como comando, daremos **permisos de ejecución** y crearemos un enlace simbolico en **/usr/bin/sparta**

```bash
sudo chmod +x /usr/share/sparta/sparta
sudo ln -s /usr/share/sparta/sparta /usr/bin/sparta
```


