<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Libro>
 */
class LibroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $genres = ['Aventura', 'Ciencia Ficción', 'Drama', 'Romance', 'Terror', 'Suspense', 'Fantasía', 'Comedia'];

        return [
            'titulo' => $this->faker->sentence(3),
            'autor' => $this->faker->name,
            'publicacion' => $this->faker->year,
            'genero' => $genres[array_rand($genres)],
        ];
    }
}
