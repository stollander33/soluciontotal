---
# This is the title of the article
title: Prosody
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
  - Servicios
# A page can have multiple tags
tag:
  - Instalación
  - Prosody

# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
#footer: Instalación de requisitos previos 
# You can customize copyright content
#copyright: 
---

# Instalación

::: tabs#shell

@tab debian

todo

@tab centos

Es necesario que epel-release este instalado:

```bash
sudo yum install epel-release -y
sudo yum update -y
```

Instalamos el paquete:

```bash
sudo yum install prosody -y
```

:::
