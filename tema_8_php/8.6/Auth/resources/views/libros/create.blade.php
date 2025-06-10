<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Agregar Nuevo Libro
        </h2>
    </x-slot>
    <div class="py-8 max-w-5xl mx-auto text-center">
        <form
            action="{{ route('libros.store') }}"
            method="POST"
            class="max-w-sm mx-auto"
        >
            @csrf
            @if(isset($juego))
                @method('PUT')
            @endif

            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="base-input">Título</label>
                <input type="text" name="titulo" id="base-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    value="{{ old('titulo', $libro->titulo ?? '') }}"
                >
            </div>

            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="base-input">Autor</label>
                <input type="text" name="autor" id="base-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    value="{{ old('autor', $libro->autor ?? '') }}"
                >
            </div>

            <a href="{{ route('dashboard') }}" method="" title="Volver"
                class="bg-red-600 hover:bg-red-700 text-sm font-medium text-white px-4 py-2 rounded inline-flex items-center">
                <svg class="w-5 h-5 text-gray-800 dark:text-white text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>

            </a>
            <button type="submit" class="bg-green-600 hover:bg-green-700 text-sm font-medium text-white px-4 py-2 rounded inline-flex items-center" title="Guardar">
                <svg class="w-5 h-5 text-gray-800 dark:text-white text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"/>
                </svg>
            </button>
        </form>
    </div>
</x-app-layout>
