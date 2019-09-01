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
       
         username: {{ $customdata['name'] }}<br>
         email: {{ $customdata['email'] }}<br>
            products :<br>

            <table>
            <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>No: </th>
            </tr>

            @foreach ($customdata['products'] as $product)

          
            <tr>
                <td>{{$product['product']['id']}}</td>
                <td>{{$product['product']['name']}} ({{$product['product']['partnumber']}})</td>
                <td>{{$product['quantity']}}</td>
            </tr>
            @endforeach

            </table>

        </div>
    </body>
</html>
