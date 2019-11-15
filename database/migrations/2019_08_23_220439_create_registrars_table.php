<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_rol');
            $table->string('institucion');
            $table->string('materia');
            $table->string('escuela');
            $table->string('id_plan');
            $table->string('promocion');
            $table->date('fechainicio');
            $table->date('fechafinal');
            $table->string('foto')->nullable();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('registrars');
    }
}
