---
title: Tipos de ataques
index: true
icon: creative
order: 5
headerDepth: 1
---

Una vez que alguien está decidido a atacarnos, puede elegir alguna de estas formas:

* **Interrupción**: El ataque consigue provocar un corte en la prestación de un servicio: el servidor web no está disponible, el disco en red no aparece o solo podemos leer (no escribir), etc.

* **Interceptación**: El atacante ha logrado acceder a nuestras comunicaciones y ha copiado la información que estábamos transmitiendo.

* **Modificación**: Ha conseguido acceder, pero, en lugar de copiar la información, la está modificando para que llegue alterada hasta el destino y provoque alguna reacción anormal. Por ejemplo, cambia las cifras de una transacción bancaria.


* **Fabricación**: El atacante se hace pasar por el destino de la transmisión, por lo que puede tranquilamente conocer el objeto de nuestra comunicación, engañarnos para obtener información valiosa, etc.


Para conseguir su objetivo puede aplicar una o varias de estas técnicas:

* **Ingeniería social**: A la hora de poner una contraseña, los usuarios no suelen utilizar combinaciones aleatorias de caracteres. En cambio, recurren a palabras conocidas para ellos: el mes de su cumpleaños, el nombre de su calle, su mascota, su futbolista
favorito, etc. Si conocemos bien a esa persona, podemos intentar adivinar su contraseña.

También constituye ingeniería social pedir por favor a un compañero de trabajo que introduzca su usuario y contraseña, que el nuestro parece que no funciona. En esa sesión podemos aprovechar para introducir un troyano, por ejemplo.

* **Phishing**: El atacante se pone en contacto con la víctima (generalmente, un correo electrónico) haciéndose pasar por una empresa con la que tenga alguna relación (su banco, su empresa de telefonía, etc.). En el contenido del mensaje intenta convencer-
le para que pulse un enlace que le llevará a una (falsa) web de la empresa. En esa web le solicitarán su identificación habitual y desde ese momento el atacante podrá utilizarla.

* **Keyloggers**: Un troyano en nuestra máquina puede tomar nota de todas las teclas que pulsamos, buscando el momento en que introducimos un usuario y contraseña. Si lo consigue, los envía al atacante.

* **Fuerza bruta**: Las contraseñas son un número limitado de caracteres (letras, números y signos de puntuación). Una aplicación malware puede ir generando todas las combinaciones posibles y probarlas una a una; tarde o temprano, acertará.


:::tip Contramedidas contra la fuerza bruta
– Utilizar **contraseñas fuertes**. No utilizar nada personal e insertar en medio de la palabra o al final un número o un signo de puntuación. En algunos sistemas nos avisan de la fortaleza de la contraseña elegida.

– **Cambiar la contraseña** con frecuencia (un mes, una semana). Dependiendo del hardware utilizado, los ataques pueden tardar bastante; si antes hemos cambiado la clave, se lo ponemos difícil.

– **Impedir ráfagas de intentos repetidos**. Nuestro software de autenticación que solicita usuario y contraseña fácilmente puede detectar varios intentos consecutivos en muy poco tiempo. No puede ser un humano: debemos responder ==introduciendo una espera==. 
:::