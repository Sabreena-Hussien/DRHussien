<?php

namespace App\Filament\Resources\TextMeResource\Pages;

use App\Filament\Resources\TextMeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTextMe extends EditRecord
{
    protected static string $resource = TextMeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
