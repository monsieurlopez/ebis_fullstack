<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Libro;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::create([
            'name' => 'Sergio',
            'email' => 'admin@a.com',
            'password' => Hash::make('1234'),
            'role' => 'admin'
        ]);
        User::create([
            'name' => 'Raquel',
            'email' => 'user@ra.com',
            'password' => Hash::make('1234'),
            'role' => 'user'
        ]);

        Libro::factory(10)->create();
    }
}
