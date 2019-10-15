<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrarInformantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrar_informantes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('apellido');
            $table->integer('celular');
            $table->bigInteger('user_id_informante')->unsigned();
            $table->foreign('user_id_informante')->references('id')->on('users');
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
        Schema::dropIfExists('registrar_informantes');
    }
}
