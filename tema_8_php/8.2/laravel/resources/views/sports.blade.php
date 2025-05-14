@extends('layouts.app')
@section('title', 'Deportes')
@section('content')
    <h1>Listado de Deportes</h1>
    <ul>
        @foreach($sports as $sport)
            <li class="list-group-item">{{ $sport }}</li>
        @endforeach
    </ul>
@endsection
