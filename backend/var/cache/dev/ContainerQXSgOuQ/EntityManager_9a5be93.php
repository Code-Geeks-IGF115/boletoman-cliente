<?php

namespace ContainerQXSgOuQ;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder29713 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer70cb2 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesbe5df = [
        
    ];

    public function getConnection()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getConnection', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getMetadataFactory', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getExpressionBuilder', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'beginTransaction', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getCache', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getCache();
    }

    public function transactional($func)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'transactional', array('func' => $func), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'wrapInTransaction', array('func' => $func), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'commit', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->commit();
    }

    public function rollback()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'rollback', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getClassMetadata', array('className' => $className), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'createQuery', array('dql' => $dql), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'createNamedQuery', array('name' => $name), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'createQueryBuilder', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'flush', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'clear', array('entityName' => $entityName), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->clear($entityName);
    }

    public function close()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'close', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->close();
    }

    public function persist($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'persist', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'remove', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'refresh', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'detach', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'merge', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getRepository', array('entityName' => $entityName), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'contains', array('entity' => $entity), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getEventManager', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getConfiguration', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'isOpen', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getUnitOfWork', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getProxyFactory', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'initializeObject', array('obj' => $obj), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'getFilters', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'isFiltersStateClean', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'hasFilters', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return $this->valueHolder29713->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer70cb2 = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder29713) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder29713 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder29713->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__get', ['name' => $name], $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        if (isset(self::$publicPropertiesbe5df[$name])) {
            return $this->valueHolder29713->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder29713;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder29713;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder29713;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder29713;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__isset', array('name' => $name), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder29713;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder29713;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__unset', array('name' => $name), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder29713;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder29713;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__clone', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        $this->valueHolder29713 = clone $this->valueHolder29713;
    }

    public function __sleep()
    {
        $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, '__sleep', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;

        return array('valueHolder29713');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer70cb2 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer70cb2;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer70cb2 && ($this->initializer70cb2->__invoke($valueHolder29713, $this, 'initializeProxy', array(), $this->initializer70cb2) || 1) && $this->valueHolder29713 = $valueHolder29713;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder29713;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder29713;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
