<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\FileController;

Route::get('/', [HomeController::class, 'index']);
/*Rutas del formulario*/
Route::get('/contacto', [ContactoController::class, 'show'])->name('form.show');
Route::post('/contacto', [ContactoController::class, 'process'])->name('form.process');
Route::get('/contacto/confirmacion', [ContactoController::class, 'confirmation'])->name('form.confirmation');
/*Rutas gestión de archivos*/
Route::get('/archivos/index', [FileController::class, 'show'])->name('archivo.show');
Route::post('/archivos/subir', [FileController::class, 'subir'])->name('archivo.subir');
Route::get('/archivos/descargar/{id}', [FileController::class, 'descargar'])->name('archivo.descargar');
Route::delete('/archivos/eliminar/{id}', [FileController::class, 'eliminar'])->name('archivo.eliminar');
Route::post('/archivos/renombrar', [FileController::class, 'renombrar'])->name('archivo.renombrar');
