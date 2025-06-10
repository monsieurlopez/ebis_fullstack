<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Libro;

class LibroController extends Controller
{
    public function index()
    {
        $libros = Libro::all();

        return view('dashboard', compact('libros'));
    }

    public function create()
    {
        return view('libros.create');
    }

    public function store(Request $request)
    {
        $libro = Libro::create([
            'titulo' => $request->titulo,
            'autor' => $request->autor
        ]);

        return redirect()->route('dashboard');
    }
}