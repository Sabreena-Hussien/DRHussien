<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Activity;
use App\Models\About;
use App\Models\Comment;
use App\Models\Contact;
use App\Models\Resume;
use App\Models\ResumeType;
use App\Models\TextMe;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;


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
        "abouts" => About::first(),
    ]);
});

Route::post('/', function (Request $request) {
    Contact::create($request->validate([
        'name' => ['required', 'max:50'],
        'email' => ['required', 'max:50'],
        'message' => ['required', 'max:200'],
    ]));
    return Redirect::back()->with('isSuccess', 'تم الارسال بنجاح');
});


Route::get('/whoami', function () {
    return Inertia::render('WhoAmI', [
        "abouts" => About::first(),
        "resumes" => Resume::with('resumeType')->get()->groupBy('resumeType.name'), //->get()->groupBy('resumeType.name') => use Elquent collection  get->then->groupBy
        // "resumes" => Resume::select('resumeType_id')->groupBy('resumeType_id')->get(),
        "resumeType_id" => Resume::with('resumeType')->find(1),
    ]);
});

Route::get('/articles', function () {
    return Inertia::render('Articles', [
        "articles" => Article::with('comments')->paginate(3),
        "lastArticles" => Article::limit(3)->get(),
        // "moreArticles" => Article::limit(3)->orderByDesc('id')->get(),
        // "moreComments" => Article::with('comments')->orderByDesc('comments'),
    ]);
});

// Route::post('/search', function(Request $request) {
//     return Redirect::back();
// })->name('search');

Route::get('/article/{slug}', function ($slug) {
    $article = Article::with('comments')->where('slug', $slug)->first();

    // Render the 'article' Inertia.js page and pass the article data
    return Inertia::render('Article', [
        'articles' =>  $article,
        "lastArticles" => Article::limit(3)->get(),
        'moreComments' =>  Article::join('comments', 'articles.id', '=', 'comments.article_id')
            ->select('articles.id', 'articles.title', 'articles.content', DB::raw('COUNT(comments.id) as comment_count'))
            ->groupBy('articles.id', 'articles.title', 'articles.content')
            ->orderByDesc('comment_count')
            ->take(3)
            ->get(),
    ]);
})->name('article');

Route::post('/comment', function (Request $request) {
    Comment::create($request->validate([
        'name' => ['required', 'max:50'],
        'message' => ['required', 'max:200'],
        'article_id' => ['required'], // Set the foreign key value
    ]));
    return redirect()->back();
});


Route::get('/activities', function () {
    return Inertia::render('Activities', [
        "activities" => Activity::paginate(3),
    ]);
});

Route::get('/activity/{slug}', function ($slug) {
    // Fetch the data for the activity with the given ID from the database
    $activity = Activity::where('slug', $slug)->first();

    // Render the 'activity' Inertia.js page and pass the activity data
    return Inertia::render('Activity', [
        'activities' => $activity,
    ]);
});


//Prev & Next ===> simplePaginate