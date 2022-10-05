<?php

namespace App\Entity;

use App\Repository\DetalleCompraRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetalleCompraRepository::class)]
class DetalleCompra
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $cantidad = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $total = null;

    #[ORM\OneToOne(inversedBy: 'detalleCompra', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?CategoriaButaca $categoriaButaca = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Compra $compra = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Descuento $descuento = null;

    #[ORM\OneToMany(mappedBy: 'detalleCompra', targetEntity: Butaca::class)]
    private Collection $butacas;

    public function __construct()
    {
        $this->butacas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCantidad(): ?int
    {
        return $this->cantidad;
    }

    public function setCantidad(int $cantidad): self
    {
        $this->cantidad = $cantidad;

        return $this;
    }

    public function getTotal(): ?string
    {
        return $this->total;
    }

    public function setTotal(string $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getCategoriaButaca(): ?CategoriaButaca
    {
        return $this->categoriaButaca;
    }

    public function setCategoriaButaca(CategoriaButaca $categoriaButaca): self
    {
        $this->categoriaButaca = $categoriaButaca;

        return $this;
    }

    public function getCompra(): ?Compra
    {
        return $this->compra;
    }

    public function setCompra(?Compra $compra): self
    {
        $this->compra = $compra;

        return $this;
    }

    public function getDescuento(): ?Descuento
    {
        return $this->descuento;
    }

    public function setDescuento(?Descuento $descuento): self
    {
        $this->descuento = $descuento;

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
            $butaca->setDetalleCompra($this);
        }

        return $this;
    }

    public function removeButaca(Butaca $butaca): self
    {
        if ($this->butacas->removeElement($butaca)) {
            // set the owning side to null (unless already changed)
            if ($butaca->getDetalleCompra() === $this) {
                $butaca->setDetalleCompra(null);
            }
        }

        return $this;
    }
}
