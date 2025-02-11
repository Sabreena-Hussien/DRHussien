<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResumeResource\Pages;
use App\Filament\Resources\ResumeResource\RelationManagers;
use App\Models\Resume;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Select;
use App\Models\ResumeType;
use Filament\Tables\Columns\TextColumn;

class ResumeResource extends Resource
{
    protected static ?string $model = Resume::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('date')->label('التاريخ')->required(),
                Forms\Components\TextInput::make('title')->label('العنوان')->required(),
                Forms\Components\RichEditor::make('description')->label('الوصف')->required(),
                Forms\Components\TextInput::make('order')->label('الترتيب')->required(),
                // Forms\Components\TextInput::make('resumeType_id')->label('اسم القسم')->required(),
                // Forms\Components\Select::new('resumeType')->label('اسم القسم')->model(ResumeType::class)->display('name')->required(),
                Select::make('resumeType_id')->label('اسم القسم')->options(ResumeType::all()->pluck('name', 'id')),
                ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('date')->label('التاريخ'),
                TextColumn::make('title')->label('العنوان'),
                TextColumn::make('resumeType_id')->label('اسم القسم'),
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
            'index' => Pages\ListResumes::route('/'),
            'create' => Pages\CreateResume::route('/create'),
            'edit' => Pages\EditResume::route('/{record}/edit'),
        ];
    }
}
