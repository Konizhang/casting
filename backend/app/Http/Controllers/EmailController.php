<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;


class EmailController extends Controller
{
  

    public function send()
    {
              Mail::to("koni_zhang@hotmail.com")->send(new SendMail("hello motir"));
    }
}
