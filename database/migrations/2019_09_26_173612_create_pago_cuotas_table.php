<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagoCuotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pago_cuotas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_pagante');
            $table->integer('pagocuota');
            $table->string('fullname');
            $table->integer('nombrePlan');
            $table->integer('pensionPlan');
            $table->integer('vuelto');
            $table->integer('segundopago');
            $table->bigInteger('user_id_cuotas')->unsigned();
            $table->foreign('user_id_cuotas')->references('id')->on('users');
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
        Schema::dropIfExists('pago_cuotas');
    }
}
