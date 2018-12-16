<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Message from user </title>

        <!-- Fonts -->
       

        <!-- Styles -->
        <style>
        
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
         username: {{ $customdata->name }}<br>
         email: {{ $customdata->email }}<br>
         subject: {{ $customdata->subjecte }}<br>
         message: {{ $customdata->message }}<br>
        
        </div>
    </body>
</html>
