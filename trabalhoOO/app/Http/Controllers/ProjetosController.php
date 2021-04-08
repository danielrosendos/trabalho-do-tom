<?php

namespace App\Http\Controllers;

use App\Models\TaksModel;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Repository\Repository;

class ProjetosController extends Controller
{

    /** @var TaksModel */
    protected $taksModel;

    /** @var Repository */
    protected $repository;

    /**
     * ProjetosController constructor.
     * @param TaksModel $taksModel
     * @param Repository $repository
     */
    public function __construct(
        TaksModel $taksModel,
        Repository $repository
    )
    {
        $this->taksModel = $taksModel;
        $this->repository = $repository;
    }

    /**
     * @param Request $request
     * @return array
     */
    private function validarDados(Request $request) {
        return $request->validate([
            'id' => 'max:255',
            'email' => 'required|max:255|email',
            'projeto' => 'required|max:255',
            'type_teste' => 'required|max:255',
            'responsavel' => 'required|max:255',
            'escopo' => 'required|max:255',
            'link' => 'required|max:255',
            'versao' => 'required|max:255'
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function save(Request $request) {
        try {
            $this->validarDados($request);

            $dados = $request->all();

            $dadosModel = $this->taksModel->createModel($dados);

            $return = $this->repository->create($dadosModel);

            return response()->json([
                'data' => $return,
                'message' => "Tarefa Criada Com Sucesso",
                'status' => 200
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
               'data' => [],
               'message' => "Não foi possível Salvar o novo Projeto",
               'status' => 400
            ], 400);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request) {
        try {

            $this->validarDados($request);

            $dados = $request->all();

            $dadosModel = $this->taksModel->createModel($dados);

            $return = $this->repository->update($dadosModel);

            if(!$return) {
                throw new \Exception();
            }

            return response()->json([
                'data' => $return,
                'message' => "Tarefa Atualizada Com Sucesso",
                'status' => 200
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'message' => "Não foi possível Atualizar o Projeto",
                'status' => 400
            ], 400);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function delete(Request $request) {
        try {

            $this->validarDados($request);

            $dados = $request->all();

            $dadosModel = $this->taksModel->createModel($dados);

            $return = $this->repository->delete($dadosModel->getId());

            if(!$return) {
                throw new \Exception();
            }

            return response()->json([
                'data' => $return,
                'message' => "Tarefa Deletada Com Sucesso",
                'status' => 200
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'message' => "Não foi possível Deletar o Projeto",
                'status' => 400
            ], 400);
        }
    }

    public function listar() {
        try {

            $return = $this->repository->list();

            if(!$return) {
                throw new \Exception();
            }

            return response()->json([
                'data' => $return,
                'message' => "Consulta Feita com Sucesso",
                'status' => 200
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'message' => "Não foi possível Listar os Projetos",
                'status' => 400
            ], 400);
        }
    }

}
