<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TabelaInicial extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_info_cadastradas', function (Blueprint $table) {
            $table->id('id')->autoIncrement();
            $table->string('email');
            $table->string('projeto');
            $table->string('type_teste');
            $table->string('responsavel');
            $table->string('escopo');
            $table->string('link');
            $table->string('versao');
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
        Schema::dropIfExists('tb_info_cadastradas');
    }
}
