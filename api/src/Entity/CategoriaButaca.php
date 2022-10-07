<?php

namespace App\Entity;

use App\Repository\CategoriaButacaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriaButacaRepository::class)]
class CategoriaButaca
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $codigo = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: false)]
    private ?string $precioUnitario = null;

    #[ORM\Column(length: 25)]
    private ?string $nombre = null;

    #[ORM\ManyToOne(inversedBy: 'categoriaButacas')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SalaDeEventos $salaDeEventos = null;

    #[ORM\OneToMany(mappedBy: 'categoriaButaca', targetEntity: Celda::class)]
    private Collection $celdas;

    #[ORM\OneToMany(mappedBy: 'categoriaButaca', targetEntity: Descuento::class, orphanRemoval: true)]
    private Collection $descuentos;

    public function __construct()
    {
        $this->celdas = new ArrayCollection();
        $this->descuentos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodigo(): ?string
    {
        return $this->codigo;
    }

    public function setCodigo(string $codigo): self
    {
        $this->codigo = $codigo;

        return $this;
    }

    public function getPrecioUnitario(): ?string
    {
        return $this->precioUnitario;
    }

    public function setPrecioUnitario(?string $precioUnitario): self
    {
        $this->precioUnitario = $precioUnitario;

        return $this;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getSalaDeEventos(): ?SalaDeEventos
    {
        return $this->salaDeEventos;
    }

    public function setSalaDeEventos(?SalaDeEventos $salaDeEventos): self
    {
        $this->salaDeEventos = $salaDeEventos;

        return $this;
    }

    /**
     * @return Collection<int, Celda>
     */
    public function getCeldas(): Collection
    {
        return $this->celdas;
    }

    public function addCelda(Celda $celda): self
    {
        if (!$this->celdas->contains($celda)) {
            $this->celdas->add($celda);
            $celda->setCategoriaButaca($this);
        }

        return $this;
    }

    public function removeCelda(Celda $celda): self
    {
        if ($this->celdas->removeElement($celda)) {
            // set the owning side to null (unless already changed)
            if ($celda->getCategoriaButaca() === $this) {
                $celda->setCategoriaButaca(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Descuento>
     */
    public function getDescuentos(): Collection
    {
        return $this->descuentos;
    }

    public function addDescuento(Descuento $descuento): self
    {
        if (!$this->descuentos->contains($descuento)) {
            $this->descuentos->add($descuento);
            $descuento->setCategoriaButaca($this);
        }

        return $this;
    }

    public function removeDescuento(Descuento $descuento): self
    {
        if ($this->descuentos->removeElement($descuento)) {
            // set the owning side to null (unless already changed)
            if ($descuento->getCategoriaButaca() === $this) {
                $descuento->setCategoriaButaca(null);
            }
        }

        return $this;
    }

    
}
