<?php

namespace App\Repository;

use App\Entity\SalaDeEventos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SalaDeEventos>
 *
 * @method SalaDeEventos|null find($id, $lockMode = null, $lockVersion = null)
 * @method SalaDeEventos|null findOneBy(array $criteria, array $orderBy = null)
 * @method SalaDeEventos[]    findAll()
 * @method SalaDeEventos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SalaDeEventosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SalaDeEventos::class);
    }

    public function save(SalaDeEventos $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SalaDeEventos $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return SalaDeEventos[] Returns an array of SalaDeEventos objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SalaDeEventos
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
