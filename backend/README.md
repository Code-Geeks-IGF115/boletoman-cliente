Universidad Nacional de El Salvador
-----------------------------------
Colaboración Programación III e Ingeniería de Software
------------------------------------------------------
Ciclo II-2022
-------------
Ejercicio de Introducción 
=========================
**Commandos**

*1. crear nuevo controller*
```
symfony console make:Controller <ClassName>Controller
```

*2. crear clase*
```
symfony console make:Entity <ClassName>
```

*3. crear base de datos*
```
symfony console doctrine:database:create
```
*4. hacer migracion*
```
symfony console make:migration
```
*5. migrar*
```
symfony console doctrine:migrations:migrate
```
**BUG**

En caso de que por error activen el soporte TLS pueden reconstruir el contenedor o pegar la siguiente url
para activar que confie en los certicados self-signed para localhost
```
chrome://flags/#allow-insecure-localhost
```
Seleccionar Habilitar o Enable en Allow invalid certificates for resources loaded from localhost