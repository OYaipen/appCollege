<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RegistrarInformante;

class ControllerInformante extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            return RegistrarInformante::where('user_id_informante', auth()->id())->get();
        }else{
            return view('informantes');
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('registrarInfo');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $informante = new RegistrarInformante();
        $informante->apellido = $request->apellido;
        $informante->celular = $request->celular;
        $informante->estado = $request->estado;
        $informante->user_id_informante = auth()->id();
        $informante->save();
        return $informante;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $informante = RegistrarInformante::find($id);
        $informante->apellido = $request->apellido;
        $informante->celular = $request->celular;
        $informante->estado = $request->estado;
        $informante->save();
        return $informante;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
