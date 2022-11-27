---
title: Definiciones
index: true
icon: creative
order: 3
---

:::tip Precisión en el lenguaje
Es muy importante ser precisos cuando utilizamps el lenguaje. Por ell para fijar los conceptos relacionados con la seguridad informática vamos a intentar elaborar un pequeño diccionario. 
:::

## * Seguridad física/lógica, activa/pasiva
La seguridad física cubre todo lo referido a los equipos informáticos: ordenadores de propósito general, servidores especializados y equipamiento de red. La seguridad lógica se refiere a las distintas aplicaciones que ejecutan en cada uno de estos equipos.

Las amenazas contra la seguridad física son:

* **Desastres naturales** (incendios, inundaciones, hundimientos, terremotos). Los tenemos en cuenta a la hora de ubicar el emplazamiento del centro de proceso de datos (CPD)

* **Robos**. Nuestros equipos, y sobre todo la información que contienen, resultan valiosos para otros individuos u  organizaciones. 

> Debemos proteger el acceso a la sala del CPD mediante múltiples medidas de seguridad: vigilantes, tarjetas de acceso, identificación mediante usuario y contraseña, etc.

* **Fallos de suministro**. Los ordenadores utilizan corriente eléctrica para funcionar y necesitan redes externas para comunicar con otras empresas y con los clientes. Estos servicios los contrataremos con determinados suministradores, pero ==debemos estar
preparados== para las ocasiones en que no puedan proporcionarlo: 

> * unas baterías o un grupo electrógeno por si falla la corriente
> * una segunda conexión a Internet 


Las **amenazas contra la seguridad lógica** son:

* **Virus**, troyanos y malware en general. Como ocurre con el spam en el correo electrónico, el malware es software no deseado y que debemos eliminar.

* **Pérdida de datos**. Un defecto en el código fuente de una aplicación, o una configuración defectuosa de la misma, puede ocasionar modificaciones inexplicables en la información almacenada, incluso la pérdida de datos. 

* **Ataques a las aplicaciones de los servidores**. Los hackers intentarán entrar a por los datos aprovechando cualquier vulnerabilidad del sistema operativo o de las aplicaciones que ejecutan en esa máquina (por eso conviene tener instalado el software mínimo imprescindible).


## * Confidencialidad

La **confidencialidad** intenta que la información ==solo sea utilizada por las personas o máquinas debidamente autorizadas==. Para garantizar la confidencialidad necesitamos disponer de tres tipos de mecanismos:

* **Autenticación**. La autenticación intenta confirmar que una persona o máquina es quien
dice ser, que no estamos hablando con un impostor.

* **Autorización**. Una vez autenticado, los distintos usuarios de la información tendrán distintos privilegios sobre ella. Básicamente dos: ==solo lectura==, o ==lectura y modificación==.

* **Cifrado**. La información estará cifrada para que sea inútil para cualquiera que no supere la autenticación.


## * Integridad

El objetivo de la integridad es que los datos queden almacenados tal y como espera el usuario: ==que no sean alterados== sin su consentimiento. 

Un ejemplo sería el identificador de la cuenta bancaria, que tiene cuatro grupos de números:

- Cuatro dígitos del código del banco.
- Cuatro dígitos del código de la sucursal del banco donde hemos abierto la cuenta.
- Dos dígitos de control.
- Diez dígitos para el código de la cuenta, dentro de todas las abiertas en esa sucursal.
- Los dígitos de control se obtienen por combinación numérica de los otros 18 números.

:::info
Esa combinación es una operación matemática que nos asegura que cualquier pequeño cambio en alguno de los 18 números generaría unos dígitos de control distintos. 
:::

Es decir, si queremos hacer una transferencia bancaria por teléfono y, al dictar el número de cuenta, cambiamos sin querer alguno de los dígitos (da igual cualquiera de los 20), quien apunta ese número de cuenta no podrá operar con ella porque es un número inválido, ya que los dígitos de control no corresponden a los otros 18.


## * Disponibilidad

La disponibilidad intenta ==que los usuarios puedan acceder a los servicios con normalidad== en el horario establecido. Para ello se invierte en sobredimensionar los recursos:

* Una tienda tiene dos datáfonos con dos bancos distintos. Así siempre puede ofrecer el cobro por tarjeta.

* Un equipo de fútbol tiene varios suplentes en el banquillo. Así siempre puede intentar mantener once jugadores cuando alguno se lesiona.
* Los aviones llevan piloto y copiloto.
* Cuando se hacen obras entre dos estaciones de metro, hay una línea de autobuses que lleva de una a otra por superficie, y el ticket es el mismo.

## * No repudio

El no repudio se refiere a que, **ante una relación entre dos partes**, **intentaremos evitar** que cualquiera de ellas ==pueda negar que participara== en esa relación. 

==EJEMPLOS==

* Los contratos se firman por las dos partes. Por ejemplo, la hipoteca de una casa.
* Firmamos el impreso de matriculación en un ciclo formativo.
* En algunas tarjetas de crédito hay que firmar un papel con los datos de la compra, y la tienda se queda una copia.
* Conservamos el ticket de compra para poder solicitar la devolución.
* Cuando hacemos una reserva de vuelo obtenemos un localizador; a la hora de retirar el billete no pueden negar que hicimos la reserva.


### CASO PRÁCTICO

:::tip Comprobación de integridad en Linux
* Duración  :  10 minutos
* Dificultad:  Fácil
* Objetivo:  Utilizar la suma de comprobación de ficheros.
* Material. Ordenador con GNU Linux
:::

1. En Linux el comando **sum** permite obtener de un fichero el equivalente al dígito de control de la cuenta bancaria. Si  modificamos el fichero, el valor devuelto por sum cambia. 

```bash 
echo esto es una prueba > a
sum a
>  01578 
echo mas >>a
sum a
>  00204 
```

## * Sabes-tienes-eres

La autenticación es especialmente importante en temas de seguridad. Debemos estar muy seguros de la identidad de la persona o sistema que solicita acceder a nuestra información. 

Un esquema muy utilizado para analizar la autenticación es clasificar las medidas adoptadas según tres criterios:

* **Algo que sabes**: es necesario conocer alguna palabra secreta: la ==típica contraseña==.
* **Algo que tienes**: es imprescindible aportar algún elemento material: generalmente ==una tarjeta==.
* **Algo que eres**: El sistema solicita reconocer alguna característica física del individuo (==biometría==): huella dactilar, escáner de retina, reconocimiento de voz, etc.

:::tip 
La autenticación será más fiable cuantos más criterios distintos cumpla
:::


## Vulnerabilidad: 
Debilidad en un activo o control que puede ser aprovechado por uno o más agentes externos.

## Amenaza:
Causa potencial de un incidente no deseado que puede resultar en daños a un sistema u organización.

## Ataque:
Intento de destruir, exponer, alterar, inutilizar, robar, obtener acceso no autorizado o hacer uso indebido de los activos.