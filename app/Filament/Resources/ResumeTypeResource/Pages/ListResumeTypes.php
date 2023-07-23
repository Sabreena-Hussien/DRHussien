<?php

namespace App\Filament\Resources\ResumeTypeResource\Pages;

use App\Filament\Resources\ResumeTypeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListResumeTypes extends ListRecords
{
    protected static string $resource = ResumeTypeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
