<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TextMeResource\Pages;
use App\Filament\Resources\TextMeResource\RelationManagers;
use App\Models\TextMe;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TextMeResource extends Resource
{
    protected static ?string $model = TextMe::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->label('الاسم')->required(),
                Forms\Components\TextInput::make('email')->label('الايميل')->required(),
                Forms\Components\TextInput::make('message')->label('الرسالة')->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTextMes::route('/'),
            'create' => Pages\CreateTextMe::route('/create'),
            'edit' => Pages\EditTextMe::route('/{record}/edit'),
        ];
    }
}
