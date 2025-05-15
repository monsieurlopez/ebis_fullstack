@extends('layouts.app')

@section('title', 'Mis archivos')

@section('content')
    <h2>Gestión de archivos:</h2>

    @if(session('success'))
        <div class="alert alert-success"> {{ session('success') }} </div>
    @endif

    <form action="{{ route('archivo.subir') }}" enctype="multipart/form-data" method="POST" class="w-75 mx-auto text-center flex-column mt-3">
        @csrf
        <div class="mb-3">
            <input class="form-control text-center w-75 mx-auto" type="file" name="archivo">
        </div>
        @error('archivo')
            <small class="alert alert-danger d-block mt-2">{{ $message }}</small>
        @enderror
        <button type="submit" class="btn btn-primary btn-sm">Subir archivo</button>
    </form>

    <h3 class="mt-3">Archivos disponibles:</h3>
    <ul class="list-group">
        @foreach($archivos as $archivo)
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span class="editable-nombre" contenteditable="true" data-archivo-actual="{{ $archivo['nombre'] }}">{{ $archivo['nombre'] }}</span>
                    <span class="badge bg-info text-dark ms-2"> {{ $archivo['fecha'] }}</span>
                </div>
                <div>
                    <a href="{{ route('archivo.descargar', $archivo['nombre']) }}" class="btn btn-primary btn-sm">Descargar</a>
                    <a href="{{ asset('storage/documentos/' . $archivo['nombre']) }}" target="_blank" class="btn btn-secondary btn-sm">Previsualizar</a>
                    <form action="{{ route('archivo.eliminar', $archivo['nombre']) }}" method="POST" style="display:inline-block;" onsubmit="return confirm('¿Seguro que deseas eliminar este archivo?');">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm">Eliminar</button>
                    </form>
                </div>
            </li>
        @endforeach
    </ul>

@push('scripts')
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.editable-nombre').forEach(span => {
            span.addEventListener('blur', function() {
                enviarRenombrado(this);
            });

            span.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.blur();
                }
            });
        });

        function enviarRenombrado(span) {
            const nombreNuevo = span.textContent.trim();
            const archivoActual = span.getAttribute('data-archivo-actual');

            if (nombreNuevo === '' || nombreNuevo === archivoActual) {
                alert('Nombre inválido o sin cambios.');
                span.textContent = archivoActual;
                return;
            }

            fetch("{{ route('archivo.renombrar') }}", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({
                    archivo_actual: archivoActual,
                    nuevo_nombre: nombreNuevo
                })
            })
            .then(response => {
                if (response.ok) {
                    location.reload();
                } else {
                    alert('Error al renombrar');
                    span.textContent = archivoActual;
                }
            })
            .catch(() => {
                alert('Error al renombrar');
                span.textContent = archivoActual;
            });
        }
    });
</script>
@endpush

@endsection
