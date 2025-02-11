<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutResource\Pages;
use App\Filament\Resources\AboutResource\RelationManagers;
use App\Models\About;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AboutResource extends Resource
{
    protected static ?string $model = About::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\TextInput::make('about_me')->label('معلومات مختصرة')->required(),
            Forms\Components\TextInput::make('name')->label('الاسم')->required(),
            Forms\Components\RichEditor::make('about_me_long')->label('معلومات مطولة')->required(),
            Forms\Components\TextInput::make('birth')->label('تاريخ ومحل الميلاد')->required(),
            Forms\Components\TextInput::make('address')->label('العنوان'),
            Forms\Components\TextInput::make('email')->label('الايميل'),
            Forms\Components\TextInput::make('phone1')->label('رقم التلفون الاول')->required(),
            Forms\Components\TextInput::make('phone2')->label('رقم التلفون الثاني')->required(),
            Forms\Components\FileUpload::make('cv_arabic')->label('السيرة الذاتية عربي')->required(),
            Forms\Components\FileUpload::make('cv_english')->label('السيرة الذاتية انجليزي')->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('about_me')->label('معلومات مختصرة'),
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
            'index' => Pages\ListAbouts::route('/'),
            'create' => Pages\CreateAbout::route('/create'),
            'edit' => Pages\EditAbout::route('/{record}/edit'),
        ];
    }
}
