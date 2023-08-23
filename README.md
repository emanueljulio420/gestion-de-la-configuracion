# Calculadora
El un proyecto sencillo de una calculadora en una aplicación web en la cual se pueden realizar operaciones básicas como la suma, resta, multiplicación y división al igual de poder visualizar todas las operaciones realizadas anteriormente junto con su resultado y fecha de realización.
## Ejecución en una maquina local

Para la ejecución del proyecto en una maquina local se necesita una serie de pasos para la instalación y ejecución.

### Requisitos previos

Antes de empezar con la instalación del proyecto en cualquier equipo es necesario tener algunos requisitos previos como:
-	Node.js ([ enlace de descarga de node.js ](https://nodejs.org/en/download))
-	Git ([ enlace de descarga de git ](https://git-scm.com/downloads))
-	MongoDB Compass ([ enlace de descarga de MongoDB compass ](https://www.mongodb.com/try/download/community)), después de la instalación inicializar la aplicación y crear una nueva conexión y verificar que la url esta sea esta “mongodb://localhost:27017”.

Ya con las aplicaciones anteriormente instaladas comenzamos con los pasos para poder instalar el proyecto en cualquier maquina

>*Nota:* Cualquier instrucción o comando ingresada en el símbolo del sistema debe de ser ejecutada oprimiendo ENTER al terminar la instrucción o comando 

1.	Abrimos el símbolo del sistema
2.	Nos ubicamos en donde deseamos que quede guardado el proyecto
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

6.	Entramos en la carpeta en donde se encuentra el backend con “cd backend”
7.	Utilizamos el comando “npm install” para instalar las dependencias necesarias del backend
8.	Inicializamos el backend con “node server.js”
9.	Abrimos otra ventana del símbolo del sistema y nos ubicamos dentro del repositorio clonado
10.	Ingresamos el comando “cd calculadora” para poder ingresar en el frontend del proyecto
11.	Utilizamos el comando “npm install” para instalar las dependencias necesarias del frontend
12.	Inicializamos el frontend con “npm start”.

Con la finalización del último paso el proyecto se desplegará en un servidor local el cual se puede ingresar desde cualquier buscador, con esta url http://localhost:3000

