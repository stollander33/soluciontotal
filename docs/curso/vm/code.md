---
# This is the title of the article
title: VsCode
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
  - Herramientas
# A page can have multiple tags
tag:
  - VsCode

# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: false
# You can customize footer content
#footer: Instalación de requisitos previos 
# You can customize copyright content
#copyright: 
---

# Instalación

::: tabs#shell

@tab Debian/Ubuntu

- Obtenemos el paquete desde la página de Visual Code

```bash
wget https://az764295.vo.msecnd.net/stable/74b1f979648cc44d385a2286793c226e611f59e7/code_1.71.2-1663191218_amd64.deb
```

- Instalamos el paquete

```bash
sudo dpkg -i code_1.71.2-1663191218_amd64.deb
```

@tab RHEL / Fedora / CentOS
We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:
- importamos la key del repositorio
```sh
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```
- creamos la entrada del repositorio
```sh
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
```


Actualizamos el cache de los repositorios e instalamos el paquete usando **dnf** (Fedora 22 y superiores):


```bash
dnf check-update
sudo dnf install code
```
O versiones más viejas usando  **yum**:

```bash
yum check-update
sudo yum install code
```




