<?php

namespace App\model;

class Product 
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    //
     cateogry_id
 brand_id
 item_name
 item_desciption
 item_image
 Part Number
Weight 
 Materials
}
