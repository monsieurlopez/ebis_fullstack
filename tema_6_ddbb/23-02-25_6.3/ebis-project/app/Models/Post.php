<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    public function usuario() {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function comentarios() {
        return $this->hasMany(Comentario::class, 'post_id');
    }

    
}
