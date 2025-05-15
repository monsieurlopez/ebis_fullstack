@extends('layouts.app')

@section('title', 'Confirmación')

@section('content')
    <h2>Datos recibidos:</h2>

    <ul class="list-group w-50 mx-auto mt-3">
        <li class="list-group-item"><strong>Nombre:</strong> {{ $datos['name'] }}</li>
        <li class="list-group-item"><strong>Email:</strong> {{ $datos['email'] }}</li>
        <li class="list-group-item"><strong>Género:</strong>
            @switch($datos['genero'])
                @case('1') Masculino @break
                @case('2') Femenino @break
                @case('3') Otro @break
                @default No especificado
            @endswitch
        </li>
    </ul>

    <a href="{{ route('form.show') }}" class="btn btn-secondary mt-3 btn-sm">Volver al formulario</a>
@endsection
