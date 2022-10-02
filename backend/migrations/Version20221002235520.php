<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221002235520 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE butaca_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE categoria_butaca_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE categoria_evento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE celda_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE compra_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE descuento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE detalle_compra_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE evento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE frecuencia_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE imagen_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE metodo_de_pago_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE sala_de_eventos_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE sub_categoria_evento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE butaca (id INT NOT NULL, celda_id INT NOT NULL, detalle_compra_id INT DEFAULT NULL, codigo_butaca VARCHAR(15) NOT NULL, disponible VARCHAR(10) NOT NULL, mesa INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1CE19F3BEBD6899B ON butaca (celda_id)');
        $this->addSql('CREATE INDEX IDX_1CE19F3BD38BB597 ON butaca (detalle_compra_id)');
        $this->addSql('CREATE TABLE categoria_butaca (id INT NOT NULL, sala_de_eventos_id INT NOT NULL, codigo VARCHAR(10) NOT NULL, precio_unitario NUMERIC(10, 2) NOT NULL, nombre VARCHAR(25) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1E8D3BF8ADDC7720 ON categoria_butaca (sala_de_eventos_id)');
        $this->addSql('CREATE TABLE categoria_evento (id INT NOT NULL, nombre VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE celda (id INT NOT NULL, categoria_butaca_id INT DEFAULT NULL, fila INT NOT NULL, columna INT NOT NULL, cantidad_mesas INT NOT NULL, cantidad_butacas INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_6EA13098722DF7E3 ON celda (categoria_butaca_id)');
        $this->addSql('CREATE TABLE compra (id INT NOT NULL, total NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE descuento (id INT NOT NULL, categoria_butaca_id INT NOT NULL, codigo VARCHAR(10) NOT NULL, descripcion VARCHAR(50) NOT NULL, monto NUMERIC(10, 2) NOT NULL, cantidad_butacas INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_C5B09304722DF7E3 ON descuento (categoria_butaca_id)');
        $this->addSql('CREATE TABLE detalle_compra (id INT NOT NULL, categoria_butaca_id INT NOT NULL, compra_id INT NOT NULL, descuento_id INT DEFAULT NULL, cantidad INT NOT NULL, total NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F219D258722DF7E3 ON detalle_compra (categoria_butaca_id)');
        $this->addSql('CREATE INDEX IDX_F219D258F2E704D7 ON detalle_compra (compra_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F219D258F045077C ON detalle_compra (descuento_id)');
        $this->addSql('CREATE TABLE evento (id INT NOT NULL, nombre VARCHAR(50) NOT NULL, descripcion VARCHAR(255) NOT NULL, tipo_de_evento VARCHAR(25) NOT NULL, fecha_inicio DATE NOT NULL, hora_inicio TIME(0) WITHOUT TIME ZONE NOT NULL, fecha_fin DATE NOT NULL, hora_fin TIME(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE frecuencia (id INT NOT NULL, dia INT NOT NULL, checked BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE imagen (id INT NOT NULL, evento_id INT NOT NULL, descripcion VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_8319D2B387A5F842 ON imagen (evento_id)');
        $this->addSql('CREATE TABLE metodo_de_pago (id INT NOT NULL, numero_tarjeta BIGINT NOT NULL, fecha_vencimiento INT NOT NULL, codigo_seguridad INT NOT NULL, nombre_propietario VARCHAR(100) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE sala_de_eventos (id INT NOT NULL, evento_id INT DEFAULT NULL, nombre VARCHAR(50) NOT NULL, direccion VARCHAR(255) NOT NULL, telefono VARCHAR(9) NOT NULL, email VARCHAR(255) NOT NULL, forma INT NOT NULL, filas INT NOT NULL, columnas INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_A969543787A5F842 ON sala_de_eventos (evento_id)');
        $this->addSql('CREATE TABLE sub_categoria_evento (id INT NOT NULL, categoria_id INT NOT NULL, nombre VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_EE2129EF3397707A ON sub_categoria_evento (categoria_id)');
        $this->addSql('ALTER TABLE butaca ADD CONSTRAINT FK_1CE19F3BEBD6899B FOREIGN KEY (celda_id) REFERENCES celda (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE butaca ADD CONSTRAINT FK_1CE19F3BD38BB597 FOREIGN KEY (detalle_compra_id) REFERENCES detalle_compra (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE categoria_butaca ADD CONSTRAINT FK_1E8D3BF8ADDC7720 FOREIGN KEY (sala_de_eventos_id) REFERENCES sala_de_eventos (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE celda ADD CONSTRAINT FK_6EA13098722DF7E3 FOREIGN KEY (categoria_butaca_id) REFERENCES categoria_butaca (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE descuento ADD CONSTRAINT FK_C5B09304722DF7E3 FOREIGN KEY (categoria_butaca_id) REFERENCES categoria_butaca (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE detalle_compra ADD CONSTRAINT FK_F219D258722DF7E3 FOREIGN KEY (categoria_butaca_id) REFERENCES categoria_butaca (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE detalle_compra ADD CONSTRAINT FK_F219D258F2E704D7 FOREIGN KEY (compra_id) REFERENCES compra (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE detalle_compra ADD CONSTRAINT FK_F219D258F045077C FOREIGN KEY (descuento_id) REFERENCES descuento (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE imagen ADD CONSTRAINT FK_8319D2B387A5F842 FOREIGN KEY (evento_id) REFERENCES evento (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sala_de_eventos ADD CONSTRAINT FK_A969543787A5F842 FOREIGN KEY (evento_id) REFERENCES evento (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sub_categoria_evento ADD CONSTRAINT FK_EE2129EF3397707A FOREIGN KEY (categoria_id) REFERENCES categoria_evento (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE butaca_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE categoria_butaca_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE categoria_evento_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE celda_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE compra_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE descuento_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE detalle_compra_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE evento_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE frecuencia_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE imagen_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE metodo_de_pago_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE sala_de_eventos_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE sub_categoria_evento_id_seq CASCADE');
        $this->addSql('ALTER TABLE butaca DROP CONSTRAINT FK_1CE19F3BEBD6899B');
        $this->addSql('ALTER TABLE butaca DROP CONSTRAINT FK_1CE19F3BD38BB597');
        $this->addSql('ALTER TABLE categoria_butaca DROP CONSTRAINT FK_1E8D3BF8ADDC7720');
        $this->addSql('ALTER TABLE celda DROP CONSTRAINT FK_6EA13098722DF7E3');
        $this->addSql('ALTER TABLE descuento DROP CONSTRAINT FK_C5B09304722DF7E3');
        $this->addSql('ALTER TABLE detalle_compra DROP CONSTRAINT FK_F219D258722DF7E3');
        $this->addSql('ALTER TABLE detalle_compra DROP CONSTRAINT FK_F219D258F2E704D7');
        $this->addSql('ALTER TABLE detalle_compra DROP CONSTRAINT FK_F219D258F045077C');
        $this->addSql('ALTER TABLE imagen DROP CONSTRAINT FK_8319D2B387A5F842');
        $this->addSql('ALTER TABLE sala_de_eventos DROP CONSTRAINT FK_A969543787A5F842');
        $this->addSql('ALTER TABLE sub_categoria_evento DROP CONSTRAINT FK_EE2129EF3397707A');
        $this->addSql('DROP TABLE butaca');
        $this->addSql('DROP TABLE categoria_butaca');
        $this->addSql('DROP TABLE categoria_evento');
        $this->addSql('DROP TABLE celda');
        $this->addSql('DROP TABLE compra');
        $this->addSql('DROP TABLE descuento');
        $this->addSql('DROP TABLE detalle_compra');
        $this->addSql('DROP TABLE evento');
        $this->addSql('DROP TABLE frecuencia');
        $this->addSql('DROP TABLE imagen');
        $this->addSql('DROP TABLE metodo_de_pago');
        $this->addSql('DROP TABLE sala_de_eventos');
        $this->addSql('DROP TABLE sub_categoria_evento');
    }
}
