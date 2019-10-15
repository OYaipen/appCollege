<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Alumnos;
use App\Rol;
use App\RegistrarPlan;

class ControllerAlumnos extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if($request->ajax()){   
            return Alumnos::join('rols','rols.id','=','alumnos.id_rol')
            ->join('registrar_plans','registrar_plans.id','=','alumnos.id_plan') 
            ->select('rols.fullname','rols.edad','rols.celular','rols.nacimiento','rols.dni',
            'registrar_plans.nombreP','registrar_plans.mesesP','registrar_plans.horario',
            'registrar_plans.turno','registrar_plans.precioP','registrar_plans.precioM')
            ->orderBy('registrars.id','ASC') 
            ->get(); 
        }else{  
            return view('pagos'); 
        } 
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
        //
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
        //
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
