<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <!--<div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("You're logged in!") }}
                </div>
            </div>
        </div>
    </div>-->

    <div class="py-8 max-w-5xl mx-auto text-center relative overflow-x-auto">
        <h3 class="text-lg font-bold mb-4">
            Listado de Libros:
        </h3>

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Título</th>
                    <th scope="col" class="px-6 py-3"">Autor</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($libros as $libro)
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ $libro->titulo }}</td>
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ $libro->autor }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @can('ver-usuarios')
            <a
                href="{{ route('usuarios.index') }}"
                class="bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white px-4 py-2 rounded inline-flex items-center" title="Ver usuarios registrados">
                <spam>Usuarios registrados</spam>
                <svg class="w-5 h-5 text-white-800 dark:text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>

            </a>
            <a
                href="{{ route('libros.create') }}"
                class="bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white px-4 py-2 rounded inline-flex items-center" title="Agregar un nuevo libro">
                <span>Agregar libro</span>
                <svg class="fill-current w-5 h-5 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
            </a>
        @endcan
    </div>
</x-app-layout>
