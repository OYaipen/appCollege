<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Registrar;
use App\Rol;
use App\RegistrarPlan;


class ControllerAll extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         if($request->ajax()){   
             return Registrar::join('rols','rols.id','=','registrars.id_rol')
             ->join('registrar_plans','registrar_plans.id','=','registrars.id_plan') 
             ->select('registrars.id','rols.fullname','rols.direccion','rols.edad','rols.email',
             'rols.nacimiento','rols.dni','rols.como','rols.sexo',
             'registrars.escuela','registrars.materia','registrars.institucion',
             'rols.nombrepadre','rols.edadpadre','rols.celularpadre','rols.telf',
             'registrar_plans.nombre','registrar_plans.horario','registrar_plans.pension','rols.celular',
             'registrar_plans.primerpago','registrar_plans.segundopago',
             'registrar_plans.matricula','registrars.created_at','registrars.fechainicio','registrars.fechafinal')
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
        return view('mostrar');
    }
  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $capturar = new Registrar();
        $capturar->id_rol = $request->id_rol;
        $capturar->institucion = $request->institucion;
        $capturar->materia = $request->materia;
        $capturar->escuela = $request->escuela;
        $capturar->id_plan = $request->id_plan;
        $capturar->promocion = $request->promocion;
        $capturar->fechainicio = $request->fechainicio;
        $capturar->fechafinal = $request->fechafinal;
        $capturar->user_id = auth()->id();
        $capturar->save();
    
        return $capturar;
    }

    // public function search($buscar){
    //     return Rol::where('fullname', $buscar)->get();
    // }

    public function buscarFecha($fecha,$fecha2){
        return Registrar::join('rols','rols.id','=','registrars.id_rol')
            ->join('registrar_plans','registrar_plans.id','=','registrars.id_plan') 
            ->select('registrars.id','rols.fullname','rols.celular','rols.email','registrars.escuela',
            'registrars.created_at','registrar_plans.nombre','registrar_plans.pension',
            'registrar_plans.matricula','registrar_plans.primerpago','registrar_plans.segundopago')
            ->orderBy('registrars.id','ASC') 
           ->whereBetween('registrars.created_at',array($fecha,$fecha2))
           ->get();
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
        // $plan_cuota = RegistrarPlan::find($id);
        // $plan_cuota->nombre = $request->nombre;
        // $plan_cuota->horario = $request->horario;
        // $plan_cuota->pension = $request->pension;
        // $plan_cuota->matricula = $request->matricula;
        // $plan_cuota->primerpago = $request->primerpago;
        // $plan_cuota->segundopago = $request->segundopago;
        // $plan_cuota->save();
        
        // return $plan_cuota;

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
