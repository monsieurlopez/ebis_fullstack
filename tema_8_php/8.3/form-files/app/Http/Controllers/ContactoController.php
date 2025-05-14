<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function show() {
        return view('formulario.contacto');
    }

    public function process(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'required|email',
            'genero' => 'required',
        ], [
            'name.required' => 'El nombre es obligatorio',
            'name.min' => 'El nombre debe tener al menos 3 caracteres',
            'name.string' => 'El nombre debe ser una cadena de texto',
            'email.required' => 'El mail es obligatorio',
            'email.email' => 'El campo mail debe ser una dirección de correo electrónico válida',
            'genero.required' => 'El género es obligatorio',
        ]);

        return redirect()->route('form.confirmation')->with('datos', $validated);
    }

    public function confirmation() {
        $datos = session('datos');

        if (!session()->has('datos')) {
            return redirect()->route('form.show')->with('error', 'No se encontraron datos');
        }

        return view('formulario.confirmacion', compact('datos'));
    }
}
