<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ExternalController extends Controller
{
    private $apiUrl = 'https://dragonball-api.com/api/characters';
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = Http::get($this->apiUrl);

        return $response->json();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $response = Http::get("$this->apiUrl/$id");

        //*Salida de datos personalizada*//
        return response() -> json([
                'nombre' => $data['name'],
                'raza' => $data['race'],
                'genero' => $data['gender'],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
