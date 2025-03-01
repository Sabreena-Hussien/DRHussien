<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string("about_me");
            $table->string("name");
            $table->string("birth");
            $table->string("address");
            $table->string("email");
            $table->string("phone1");
            $table->string("phone2");
            $table->text("about_me_long");
            $table->string('cv_arabic');
            $table->string('cv_english');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abouts');
    }
};
