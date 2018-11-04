<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Brand;
use App\model\Category;

class ConstantsController extends Controller
{
    public function categories()
    {
        return response()->json(Category::all(), 200);
    }

    public function brands()
    {
        return response()->json(Brand::all(), 200);
    }


}
