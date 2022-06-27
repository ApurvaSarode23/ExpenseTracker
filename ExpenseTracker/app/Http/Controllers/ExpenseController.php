<?php
 
namespace App\Http\Controllers;
 
// use App\Http\Controllers\Controller;
use App\UserExpense;
use Illuminate\Http\Request;
 
class ExpenseController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return View
     */
    public function show($id)
    {
        return response()->json(UserExpense::where('id', $id)->get());
    }

    public function all()
    {
        return response()->json(UserExpense::all());
    }

    
    public function delExpense($id)
    {
        $res= UserExpense::where('id', $id)->delete();
        return response()->json($res);
    }

    
}