<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ["article_id", "name", "content", "image", "accepted", "message", "parent_id"];

    public function comments () {
        return $this->hasMany(Comment::class, "parent_id");
    }

}
