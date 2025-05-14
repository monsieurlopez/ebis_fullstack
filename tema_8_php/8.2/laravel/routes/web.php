<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\UserController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/list', [ListController::class, 'index']);
Route::get('/list/sports', [ListController::class, 'sports']);
Route::get('/list/users/{id}', [UserController::class, 'show']);
