<?php


namespace App\Interfaces\Model;


interface TaksInterface
{

    /**
     * @return int
     */
    public function getId();

    /**
     * @param int $id
     */
    public function setId(int $id): void;

    /**
     * @return string
     */
    public function getEmail(): string;

    /**
     * @param string $email
     */
    public function setEmail(string $email): void;

    /**
     * @return string
     */
    public function getProjeto(): string;

    /**
     * @param string $projeto
     */
    public function setProjeto(string $projeto): void;

    /**
     * @return string
     */
    public function getTipoTeste(): string;

    /**
     * @param string $tipoTeste
     */
    public function setTipoTeste(string $tipoTeste): void;

    /**
     * @return string
     */
    public function getResponsavel(): string;

    /**
     * @param string $responsavel
     */
    public function setResponsavel(string $responsavel): void;

    /**
     * @return string
     */
    public function getEscopo(): string;

    /**
     * @param string $escopo
     */
    public function setEscopo(string $escopo): void;

    /**
     * @return string
     */
    public function getLink(): string;

    /**
     * @param string $link
     */
    public function setLink(string $link): void;

    /**
     * @return string
     */
    public function getVersao(): string;

    /**
     * @param string $versao
     */
    public function setVersao(string $versao): void;
}
