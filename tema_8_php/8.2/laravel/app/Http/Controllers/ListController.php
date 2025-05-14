<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListController extends Controller
{
    public function index() {
        $items = ['Java', 'PHP', 'Python', 'JavaScript', 'C++'];
        return view('list', compact('items'));
    }
    
    public function sports() {
        $sports = ['Fútbol', 'Baloncesto', 'Tenis', 'Padel', 'Atletismo'];
        return view('sports', compact('sports'));
    }
    
}
