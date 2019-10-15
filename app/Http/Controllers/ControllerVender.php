<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vender;
use App\Rol;

class ControllerVender extends Controller
{
    public function index(request $request)
    {
       if($request->ajax()){   
           return Vender::join('rols','rols.id','=','venders.id_rols') 
           ->select('rols.nAlumnos','registrar_plans.turno','registrar_plans.horario','registrar_plans.nombreP',
           'registrar_plans.precioP','registrar_plans.precioM','rols.created_at') 
           ->get(); 
       }else{  
           return view('vender'); 
       }  
    }
}
