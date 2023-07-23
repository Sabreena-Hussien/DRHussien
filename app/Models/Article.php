<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ["title", "summary", "image", "content", "slug", "date", "comments_id"];

    protected $appends = ['image_path'];

    public function imagePath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/' . $this->image));
    }
}
