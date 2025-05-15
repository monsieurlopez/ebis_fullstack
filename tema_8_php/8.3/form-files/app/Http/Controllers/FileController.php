<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class FileController extends Controller
{
    public function show()
    {
        $archivos = collect(Storage::disk('public')->files('/documentos/'))->map(function($archivo) {
            // Obtienes el timestamp UTC
            $timestamp = Storage::disk('public')->lastModified($archivo);

            // Lo conviertes a Paris usando Carbon
            $fechaParis = Carbon::createFromTimestamp($timestamp, 'UTC')->setTimezone('Europe/Paris')->format('d/m/Y H:i');

            return [
                'nombre' => basename($archivo),
                'fecha' => $fechaParis
            ];
        });

        return view('archivo.index', compact('archivos'));
    }

    public function subir(Request $request)
    {
        $request->validate([
            'archivo' => 'required|file|max:5120'
        ]);

        $archivo = $request->file('archivo');
        $fileName = $archivo->getClientOriginalName();
        $ruta = $archivo->storeAs('/documentos/', $fileName, 'public');

        return redirect()->route('archivo.show')->with('success', 'El archivo se ha subido correctamente');
    }

    public function descargar($archivo)
    {
        return Storage::disk('public')->download("/documentos/$archivo");
    }

    public function eliminar($archivo)
    {
        Storage::disk('public')->delete("/documentos/$archivo");
        return redirect()->route('archivo.show')->with('success', 'El archivo se ha eliminado correctamente');
    }

    public function renombrar(Request $request)
    {
        $request->validate([
            'archivo_actual' => 'required|string',
            'nuevo_nombre' => 'required|string|max:255'
        ]);

        $disk = Storage::disk('public');
        $rutaActual = '/documentos/' . $request->archivo_actual;
        $nuevaRuta = '/documentos/' . preg_replace('/[^A-Za-z0-9_\-\.]/', '_', $request->nuevo_nombre);

        if ($disk->exists($rutaActual)) {
            if ($disk->exists($nuevaRuta)) {
                return response()->json(['error' => 'Ya existe un archivo con ese nombre.'], 409);
            }

            $disk->move($rutaActual, $nuevaRuta);
            return response()->json(['success' => true]);
        } else {
            return response()->json(['error' => 'Archivo no encontrado.'], 404);
        }
    }
}
