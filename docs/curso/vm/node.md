---
# This is the title of the article
title: NodeJs
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
  - Instalación
  - Nodejs

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

En determinadas ocasiones, será interesante poder disponer de distintas versiones de node.

Para ello es recomendable usar NVM (Node Version Manager)

## Instalar Nvm
Para instalar o uptualizar **nvm**, debes de ejecutar el script de instalación.

Para esto deberas descargarlo manualmente o utlizar uno de los **siguientes comandos**:
 

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```


::: tip ¿que hace el script?
El script clona el repositorio de nvm en **~/.nvm**, y añade unas lineas en los archivos de configuracion del usuario (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).
:::

- Para activar nvm deberas ejecutar:
```bash
source ~/.bashrc
```

- Para comprobar que todo esta funcionando, comprobaremos la version instalada
```bash 
nvm --version
0.39.1
```

- Instalaremos una versión de Node
```bash
nvm install 16
```

## Comprobando la versión instalada
Y lo comprobamos:

```bash
node -v
v16.17.0
```

