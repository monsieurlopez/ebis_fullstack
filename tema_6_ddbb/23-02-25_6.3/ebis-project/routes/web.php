<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ComentarioController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts-usuario/{id}', [PostController::class, 'obtenerPostsUsuario']);
Route::get('/comentarios-post/{id}', [PostController::class, 'obtenerComentariosPost']);
Route::get('/autor-comentario/{id}', [ComentarioController::class, 'obtenerAutorComentario']);
Route::get('/usuarios-sin-posts', [PostController::class, 'obtenerUsuarioSinPosts']);
Route::get('/posts-cinco-comentarios', [ComentarioController::class, 'obtenerPostConCincoComentariosMinimo']);
Route::get('/comentarios-por-post', [ComentarioController::class, 'obtenerNumeroComentariosPorPost']);

/*Consultas avanzadas*/
Route::put('/post/actualizar/{id}', [PostController::class, 'actualizarTitulo']);
Route::delete('/comentario/eliminar/{id}', [PostController::class, 'eliminarComentario']);
Route::delete('/usuario/eliminar/{id}', [PostController::class, 'eliminarUsuarioYRelacionados']);
