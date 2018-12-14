<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\model\Quote;
use Illuminate\Support\Facades\Storage;
use Validator;
use App\model\QuoteItem;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Message::paginate(10000), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        $rules = [
            'email' => 'required|email',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
       
        $input = $request->all();
        $quote = Quote::create(['email'=> $input['email']]);

        $quoteitem = QuoteItem::create(['quote_id'=>$quote->id,'item_id'=>5,'quantity'=>13]);  
        return response()->json($quoteitem, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $quote = Quote::findOrFail($id);
        return response()->json( $quote, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    

    public function delete($id)
    {
        $quote = Quote::findOrFail($id);
        $quote->delete();
        return response()->json(null, 204);
    }


}
