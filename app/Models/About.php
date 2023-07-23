<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    protected $fillable = ["about_me", "name", "birth", "address", "phone1", "phone2", "email", "about_me_long"];
}
