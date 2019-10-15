<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rol;

class ControllerRol extends Controller
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
        if ($request->ajax()) {
            return Rol::where('user_id_rol', auth()->id())->get();
        } else {
            return view('home');
        }
    }
    public function SearchFecha($fecha,$fecha2){
        return Rol::
            select('id','fullname','dni','celular','sexo','created_at')
           ->whereBetween('created_at',array($fecha,$fecha2))
           ->get();
    }
    public function ValidardniPadre($dnipadre){
        return Rol::where(['dnipadre' => $dnipadre]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rol = new Rol();
        $rol->fullname = $request->fullname;
        $rol->edad = $request->edad;
        $rol->celular = $request->celular;
        $rol->nacimiento = $request->nacimiento;
        $rol->dni = $request->dni;
        $rol->email = $request->email;
        $rol->direccion = $request->direccion;
        $rol->sexo = $request->sexo;
        $rol->nombrepadre = $request->nombrepadre;
        $rol->edadpadre = $request->edadpadre;
        $rol->celularpadre = $request->celularpadre;
        $rol->dnipadre = $request->dnipadre;
        $rol->telf = $request->telf;
        $rol->como = $request->como;
        $rol->informante = $request->informante;
        $rol->jalador = $request->jalador;
        $rol->user_id_rol = auth()->id();
        $rol->save();
    
        return $rol;
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
        $rol = Rol::find($id);
        $rol->fullname = $request->fullname;
        $rol->edad = $request->edad;
        $rol->celular = $request->celular;
        $rol->nacimiento = $request->nacimiento;
        $rol->dni = $request->dni;
        $rol->email = $request->email;
        $rol->direccion = $request->direccion;
        $rol->sexo = $request->sexo;
        $rol->nombrepadre = $request->nombrepadre;
        $rol->edadpadre = $request->edadpadre;
        $rol->celularpadre = $request->celularpadre;
        $rol->telf = $request->telf;
        $rol->save();
        
        return $rol;
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
