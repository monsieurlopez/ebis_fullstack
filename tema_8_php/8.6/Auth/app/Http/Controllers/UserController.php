<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    public function update(Request $request, Post $post) {
        if ($request->user()->cannot('update', $post)) {
            abort(403);
        }
        //Actualizar post
    }

    public function index () {

        if (!Gate::allows('ver-usuarios')) {
            abort(403);
        }
        $users = User::all();
        return view('usuarios.index', compact('users'));
    }
}
