@extends('layouts.main')

@section('title', isset($juego) ? 'Editar Juego' : 'Nuevo Juego')

@section('content')
    <div class="container">
        <h1 class="my-4">
            {{ isset($juego) ? 'Editar Juego' : 'Agregar Nuevo Juego' }}
        </h1>

        <form 
            action="{{ isset($juego) ? route('juegos.update', $juego->id) : route('juegos.store') }}"
            method="POST"
        >
            @csrf
            @if(isset($juego))
                @method('PUT')
            @endif

            <div class="mb-3">
                <label class="form-label">Título</label>
                <input type="text" name="titulo"
                    class="form-control" required
                    value="{{ old('titulo', $juego->titulo ?? '') }}">
            </div>

            <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea name="descripcion" class="form-control">{{ old('descripcion', $juego->descripcion ?? '') }}</textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Año de lanzamiento</label>
                <input type="number" name="anio_lanzamiento"
                    class="form-control" required
                    value="{{ old('anio_lanzamiento', $juego->anio_lanzamiento ?? '') }}">
            </div>

            <div class="mb-3">
                <label class="form-label">Tags</label>
                <select name="tags[]" class="form-control" multiple>
                    @foreach($tags as $tag)
                        <option value="{{ $tag->id }}"
                            {{ isset($juego) && in_array($tag->id, json_decode($juego->tags, true)) ? 'selected' : '' }}>
                            {{ $tag->nombre }}
                        </option>
                    @endforeach
                </select>
            </div>

            <a href="{{ route('juegos.index') }}" method="" class="btn btn-primary btn-sm">
                Volver
            </a>
            <button type="submit" class="btn btn-sm btn-success">
                {{ isset($juego) ? 'Actualizar' : 'Guardar' }}
            </button>
        </form>
    </div>
@endsection
