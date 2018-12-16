<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class QuoteMail extends Mailable
{
    use Queueable, SerializesModels;

    public $customdata;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($customdata)
    {
       $this->customdata  = $customdata;
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('op@apaceway.com')->view('email.quote');
    }
}
