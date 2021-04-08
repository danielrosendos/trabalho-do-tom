<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Interfaces\Model\TaksInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TaksModel extends Model implements TaksInterface
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'tb_info_cadastradas';

    /**
     * @var string[]
     */
    protected $fillable = [
        'email',
        'projeto',
        'type_teste',
        'responsavel',
        'escopo',
        'link',
        'versao',
    ];

    /**
     * @var string[]
     */
    protected $guarded = ['id'];

    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = true;

    public $id;
    public $email;
    public $projeto;
    public $tipoTeste;
    public $responsavel;
    public $escopo;
    public $link;
    public $versao;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return string
     */
    public function getProjeto(): string
    {
        return $this->projeto;
    }

    /**
     * @param string $projeto
     */
    public function setProjeto(string $projeto): void
    {
        $this->projeto = $projeto;
    }

    /**
     * @return string
     */
    public function getTipoTeste(): string
    {
        return $this->tipoTeste;
    }

    /**
     * @param string $tipoTeste
     */
    public function setTipoTeste(string $tipoTeste): void
    {
        $this->tipoTeste = $tipoTeste;
    }

    /**
     * @return string
     */
    public function getResponsavel(): string
    {
        return $this->responsavel;
    }

    /**
     * @param string $responsavel
     */
    public function setResponsavel(string $responsavel): void
    {
       $this->responsavel = $responsavel;
    }

    /**
     * @return string
     */
    public function getEscopo(): string
    {
        return $this->escopo;
    }

    /**
     * @param string $escopo
     */
    public function setEscopo(string $escopo): void
    {
        $this->escopo = $escopo;
    }

    /**
     * @return string
     */
    public function getLink(): string
    {
        return $this->link;
    }

    /**
     * @param string $link
     */
    public function setLink(string $link): void
    {
        $this->link = $link;
    }

    /**
     * @return string
     */
    public function getVersao(): string
    {
        return $this->versao;
    }

    /**
     * @param string $versao
     */
    public function setVersao(string $versao): void
    {
        $this->versao = $versao;
    }

    /**
     * @return string[]
     */
    public function getData() {
        return [
            'email' => $this->getEmail(),
            'projeto' => $this->getProjeto(),
            'type_teste' => $this->getTipoTeste(),
            'responsavel' => $this->getResponsavel(),
            'escopo' => $this->getEscopo(),
            'link' => $this->getLink(),
            'versao' => $this->getVersao()
        ];
    }

    /**
     * @param array $dados
     * @return TaksModel
     */
    public function createModel(array $dados) {

        if(isset($dados['id'])) {
            $this->setId($dados['id']);
        }

        $this->setEmail($dados['email']);
        $this->setProjeto($dados['projeto']);
        $this->setTipoTeste($dados['type_teste']);
        $this->setResponsavel($dados['responsavel']);
        $this->setEscopo($dados['escopo']);
        $this->setLink($dados['link']);
        $this->setVersao($dados['versao']);

        return $this;
    }
}
