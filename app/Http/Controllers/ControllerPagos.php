<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pagos;
use App\Rol;
use App\RegistrarPlan;

class ControllerPagos extends Controller
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
    public function index(request $request)
    {
       if($request->ajax()){   
           return Pagos::join('rols','rols.id','=','pagos.id_rols')
           ->join('registrar_plans','registrar_plans.id','=','pagos.id_plans') 
           ->select('rols.nAlumnos','rols.nombre','registrar_plans.turno','registrar_plans.horario',
           'registrar_plans.nombreP','registrar_plans.precioP','registrar_plans.precioM') 
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
    //     $historial = new PagosMensuales();
    //     $historial->nombreP = $request->nombreP;
    //     $historial->mesesP = $request->mesesP;
    //     $historial->precioP = $request->precioP;
    //     $historial->precioM = $request->precioM;
    //     $historial->user_id = auth()->id();
    //     $historial->save();
    
    //     return $plan;
    // }
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
        $pagos = Pagos::find($id);
        $pagos->apellido = $request->apellido;
        $pagos->nombre = $request->nombre;
        $pagos->edad = $request->edad;
        $pagos->celular = $request->celular;
        $pagos->nacimiento = $request->nacimiento;
        $pagos->plan = $request->plan;
        $pagos->fechainicio = $request->fechainicio;
        $pagos->fechafinal = $request->fechafinal;
        $pagos->util = $request->util;
        $pagos->save();
        return $pagos;
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
