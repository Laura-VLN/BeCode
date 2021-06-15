<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/a-propos', [App\Http\Controllers\AproposController::class, 'index'])->name('apropos');

Route::get('todos/undone', [App\Http\Controllers\TodoController::class, 'undone'])->name('todos.undone');
Route::get('todos/done', [App\Http\Controllers\TodoController::class, 'done'])->name('todos.done');
Route::put('todos/makedone/{todo}', [App\Http\Controllers\TodoController::class, 'makedone'])->name('todos.makedone');
Route::put('todos/makeundone/{todo}', [App\Http\Controllers\TodoController::class, 'makeundone'])->name('todos.makeundone');

Route::resource('todos', TodoController::class);