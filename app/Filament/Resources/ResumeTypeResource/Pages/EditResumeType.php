<?php

namespace App\Filament\Resources\ResumeTypeResource\Pages;

use App\Filament\Resources\ResumeTypeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditResumeType extends EditRecord
{
    protected static string $resource = ResumeTypeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
