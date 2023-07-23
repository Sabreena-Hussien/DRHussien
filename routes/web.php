<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Activity;
use App\Models\About;
use App\Models\Comment;
use App\Models\Resume;
use App\Models\ResumeType;
use App\Models\TextMe;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
//All pages should add new Route::get...
Route::get('/', function () {
    return Inertia::render('Home', [
        "activities" => Activity::limit(3)->get(),
        "articles" => Article::limit(3)->get(),
        "abouts" => About::all(),
    ]);
});


Route::get('/whoami', function () {
    return Inertia::render('WhoAmI', [
        "abouts" => About::all(),
        "resumes" => Resume::all(),
        "resumeType_id" => Resume::with('resumeType')->find(1),
    ]);
});

Route::get('/articles', function () {
    return Inertia::render('Articles', [
        "articles" => Article::limit(4)->get(),
    ]);
});

Route::get('/article/{slug}', function ($slug) {
    $article = Article::find($slug);
    // $comments = Article::all();

    // Render the 'article' Inertia.js page and pass the article data
    return Inertia::render('Article', [
        'articles' =>  $article,
        // 'comments' => $comments,
    ]);
})->name('article');

Route::get('/activities', function () {
    return Inertia::render('Activities', [
        "activities" => Activity::limit(4)->get()
    ]);
});
Route::get('/activity/{slug}', function ($slug) {
    // Fetch the data for the activity with the given ID from the database
    $activity = Activity::find($slug);
    $images = Activity::All();

    // Render the 'activity' Inertia.js page and pass the activity data
    return Inertia::render('Activity', [
        'activities' => $activity,
        'images' => $images,
    ]);
});
