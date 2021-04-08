<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjetosController;

Route::post('/adicionarTarefa', [ProjetosController::class, 'save']);
Route::put('/atualizarTarefa', [ProjetosController::class, 'update']);
Route::delete('/deletarTarefa', [ProjetosController::class, 'delete']);
Route::get('/listarTarefas', [ProjetosController::class, 'listar']);
