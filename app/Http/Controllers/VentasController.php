<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ventas;
use App\RegistrarUtiles;

class VentasController extends Controller
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
           return Ventas::join('registrar_utiles','registrar_utiles.id','=','ventas.id_producto') 
           ->select('registrar_utiles.descripcion','ventas.cantidad','ventas.created_at','ventas.total') 
           ->get(); 
       }else{  
           return view('ventas'); 
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
        $venta = new Ventas();
        $venta->id_producto = $request->id_producto;
        $venta->cantidad = $request->cantidad;
        $venta->total = $request->total;
        $venta->save();

        return $venta;
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
        $venta = Ventas::find($id);
        $venta->id_producto = $request->id_producto;
        $venta->cantidad = $request->cantidad;
        $venta->total = $request->total;
        $venta->save();
        return $venta;
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


    public function buscfecha($fecha,$fecha2){
        return Ventas::join('registrar_utiles','registrar_utiles.id','=','ventas.id_producto')
           ->select('registrar_utiles.descripcion','ventas.cantidad','ventas.created_at','ventas.total')
           ->whereBetween('ventas.created_at',array($fecha,$fecha2))
           ->get();
    }
    public function SumarBusqueda($fecha,$fecha2){
        return Ventas::whereBetween('created_at', array($fecha,$fecha2))
                     ->select(DB::raw('SUM(total)'))
                     ->get();
    }
}
