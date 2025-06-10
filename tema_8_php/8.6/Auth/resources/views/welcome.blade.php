<x-guest-layout>
    <div class="max-w-md mx-auto mt-4">
        <h1 class="text-2xl font-bold mb-4 text-center"> Iniciar Sesión </h1>

        @if(session('status'))
            <div class="mb-4 text-green-500"> {{ session('status') }} </div>
        @endif

        <form action="{{ route('login') }}" method="POST" class="flex-column">
            @csrf
            <div class="mb-4">
                <label for="email" class="block font-semibold">
                    Email:
                </label>
                <input type="email"
                name="email"
                id="email"
                required
                class="w-full border p-2 rounded">
            </div>
            <div class="mb-4">
                <label for="password" class="block font-semibold">
                    Contraseña:
                </label>
                <input type="password"
                name="password"
                id="password"
                required
                class="w-full border p-2 rounded">
            </div>

            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-sm font-medium text-white font-bold py-2 px-4 rounded mb-4">
                Entrar
            </button>
        </form>
    </div>
</x-guest-layout>