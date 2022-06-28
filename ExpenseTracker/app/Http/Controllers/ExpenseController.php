<?php
 
namespace App\Http\Controllers;
 
// use App\Http\Controllers\Controller;
use App\UserExpense;
use Illuminate\Http\Request;
 
class ExpenseController extends Controller
{
     /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    private $request;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

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

    public function createUpdateExpense(Request $request)
    {
        $id = $this->request->input('eid');
        $ename = $this->request->input('ename');
        $eprice = $this->request->input('eprice');
        $edesc = $this->request->input('edesc');

        if( $id==-1)
        {
            $userExpense = new UserExpense;
            $userExpense->user_name = $ename;
            $userExpense->price = $eprice;
            $userExpense->description = $edesc;
 
            $userExpense->save();
        }
        else
        {
            $userExpense = UserExpense::find($id);
            $userExpense->user_name = $ename;
            $userExpense->price = $eprice;
            $userExpense->description = $edesc;
 
            $userExpense->save();
        }
        return response("Created",201);
    }

    
}