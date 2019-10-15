<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Padres;

class PadresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            return Padres::where('user_id_padres', auth()->id())->get();
        }else{
            return view('padres');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('registrarpadres');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $padres = new Padres();
        $padres->nombre = $request->nombre;
        $padres->edad = $request->edad;
        $padres->celular = $request->celular;
        $padres->user_id_padres = auth()->id();
        $padres->save();
    
        return $padres;
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
        $padres = Padres::find($id);
        $padres->nombre = $request->nombre;
        $padres->edad = $request->edad;
        $padres->celular = $request->celular;
        $padres->save();
        return $padres;
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
