<?php

namespace App\Entity;

use App\Repository\MetodoDePagoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MetodoDePagoRepository::class)]
class MetodoDePago
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::BIGINT)]
    private ?string $numeroTarjeta = null;

    #[ORM\Column]
    private ?int $fechaVencimiento = null;

    #[ORM\Column]
    private ?int $codigoSeguridad = null;

    #[ORM\Column(length: 100)]
    private ?string $nombrePropietario = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroTarjeta(): ?string
    {
        return $this->numeroTarjeta;
    }

    public function setNumeroTarjeta(string $numeroTarjeta): self
    {
        $this->numeroTarjeta = $numeroTarjeta;

        return $this;
    }

    public function getFechaVencimiento(): ?int
    {
        return $this->fechaVencimiento;
    }

    public function setFechaVencimiento(int $fechaVencimiento): self
    {
        $this->fechaVencimiento = $fechaVencimiento;

        return $this;
    }

    public function getCodigoSeguridad(): ?int
    {
        return $this->codigoSeguridad;
    }

    public function setCodigoSeguridad(int $codigoSeguridad): self
    {
        $this->codigoSeguridad = $codigoSeguridad;

        return $this;
    }

    public function getNombrePropietario(): ?string
    {
        return $this->nombrePropietario;
    }

    public function setNombrePropietario(string $nombrePropietario): self
    {
        $this->nombrePropietario = $nombrePropietario;

        return $this;
    }
}
