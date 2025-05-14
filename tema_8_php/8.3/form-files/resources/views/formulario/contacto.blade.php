@extends('layouts.app')

@section('title', 'Contacto')

@section('content')
    <h2>Contacta conmigo:</h2>

    @if(session('success'))
        <div class="alert alert-success"> {{ session('success') }} </div>
    @endif

    @if(session('error'))
        <div class="alert alert-danger"> {{ session('error') }} </div>
    @endif

    <form action="{{ route('form.process') }}" method="POST" class="w-75 mx-auto text-center flex-column mt-3">
        @csrf

        <div class="mb-3">
            <label class="form-label" for="name">Nombre:</label>
            <input class="form-control text-center w-75 mx-auto" type="text" name="name" value="{{ old('name') }}">
            @error('name')
                <small class="alert alert-danger"> {{ $message }} </small>
            @enderror
        </div>
        <div class="mb-3">
            <label for="email">Email:</label>
            <input class="form-control text-center w-75 mx-auto" type="email" name="email" value="{{ old('email') }}">
            @error('email')
                <small class="alert alert-danger"> {{ $message }} </small>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label" for="genero">Género:</label>
            <select class="form-select text-center w-75 mx-auto" name="genero">
                <option disabled {{ old('genero') ? '' : 'selected' }}>Selecciona una opción:</option>
                <option value="1" {{ old('genero') == '1' ? 'selected' : '' }}>Masculino</option>
                <option value="2" {{ old('genero') == '2' ? 'selected' : '' }}>Femenino</option>
                <option value="3" {{ old('genero') == '3' ? 'selected' : '' }}>Otro</option>
            </select>
            @error('genero')
                <small class="alert alert-danger"> {{ $message }} </small>
            @enderror
        </div>

        <button type="submit" class="mb-3 btn btn-primary btn-sm">Enviar</button>
    </form>
@endsection
