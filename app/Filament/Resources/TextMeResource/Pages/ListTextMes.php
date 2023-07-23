<?php

namespace App\Filament\Resources\TextMeResource\Pages;

use App\Filament\Resources\TextMeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTextMes extends ListRecords
{
    protected static string $resource = TextMeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
