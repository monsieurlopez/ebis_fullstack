<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
    use HasFactory;

    protected $table = 'usuarios';

    public function posts() {
        return $this->hasMany(Post::class, 'usuario_id');
    }

    public function comentarios() {
        return $this->hasMany(Comentario::class, 'usuario_id');
    }
}
