---
title: Principios de seguridad
index: true
icon: creative
order: 2
headerDepth: 1
---


### Objetivo 

* Ser capaces de determinar los riesgos que afectan a nuestros
recursos,
* Conocer las posibles salvaguardas, y poder implantarlas y
gestionarlas.

> **NO EXISTE LA SEGURIDAD ABSOLUTA**

# ¿Que es seguridad?

Característica que indica que un sistema esta libre de todo peligro, daño o riesgo.

:::tip FIABILIDAD: 
Probabilidad de que un sistema se comporte tal y como se espera de el
* **Confidencialidad**: Los objetos sólo pueden ser accedidos por actores autorizados y de una forma controlada.

* **Integridad**: Los objetos sólo pueden ser modificados por actores autorizados.

* **Disponibilidad**: Los objetos han de permanecer accesibles a los actores autorizados.

* **No repudio**: Un actor no puede negar lo que ha dicho.
:::


# ¿Que queremos proteger?

Protegemos recursos que forman parte del sistema:

### **Hardware**

* Es fundamental **que no se puedan sustraer**, ni el equipo entero ni alguna pieza del
mismo (===principalmente el disco duro===, pero también el dispositivo donde se hace la
copia de seguridad de ese disco).

* En el caso de ***los portátiles*** no podemos evitar que salgan de la empresa, porque los
trabajadores visitan las dependencias del cliente o se llevan trabajo a casa. Pero sí
debemos vigilar que esos ordenadores apliquen ===cifrado en el disco duro=== y tengan
===contraseñas fuertes=== actualizadas.

* Es importante que **no se puedan introducir nuevos equipos no autorizados**. Un hacker
no necesita romper la seguridad de un servidor si puede conectar a la red de la em-
presa un equipo suyo con el software adecuado para realizar el ataque. O si puede
introducir un troyano en algún ordenador de un empleado.

* Aplicaremos **mantenimiento preventivo** para evitar averías. Por ejemplo, en cada or-
denador, una vez al año, abrir la caja para limpiar los disipadores y los ventiladores,
porque el polvo acumulado puede anular su función de rebajar la temperatura del
sistema.

### **Software**

Los ordenadores de una empresa deben tener las aplicaciones estrictamente necesarias
para llevar a cabo el trabajo asignado: ni más ni menos. 

Debemos evitar instalar software extra por que puede tener vulnerabilidades que puedan dañar al sistema completo.


### **Datos**

Los datos son habitualmente el ==activo ‘informático’== más preciado en cualquier organización

Como hemos dicho antes, las máquinas y las aplicaciones se compran; pero los datos
de nuestra empresa son exclusivamente suyos. Hay que protegerlos por dos aspectos:

* Si desaparecen, la empresa no puede funcionar con normalidad.
* Si llegan a manos de la competencia, la estrategia empresarial y el futuro de la com-
pañía están en riesgo


Las empresas modernas responden al esquema de «oficina sin papeles»: están informatizados todos los datos que entran, los generados internamente y los que comunicamos al exterior. 

La infraestructura necesaria es amplia y compleja porque los niveles de segu-
ridad son elevados:

* Todos los equipos deben estar especialmente **protegidos contra software malicioso**
que pueda robar datos o alterarlos.

* **El almacenamiento debe ser redundante**: grabamos el mismo dato en más de un
dispositivo. En caso de que ocurra un fallo de hardware en cualquier dispositivo, no
hemos perdido la información.

* **El almacenamiento debe ser cifrado**. Las empresas manejan información muy sensible, tanto los datos personales de clientes o proveedores como sus propios informes, que pueden ser interesantes para la competencia. 

Si, por cualquier circunstancia, perdemos un dispositivo de almacenamiento (disco duro, pendrive USB, cinta de backup), los datos que contenga deben ser inútiles para cualquiera que no pueda descifrarlos.


### **Comunicaciones**

Los datos no suelen estar recluidos siempre en la misma máquina: en muchos casos salen
con destino a otro usuario que los necesita. 

Esa transferencia (correo electrónico, mensajería instantánea, disco en red, servidor web) también hay que protegerla. Debemos ==utilizar canales cifrados==, incluso aunque el fichero de datos que estamos transfiriendo ya esté cifrado (doble cifrado es doble obstáculo para el atacante).

Además de proteger las comunicaciones de datos, también es tarea de la seguridad informática ==controlar las conexiones a la red== de la empresa. 



El peligro también está en **la propia oficina**: no puede ser que ==cualquier visitante== entre
en nuestra red con solo conectar su portátil a una toma de la pared o ==a través del wifi
de la sala de espera==. 

:::tip 
Un hacker seguramente no conoce los usuarios y contraseñas de los administradores de cada máquina; pero puede introducir software malicioso que intente adivinarlo, aprovechar vulnerabilidades no resueltas en nuestras aplicaciones para desplegar gusanos que ralenticen el rendimiento de la red, etc.
:::

Un segundo objetivo de la supervisión de las comunicaciones **es evitar** la llegada de
**correo no deseado (spam)** y publicidad en general. 

- liberamos parte de la ocupación de la conexión a Internet
- reducimos la carga de los servidores de correo (así como la ocupación de disco)
- nuestros usuarios no sufrirán distracciones
- y evitamos ataques camuflados en esos correos.
