@extends('layouts.main')

@section('title', 'Lista de Juegos')

@section('content')
    <div class="container d-flex justify-content-center align-items-center my-2">
        <h2>Lista de Juegos</h2>
        @if(session('success'))
            <div class="alert alert-success position-absolute bottom-0 end-0 me-3" role="alert">
                {{ session('success') }}
            </div>
        @endif

        <a href="{{ route('juegos.create') }}" method="POST" class="btn btn-primary btn-sm ms-3">
            Agregar Juego
        </a>
    </div>

    <table class="table table-striped table-hover table-borderless text-center">
        <thead>
            <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Año de lanzamiento</th>
                <th>Tags</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        @foreach($juegos as $juego)
            <tr>
                <td> {{ $juego->titulo }} </td>
                <td class="text-start"> {{ $juego->descripcion }} </td>
                <td> {{ $juego->anio_lanzamiento }} </td>
                <td class="text-nowrap">
                    @php
                        $tagIds = json_decode($juego->tags, true);
                        $tagNombres = \App\Models\Tag::whereIn('_id', $tagIds)->pluck('nombre')->toArray();
                    @endphp

                    @foreach($tagNombres as $nombre)
                        <span class="badge rounded-pill bg-secondary">{{ $nombre }}</span>
                    @endforeach
                </td>
                <td class="d-flex justify-content-center align-items-center gap-1">
                    <a href="{{ route('juegos.edit', $juego->id) }}" class="btn btn-warning btn-sm">
                        Editar
                    </a>
                    <form action="{{ route('juegos.delete', $juego->id) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm">
                            Eliminar
                        </button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection


