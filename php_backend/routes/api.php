<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books', [UserController::class,'get']);
Route::post('/books',[UserController::class,'insert']);
Route::get('/books/{id}', [UserController::class,'show']);
Route::put('/books/{id}', [UserController::class,'update']);
Route::delete('/books/{id}',[UserController::class,'delete']);
