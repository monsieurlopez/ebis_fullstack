@extends('layouts.app')
@section('title', 'Listado')
@section('content')
    <h1>Listado de elementos</h1>
    <ul>
        @foreach($items as $item)
            <li class="list-group-item">{{ $item }}</li>
        @endforeach
    </ul>
@endsection
