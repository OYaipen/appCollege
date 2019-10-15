<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rols', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullname');
            $table->integer('edad');
            $table->integer('celular');
            $table->date('nacimiento');
            $table->string('dni');
            $table->string('email');
            $table->string('direccion');
            $table->string('sexo');
            $table->string('nombrepadre');
            $table->integer('edadpadre');
            $table->integer('celularpadre');
            $table->string('dnipadre');
            $table->integer('telf');
            $table->string('como');
            $table->string('informante');
            $table->string('jalador');
            $table->bigInteger('user_id_rol')->unsigned();
            $table->foreign('user_id_rol')->references('id')->on('users');
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
        Schema::dropIfExists('rols');
    }
}
