<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use App\Models\Post;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    public function obtenerAutorComentario($comentarioId) {
        $comentario = Comentario::with('usuario')->findOrFail($comentarioId);
        return response()->json($comentario->usuario);
    }

    public function obtenerPostConCincoComentariosMinimo() {
        $posts = Post::has('comentarios', '>=', 5)->get();
        return response()->json($posts);
    }

    public function obtenerNumeroComentariosPorPost () {
        $numeroComentariosPorPost = Post::withCount('comentarios')->get();
        
        foreach ($numeroComentariosPorPost as $post) {
            echo "Título: {$post->titulo} - Comentarios: {$post->comentarios_count} <br>";
        }
    }
}
