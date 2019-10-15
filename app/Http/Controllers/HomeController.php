<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function Home()
    {
        return view('home');
    }
    public function Jaladores()
    {
        return view('jaladores');
    }
    public function Informantes()
    {
        return view('informantes');
    }
    public function Plan()
    {
        return view('plan');
    }
    public function Utiles()
    {
        return view('utiles');
    }
    public function Pagos()
    {
        return view('pagos');
    }
    public function Vender()
    {
        return view('vender');
    }
    public function Ventas()
    {
        return view('ventas');
    }
    public function Alumnos()
    {
        return view('alumnos');
    }
    public function Pay()
    {
        return view('paytoday');
    }
}
