<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\model\Item;
use Illuminate\Support\Facades\Storage;
use Validator;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Item::paginate(9), 200);
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
            'name' => 'required|max:255',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $itemname  = time();
        $file_name =  "item-". $itemname.".png";
        $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $request['image']));
    
        file_put_contents(public_path().'/images/items/' . $file_name,$data );

        $input = $request->all();
        
        $input["image"] =  $itemname;

        $item = Item::create($input);
        return response()->json($item, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::findOrFail($id);
        return response()->json( $item, 200);
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
    public function update(Request $request,Item $item)
    {
        $item->update($request->all());
        return response()->json($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function delete($id)
    {

        $item = Item::findOrFail($id);
        $file = public_path().'/images/items/item-'.$item->image.'.png';
        $flag = file_exists($file);
        if( $flag ){
           unlink($file);
        }
        $item->delete();
        return response()->json(null, 204);
    }


    public function itemsBy(Request $request,$type,$id)
    {
   
         return response()->json( Item::where($type."_id",$id)->paginate(9), 200);
    }

  



}
