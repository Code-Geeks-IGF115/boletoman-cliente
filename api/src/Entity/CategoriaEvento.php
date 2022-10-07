<?php

namespace App\Entity;

use App\Repository\CategoriaEventoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriaEventoRepository::class)]
class CategoriaEvento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nombre = null;

    #[ORM\OneToMany(mappedBy: 'categoria', targetEntity: SubCategoriaEvento::class, orphanRemoval: true)]
    private Collection $subCategoriaEventos;

    public function __construct()
    {
        $this->subCategoriaEventos = new ArrayCollection();
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

    /**
     * @return Collection<int, SubCategoriaEvento>
     */
    public function getSubCategoriaEventos(): Collection
    {
        return $this->subCategoriaEventos;
    }

    public function addSubCategoriaEvento(SubCategoriaEvento $subCategoriaEvento): self
    {
        if (!$this->subCategoriaEventos->contains($subCategoriaEvento)) {
            $this->subCategoriaEventos->add($subCategoriaEvento);
            $subCategoriaEvento->setCategoria($this);
        }

        return $this;
    }

    public function removeSubCategoriaEvento(SubCategoriaEvento $subCategoriaEvento): self
    {
        if ($this->subCategoriaEventos->removeElement($subCategoriaEvento)) {
            // set the owning side to null (unless already changed)
            if ($subCategoriaEvento->getCategoria() === $this) {
                $subCategoriaEvento->setCategoria(null);
            }
        }

        return $this;
    }
}
