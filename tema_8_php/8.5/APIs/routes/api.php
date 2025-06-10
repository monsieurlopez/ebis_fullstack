<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\LibroController;
use App\Http\Controllers\Api\ExternalController;

Route::get('/', function () {
    return response()->json(['message' => 'API de libros']);
});

Route::apiResource('libros', LibroController::class);
Route::apiResource('external', ExternalController::class);