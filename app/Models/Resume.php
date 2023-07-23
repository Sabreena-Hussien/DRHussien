<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ResumeType;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = ["date", "title", "description", "order", "resumeType_id"];

    // protected $with = ['resumeType'];
    // public function resumeType()
    // {
    //     return $this->belongsTo(ResumeType::class, 'resumeType_id', 'id');
    // }
    public function resumeType()
    {
        return $this->belongsTo(ResumeType::class, "resumeType_id", "id");
    }
}
