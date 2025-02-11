<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;

class Article extends Model
{
    use HasFactory;


    protected $fillable = ["title", "summary", "image", "content", "slug", "date", "comments_id", "article_id"];

    public $appends = ['image_path', 'comment_date'];

    public function imagePath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/' . $this->image));
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    protected function commentDate(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at,
        );
    }
}
