<?php

use Illuminate\Database\Seeder;

class itemseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\model\item::class , 10)->create();
    }
}
