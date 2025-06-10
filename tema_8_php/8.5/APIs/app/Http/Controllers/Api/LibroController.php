<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Libro;

class LibroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Libro::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'publicacion' => 'required|digits:4|integer',
            'genero' => 'nullable|string|max:255',
        ]);

        $libro = Libro::create($request->all());

        return response()->json(['id' => $libro->id], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $response = Libro::find($id);
        if (!$response) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }
        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $libro = Libro::find($id);
        if (!$libro) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }

        $request->validate([
            'titulo' => 'sometimes|string|max:255',
            'autor' => 'sometimes|string|max:255',
            'publicacion' => 'sometimes|digits:4|integer',
            'genero' => 'nullable|string|max:255',
        ]);

        $libro->update($request->all());
        return $libro;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $libro = Libro::find($id);
        if (!$libro) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }
        $libro->delete();
        return response()->json(['message' => 'Libro eliminado correctamente'], 200);
    }
}
