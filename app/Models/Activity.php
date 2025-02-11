<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'time', 'title', 'date', 'summary', 'content', 'image', 'images', 'slug'
    ];

    protected $appends = ['image_path', 'images_path'];

    public function imagePath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/' . $this->image));
    }

    public function imagesPath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/'));
    }

    protected $casts = [
        'images' => "array"
    ];

}
