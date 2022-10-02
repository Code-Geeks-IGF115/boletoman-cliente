<?php

namespace App\Entity;

use App\Repository\SubCategoriaEventoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SubCategoriaEventoRepository::class)]
class SubCategoriaEvento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nombre = null;

    #[ORM\ManyToOne(inversedBy: 'subCategoriaEventos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CategoriaEvento $categoria = null;

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

    public function getCategoria(): ?CategoriaEvento
    {
        return $this->categoria;
    }

    public function setCategoria(?CategoriaEvento $categoria): self
    {
        $this->categoria = $categoria;

        return $this;
    }
}
