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
*6. iniciar Servidor*
```
symfony server:start
```
*7. recuperar parametros del request*
```
$parametro=$request->get('parametro');
$parametro=$request->get('parametro','valorPorDefecto');
```
*8. agregar servicio a controller*

_alternativa 1: Contructor_
```
private $logger;
public function __contruct(LoggerInterface $logger)
{
    $this->logger=$logger;
}

public function miController(Request $request)
{
    $this->logger->info("mensaje");
    //revisar var/log/
}
```
_alternativa 2: Argumentos_
```
public function miController(Request $request,LoggerInterface $logger)
{
    $this->logger->info("mensaje");
    //revisar var/log/
}
```
*9. Crear Crud Controlador*
```
symfony console make:crud EntityName
```
*10. Bundles*
```
composer require symfony/orm-pack
composer require symfony/maker-bundle --dev
composer require symfony/security-bundle
composer require twig
composer require symfony/form
composer require symfony/validator doctrine/annotations
composer require symfony/serializer-pack
composer require sensio/framework-extra-bundle

composer require symfonycasts/verify-email-bundle symfony/mailer
composer require mailgun-mailer
```
*11. Comandos Terminal*
```
symfony console make:user
symfony console make:auth
symfony console make:registration-form
```


**BUG**

En caso de que por error activen el soporte TLS pueden reconstruir el contenedor o pegar la siguiente url
para activar que confie en los certicados self-signed para localhost
```
chrome://flags/#allow-insecure-localhost
```
Seleccionar Habilitar o Enable en Allow invalid certificates for resources loaded from localhost