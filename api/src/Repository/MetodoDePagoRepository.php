<?php

namespace App\Repository;

use App\Entity\MetodoDePago;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MetodoDePago>
 *
 * @method MetodoDePago|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetodoDePago|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetodoDePago[]    findAll()
 * @method MetodoDePago[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetodoDePagoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetodoDePago::class);
    }

    public function save(MetodoDePago $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MetodoDePago $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MetodoDePago[] Returns an array of MetodoDePago objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MetodoDePago
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
