<?php

namespace App\Entity;

use App\Repository\SalaDeEventosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SalaDeEventosRepository::class)]
class SalaDeEventos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nombre = null;

    #[ORM\Column(length: 255)]
    private ?string $direccion = null;

    #[ORM\Column(length: 9)]
    private ?string $telefono = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column]
    private ?int $forma = null;

    #[ORM\Column]
    private ?int $filas = null;

    #[ORM\Column]
    private ?int $columnas = null;

    #[ORM\OneToOne(inversedBy: 'salaDeEventos', cascade: ['persist', 'remove'])]
    private ?Evento $evento = null;

    #[ORM\OneToMany(mappedBy: 'salaDeEventos', targetEntity: CategoriaButaca::class, orphanRemoval: true)]
    private Collection $categoriaButacas;

    public function __construct()
    {
        $this->categoriaButacas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDireccion(): ?string
    {
        return $this->direccion;
    }

    public function setDireccion(string $direccion): self
    {
        $this->direccion = $direccion;

        return $this;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(string $telefono): self
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getForma(): ?int
    {
        return $this->forma;
    }

    public function setForma(int $forma): self
    {
        $this->forma = $forma;

        return $this;
    }

    public function getFilas(): ?int
    {
        return $this->filas;
    }

    public function setFilas(int $filas): self
    {
        $this->filas = $filas;

        return $this;
    }

    public function getColumnas(): ?int
    {
        return $this->columnas;
    }

    public function setColumnas(int $columnas): self
    {
        $this->columnas = $columnas;

        return $this;
    }

    public function getEvento(): ?Evento
    {
        return $this->evento;
    }

    public function setEvento(?Evento $evento): self
    {
        $this->evento = $evento;

        return $this;
    }

    /**
     * @return Collection<int, CategoriaButaca>
     */
    public function getCategoriaButacas(): Collection
    {
        return $this->categoriaButacas;
    }

    public function addCategoriaButaca(CategoriaButaca $categoriaButaca): self
    {
        if (!$this->categoriaButacas->contains($categoriaButaca)) {
            $this->categoriaButacas->add($categoriaButaca);
            $categoriaButaca->setSalaDeEventos($this);
        }

        return $this;
    }

    public function removeCategoriaButaca(CategoriaButaca $categoriaButaca): self
    {
        if ($this->categoriaButacas->removeElement($categoriaButaca)) {
            // set the owning side to null (unless already changed)
            if ($categoriaButaca->getSalaDeEventos() === $this) {
                $categoriaButaca->setSalaDeEventos(null);
            }
        }

        return $this;
    }
}
