<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrarPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrar_plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('nombre');
            $table->string('horario');
            $table->integer('pension');
            $table->integer('matricula')->nullable();
            $table->integer('primerpago')->nullable();
            $table->integer('segundopago')->nullable();
            $table->bigInteger('user_id_plan')->unsigned();
            $table->foreign('user_id_plan')->references('id')->on('users');
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
        Schema::dropIfExists('registrar_plans');
    }
}
