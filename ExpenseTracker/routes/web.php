<?php

use Illuminate\Support\Facades\Route;

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

Route::get('foo', function () {
    return 'Hello World2';
});

Route::get('Expense/{id}', 'ExpenseController@show');
Route::delete('RemoveExpense/{id}', 'ExpenseController@delExpense');
Route::get('Expenses', 'ExpenseController@all');


Route::post('UpdateExpense','ExpenseController@createUpdateExpense');