<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Juego;
use App\Models\Tag;

class JuegoController extends Controller
{
    public function index() {
        $juegos = Juego::all();
        return view('juegos.index', compact('juegos'));
    }

    public function create() {
        $tags = Tag::all();
        return view('juegos.create', compact('tags'));
    }

    public function store(Request $request) {
        $juego = Juego::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'anio_lanzamiento' => $request->anio_lanzamiento,
            'tags' => json_encode($request->tags),
        ]);
        
        return redirect()->route('juegos.index');
    }

    public function edit($id)
    {
        $juego = Juego::findOrFail($id);
        $tags = Tag::all();

        return view('juegos.create', compact('juego', 'tags'));
    }

    public function update(Request $request, $id)
    {
        $juego = Juego::findOrFail($id);

        $juego->update([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'anio_lanzamiento' => $request->anio_lanzamiento,
            'tags' => json_encode($request->tags),
        ]);

        return redirect()->route('juegos.index')->with('success', 'Juego actualizado correctamente.');
    }

    public function delete(Request $request, $id)
    {
        $juego = Juego::findOrFail($id);
        $juego->delete();
        return redirect()->route('juegos.index')->with('success', 'Juego eliminado correctamente.');
    }
}
