<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->post('/logout', 'AuthController@logout');
Route::middleware('auth:api')->get('/item', 'ItemController@index');

Route::post('/login', 'AuthController@login');
Route::post('/signup', 'AuthController@register');


//Route::get('/item', 'ItemController@index');

