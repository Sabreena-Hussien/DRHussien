<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class About extends Model
{
    use HasFactory;

    protected $fillable = ["about_me", "name", "birth", "address", "phone1", "phone2", "email", "about_me_long", 'cv_arabic', 'cv_english'];

    protected $appends = ['cv_arabic_path', 'cv_english_path'];

    public function cvArabicPath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/' . $this->cv_arabic));
    }
    public function cvEnglishPath(): Attribute
    {
        return Attribute::make(fn () => asset('storage/' . $this->cv_english));
    }
}
