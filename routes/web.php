<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('pages.home');
})->name('home');

Route::get('/services/software-engineering', function () {
    return view('pages.services.software_engineering');
})->name('services.se');

Route::get('/services/digital-marketing', function () {
    return view('pages.services.digital_marketing');
})->name('services.dm');

Route::get('/services/ecommerce', function () {
    return view('pages.services.ecommerce');
})->name('services.ecommerce');

Route::get('/services/digital-transformation', function () {
    return view('pages.services.digital_transformation');
})->name('services.dt');
