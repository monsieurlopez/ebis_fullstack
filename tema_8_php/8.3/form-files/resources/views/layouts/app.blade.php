<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Laravel App')</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body class="container mt-3 text-center">
    <h1 class="mb-3"> PHP. Laravel 8.3 </h1>
    <hr/>
    <nav class="nav justify-content-center">
        <li class="nav item">
            <a class="nav-link" href="/">Inicio</a>
        </li>
        <li class="nav item">
            <a class="nav-link" href="/contacto">Contacto</a>
        </li>
        <li class="nav item">
            <a class="nav-link" href="/archivos">Archivos</a>
        </li>
    </nav>
    <hr>
    <main>
        @yield('content')
    </main>
</body>
</html>
