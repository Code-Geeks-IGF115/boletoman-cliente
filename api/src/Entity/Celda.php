<?php

namespace App\Entity;

use App\Repository\CeldaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CeldaRepository::class)]
class Celda
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $fila = null;

    #[ORM\Column]
    private ?int $columna = null;

    #[ORM\Column]
    private ?int $cantidadMesas = null;

    #[ORM\Column]
    private ?int $cantidadButacas = null;

    #[ORM\ManyToOne(inversedBy: 'celdas')]
    private ?CategoriaButaca $categoriaButaca = null;

    #[ORM\OneToMany(mappedBy: 'celda', targetEntity: Butaca::class, orphanRemoval: true)]
    private Collection $butacas;

    public function __construct()
    {
        $this->butacas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFila(): ?int
    {
        return $this->fila;
    }

    public function setFila(int $fila): self
    {
        $this->fila = $fila;

        return $this;
    }

    public function getColumna(): ?int
    {
        return $this->columna;
    }

    public function setColumna(int $columna): self
    {
        $this->columna = $columna;

        return $this;
    }

    public function getCantidadMesas(): ?int
    {
        return $this->cantidadMesas;
    }

    public function setCantidadMesas(int $cantidadMesas): self
    {
        $this->cantidadMesas = $cantidadMesas;

        return $this;
    }

    public function getCantidadButacas(): ?int
    {
        return $this->cantidadButacas;
    }

    public function setCantidadButacas(int $cantidadButacas): self
    {
        $this->cantidadButacas = $cantidadButacas;

        return $this;
    }

    public function getCategoriaButaca(): ?CategoriaButaca
    {
        return $this->categoriaButaca;
    }

    public function setCategoriaButaca(?CategoriaButaca $categoriaButaca): self
    {
        $this->categoriaButaca = $categoriaButaca;

        return $this;
    }

    /**
     * @return Collection<int, Butaca>
     */
    public function getButacas(): Collection
    {
        return $this->butacas;
    }

    public function addButaca(Butaca $butaca): self
    {
        if (!$this->butacas->contains($butaca)) {
            $this->butacas->add($butaca);
            $butaca->setCelda($this);
        }

        return $this;
    }

    public function removeButaca(Butaca $butaca): self
    {
        if ($this->butacas->removeElement($butaca)) {
            // set the owning side to null (unless already changed)
            if ($butaca->getCelda() === $this) {
                $butaca->setCelda(null);
            }
        }

        return $this;
    }
}
