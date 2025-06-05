<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegoController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/juegos', [JuegoController::class, 'index'])->name('juegos.index');
Route::get('/juegos/create', [JuegoController::class, 'create'])->name('juegos.create');
Route::post('/juegos', [JuegoController::class, 'store'])->name('juegos.store');

Route::get('/juegos/{id}/edit', [JuegoController::class, 'edit'])->name('juegos.edit');
Route::put('/juegos/{id}', [JuegoController::class, 'update'])->name('juegos.update');

Route::delete('/juegos/delete/{id}', [JuegoController::class, 'delete'])->name('juegos.delete');
