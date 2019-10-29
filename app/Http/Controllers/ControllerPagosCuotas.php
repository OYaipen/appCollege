<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PagoCuotas;
use App\Registrar;
use App\Rol;

class ControllerPagosCuotas extends Controller
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
            return PagoCuotas::join('registrars','registrars.id','=','pago_cuotas.id_pagante') 
            ->select('pago_cuotas.id_pagante','pago_cuotas.fullname','pago_cuotas.nombrePlan',
            'pago_cuotas.vuelto','pago_cuotas.pagocuota','pago_cuotas.created_at',
            'pago_cuotas.pensionPlan','pago_cuotas.segundopago','pago_cuotas.id') 
            ->get(); 
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
        $cuota = new PagoCuotas();
        $cuota->id_pagante = $request->id_pagante;
        $cuota->pagocuota = $request->pagocuota;
        $cuota->fullname = $request->fullname;
        $cuota->nombrePlan = $request->nombrePlan;
        $cuota->pensionPlan = $request->pensionPlan;
        $cuota->vuelto = $request->vuelto;
        $cuota->segundopago = $request->segundopago;
        $cuota->user_id_cuotas = auth()->id();
        $cuota->save();
        return $cuota;
    }

    public function buscarPagos($fecha,$fecha2){
        return PagoCuotas::join('registrars','registrars.id','=','pago_cuotas.id_pagante') 
            ->select('pago_cuotas.id_pagante','pago_cuotas.fullname','pago_cuotas.nombrePlan',
            'pago_cuotas.vuelto','pago_cuotas.pagocuota','pago_cuotas.created_at',
            'pago_cuotas.pensionPlan','pago_cuotas.segundopago') 
           ->whereBetween('pago_cuotas.created_at',array($fecha,$fecha2))
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
