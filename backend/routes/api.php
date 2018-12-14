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
Route::middleware('auth:api')->get('/items', 'ItemController@index');


//item 
Route::post('items', 'ItemController@store');
Route::get('items/{id}', 'ItemController@show');
Route::get('items', 'ItemController@index');
Route::delete('items/{id}', 'ItemController@delete');
Route::put('items/{item}', 'ItemController@update');
Route::get('itemsBy/{type}/{id}', 'ItemController@itemsBy');


//constants
Route::get('/categories', 'ConstantsController@categories');
Route::get('/brands', 'ConstantsController@brands');


//auth
Route::post('/login', 'AuthController@login');
Route::post('/signup', 'AuthController@register');

//message
Route::post('/messages', 'MessageController@store');
Route::get('/messages', 'MessageController@index');

//Route::get('/item', 'ItemController@index');

//quote
Route::post('/quotes', 'QuoteController@store');




