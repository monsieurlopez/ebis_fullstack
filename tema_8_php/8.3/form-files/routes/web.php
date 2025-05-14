<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactoController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/contacto', [ContactoController::class, 'show'])->name('form.show');
Route::post('/contacto', [ContactoController::class, 'process'])->name('form.process');

Route::get('/contacto/confirmacion', [ContactoController::class, 'confirmation'])->name('form.confirmation');