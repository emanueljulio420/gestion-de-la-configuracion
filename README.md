# Calculadora
Es un proyecto sencillo de una calculadora en una aplicación web en la cual se pueden realizar operaciones básicas como la suma, resta, multiplicación y división al igual de poder visualizar todas las operaciones realizadas anteriormente junto con su resultado y fecha de realización.

## Creacion del artefacto

Para la ejecución del proyecto en una maquina local se necesita una serie de pasos para la instalación y ejecución.

### Requisitos previos

Antes de empezar con la instalación del proyecto en cualquier equipo es necesario tener algunos requisitos previos como:
-	Node.js ([ enlace de descarga de node.js ](https://nodejs.org/en/download))
-	Git ([ enlace de descarga de git ](https://git-scm.com/downloads))
-	MongoDB Compass ([ enlace de descarga de MongoDB Community Server ](https://www.mongodb.com/try/download/community)), después de la instalación inicializar la aplicación y crear una nueva conexión y verificar que la url esta sea esta “mongodb://localhost:27017”.

Ya con las aplicaciones anteriormente instaladas comenzamos con los pasos para poder instalar el proyecto en cualquier maquina

>*Nota:* Cualquier instrucción o comando ingresada en el símbolo del sistema si no sabes que es simbolo de sistema puedes tambien (Ejecutar” ([Windows] + [R]) permite abrir cualquier programa de Windows mediante la introducción de su nombre. Teclea “cmd” en este cuadro y pulsa “OK” para abrir cmd.exe) cabe recalcar que todas la operaciones deben de ser ejecutadas oprimiendo ENTER al terminar la instrucción o comando. 

1.	Abrimos el símbolo del sistema
2.	Nos ubicamos en donde deseamos que quede guardado el proyecto("Para esto puedes crear una carpeta nueva en el escritorio con el nombre que quieras y luego con el comando cd Desktop o cd Escritorio este comando depende del idioma en el que esta tu maquina, luego de ejecutar esta instruccion ejecutamos cd "Nombre de la carpeta creada en el paso anterior")
3.	Clonamos el repositorio de github con el comando
   ~~~
git clone https://github.com/emanueljulio420/gestion-de-la-configuracion.git
~~~
5.	Ingresamos a la carpeta que se creó al clonar el repositorio con la instrucción
   ~~~
cd gestion-de-la-configuracion
~~~
7.	Pasamos a la rama correspondiente al codigo con la instruccion
   ~~~
git checkout emanuel_julio_lemos-sebastian_gonzalez_trujillo
~~~

En esta parte comenzaremos con la instalación de las dependencias necesarias del proyecto al igual que la inicialización del frontend y el backend

6.	Ingresamos el comando “cd calculadora” para poder ingresar en el frontend del proyecto(Parte grafica del proyecto)
7.	Utilizamos el comando “npm install” para instalar las dependencias necesarias del frontend
8. Creamos el artefacto con el comando “npm run build”
9. Luego instalamos unas dependencias para el despliegue local del frontend con “npm install –g serve”
10. Desplegamos el servidor local para poder visualizar el frontend con “server –s build”


Con la finalización del último paso el proyecto se desplegará en un servidor local el cual se puede ingresar desde cualquier buscador, con esta url http://localhost:3000

### Mas infomracion sobre el proyecto ([ Link ](https://github.com/emanueljulio420/gestion-de-la-configuracion/wiki/Calculadora))
