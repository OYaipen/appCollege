<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrarJaladorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrar_jaladors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('apellidoJ');
            $table->integer('celularJ');
            $table->string('estadoJ');
            $table->bigInteger('user_id_jalador')->unsigned();
            $table->foreign('user_id_jalador')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registrar_jaladors');
    }
}
