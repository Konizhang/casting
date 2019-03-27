<?php

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


// Route::get('/aa', function () {
    

//     $path = "../public/images/items/item-1543377798.png";
//     $file = new Symfony\Component\HttpFoundation\File\File($path);

//     // Make a new response out of the contents of the file
//     // Set the response status code to 200 OK
//     $response = Response::make(
//         File::get($path), 
//         200
//     );

//     // Modify our output's header.
//     // Set the content type to the mime of the file.
//     // In the case of a .jpeg this would be image/jpeg
//     $response->header(
//         'Content-type',
//         $file->getMimeType()
//     );

//     // We return our image here.
//     return $response;
// });

