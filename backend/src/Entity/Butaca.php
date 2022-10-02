<?php

namespace App\Entity;

use App\Repository\ButacaRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ButacaRepository::class)]
class Butaca
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    private ?string $codigoButaca = null;

    #[ORM\Column(length: 10)]
    private ?string $disponible = null;

    #[ORM\Column(nullable: true)]
    private ?int $mesa = null;

    #[ORM\ManyToOne(inversedBy: 'butacas')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Celda $celda = null;

    #[ORM\ManyToOne(inversedBy: 'butacas')]
    private ?DetalleCompra $detalleCompra = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodigoButaca(): ?string
    {
        return $this->codigoButaca;
    }

    public function setCodigoButaca(string $codigoButaca): self
    {
        $this->codigoButaca = $codigoButaca;

        return $this;
    }

    public function getDisponible(): ?string
    {
        return $this->disponible;
    }

    public function setDisponible(string $disponible): self
    {
        $this->disponible = $disponible;

        return $this;
    }

    public function getMesa(): ?int
    {
        return $this->mesa;
    }

    public function setMesa(?int $mesa): self
    {
        $this->mesa = $mesa;

        return $this;
    }

    public function getCelda(): ?Celda
    {
        return $this->celda;
    }

    public function setCelda(?Celda $celda): self
    {
        $this->celda = $celda;

        return $this;
    }

    public function getDetalleCompra(): ?DetalleCompra
    {
        return $this->detalleCompra;
    }

    public function setDetalleCompra(?DetalleCompra $detalleCompra): self
    {
        $this->detalleCompra = $detalleCompra;

        return $this;
    }
}
