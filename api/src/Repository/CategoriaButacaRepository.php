<?php

namespace App\Repository;

use App\Entity\CategoriaButaca;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategoriaButaca>
 *
 * @method CategoriaButaca|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoriaButaca|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoriaButaca[]    findAll()
 * @method CategoriaButaca[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriaButacaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoriaButaca::class);
    }

    public function save(CategoriaButaca $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategoriaButaca $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CategoriaButaca[] Returns an array of CategoriaButaca objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategoriaButaca
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
