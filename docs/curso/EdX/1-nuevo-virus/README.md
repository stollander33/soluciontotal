---
title: EDX - Tutor
index: true
order: 1
icon: creative
---

## Instalando con Tutor

Tutor es la distribución oficial de **Open edX** basada en **Docker** , tanto para producción como para desarrollo local. 

El objetivo de Tutor es facilitar la implementación, personalización, actualización y escala de Open edX. Tutor es confiable, rápido, extensible y ya se usa para implementar cientos de plataformas Open edX en todo el mundo.

## Instalar Tutor con pip 

1. Instale la última versión estable de Tutor desde pip:

```bash
pip install "tutor[full]"
```

2. Ejecutar Tutor
```bash
tutor local quickstart
```
:::tip instalación local
En la instalación se configuran los siguiente dominios

>   LMS_HOST = local.overhang.io
>   CMS_HOST = studio.local.overhang.io
>   ENABLE_HTTPS = False

* Añadir los hosts al fichero **/etc/hosts**

:::    

