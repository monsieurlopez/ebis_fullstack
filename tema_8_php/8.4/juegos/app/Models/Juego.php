<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Juego extends Model
{
    protected $connection = 'mysql';
    protected $fillable = ['titulo', 'descripcion', 'anio_lanzamiento', 'tags'];

    protected $cast = [
        'tags' => 'array',
    ];

    public function tags() {
        $tagIds = json_decode(
            $this->attributes['tags'] ?? '[]', true
        );

        return Tag::whereIn('_id', is_array($tagIds)
            ? $tagIds
            : []
        )->get();
    }

}
