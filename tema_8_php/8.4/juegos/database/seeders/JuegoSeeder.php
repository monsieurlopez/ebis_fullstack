<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Juego;
use App\Models\Tag;

class JuegoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear etiquetas
        $tagRPG = Tag::firstOrCreate(['nombre' => 'RPG']);
        $tagAccion = Tag::firstOrCreate(['nombre' => 'Acción']);
        $tagSimulacion = Tag::firstOrCreate(['nombre' => 'Simulación']);
        $tagEstrategia = Tag::firstOrCreate(['nombre' => 'Estrategia']);
        $tagShooter = Tag::firstOrCreate(['nombre' => 'Shooter']);

        // Crear Juegos
        Juego::create([
            'titulo' => 'Age of Empires',
            'descripcion' => 'Juego de estrategia',
            'anio_lanzamiento' => 1997,
            'tags' => json_encode([$tagRPG->_id, $tagEstrategia->_id]),
        ]);

        Juego::create([
            'titulo' => 'Call of Duty',
            'descripcion' => 'Juego de disparos',
            'anio_lanzamiento' => 2003,
            'tags' => json_encode([$tagShooter->_id, $tagAccion->_id]),
        ]);

        Juego::create([
            'titulo' => 'The Witcher 3',
            'descripcion' => 'Juego de RPG',
            'anio_lanzamiento' => 2015,
            'tags' => json_encode([$tagRPG->_id, $tagAccion->_id]),
        ]);

        Juego::create([
            'titulo' => 'Grand Theft Auto V',
            'descripcion' => 'Juego de acción',
            'anio_lanzamiento' => 2013,
            'tags' => json_encode([$tagAccion->_id, $tagSimulacion->_id]),
        ]);

        Juego::create([
            'titulo' => 'Civilization VI',
            'descripcion' => 'Juego de simulación',
            'anio_lanzamiento' => 2015,
            'tags' => json_encode([$tagSimulacion->_id, $tagRPG->_id, $tagEstrategia->_id]),
        ]);
    }
}
