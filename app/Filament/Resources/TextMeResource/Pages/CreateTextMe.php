<?php

namespace App\Filament\Resources\TextMeResource\Pages;

use App\Filament\Resources\TextMeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTextMe extends CreateRecord
{
    protected static string $resource = TextMeResource::class;
}
