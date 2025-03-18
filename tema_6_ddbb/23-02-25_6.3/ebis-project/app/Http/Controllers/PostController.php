<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\Comentario;

class PostController extends Controller
{
    public function obtenerPostsUsuario($usuarioId) {
        $usuario = Usuario::with('posts')->findOrFail($usuarioId);
        return response()->json($usuario->posts);
    }

    public function obtenerComentariosPost($postId) {
        $post = Post::with('comentarios.usuario')->findOrFail($postId);
        return response()->json($post->comentarios);
    }

    public function obtenerUsuarioSinPosts() {
        $usuarios = Usuario::doesntHave('posts')->get();
        return response()->json($usuarios);
    }

    /*Actualizar el título de un post específico*/
    public function actualizarTitulo($id)
    {
        $post = Post::find($id);

        if ($post) {
            $post->titulo = "Nuevo título del post";
            $post->save();
            return response()->json(['message' => 'Post actualizado correctamente']);
        }

        return response()->json(['error' => 'Post no encontrado'], 404);
    }

    /*Eliminar un comentario específico de un post*/
    public function eliminarComentario($comentarioId)
    {
        $comentario = Comentario::find($comentarioId);

        if ($comentario) {
            $comentario->delete();
            return response()->json(['message' => 'Comentario eliminado correctamente']);
        }

        return response()->json(['error' => 'Comentario no encontrado'], 404);
    }

    /*Eliminar un usuario y todos sus posts y comentarios relacionados*/
    public function eliminarUsuarioYRelacionados($usuarioId)
    {
        $usuario = Usuario::find($usuarioId);

        if ($usuario) {
            // Eliminar comentarios del usuario
            $usuario->comentarios()->delete();

            // Eliminar posts del usuario y sus comentarios relacionados
            foreach ($usuario->posts as $post) {
                $post->comentarios()->delete();
                $post->delete();
            }

            // Eliminar el usuario
            $usuario->delete();

            return response()->json(['message' => 'Usuario y todos sus posts y comentarios eliminados']);
        }

        return response()->json(['error' => 'Usuario no encontrado'], 404);
    }

}
