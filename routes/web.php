<?php


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
//Registro principal
Route::get('/home','HomeController@Home')->name('home');
Route::get('/mostrar','ControllerAll@create')->name('mostrar');
// Route::resource('/bd-informes','ControllerAll')->middleware('auth');
Route::resource('/bd-informes','ControllerRol')->middleware('auth');
Route::get('/searchFecha/{fecha}/{fecha2}', 'ControllerRol@SearchFecha')->name('searchFecha');

Route::get('/foto','ControllerAll@myAvatar');
//Matricular
Route::get('/matricula','ControllerAll@index');
Route::get('/pagos','ControllerAll@pagos');
Route::resource('/bd-matricula','ControllerAll')->middleware('auth');
Route::get('/buscarFecha/{fecha}/{fecha2}', 'ControllerAll@buscarFecha')->name('buscarFecha');
// Route::get('/buscfecha/{buscar}', 'ControllerAll@search')->name('search');
//Alumnos
Route::get('/alumnos','HomeController@Alumnos')->name('alumnos');
//jaladores
Route::get('/jaladores','HomeController@Jaladores')->name('jaladores');
Route::get('/registrarjala','ControllerJalador@create')->name('registrarjala');
Route::resource('/bd-jalador','ControllerJalador')->middleware('auth');
//informantes
Route::get('/informantes','HomeController@Informantes')->name('informantes');
Route::get('/registrarInfo','ControllerInformante@create')->name('registrarInfo');
Route::resource('/bd-informante','ControllerInformante')->middleware('auth');
//plan de estudio
Route::get('plan','HomeController@Plan')->name('plan');
Route::get('/registrarplan','ControllerPlan@create')->name('registrarplan');
Route::resource('/bd-plan','ControllerPlan')->middleware('auth');
//plan de Utiles
Route::get('/utiles','ControllerUtiles@index');
Route::get('/registrarutil','ControllerUtiles@create')->name('registrarutil');
Route::resource('/bd-utiles','ControllerUtiles')->middleware('auth');
//pagos y mensualidades
Route::get('/pagos','HomeController@Pagos')->name('pagos');
Route::get('/bd-pagos','ControllerPagos@index');
//Ventas
Route::get('/buscfecha/{fecha}/{fecha2}', 'VentasController@buscfecha')->name('buscfecha');
// Route::get('/buscfecha/{buscar}', 'VentasController@search')->name('search');
Route::get('/ventas', 'VentasController@index');
Route::resource('/bd-Ventas','VentasController')->middleware('auth');
// Cuota
//Pagos Realizados
Route::resource('/bd-cuotas','ControllerPagosCuotas')->middleware('auth');
Route::get('/paytoday','HomeController@Pay')->name('paytoday');
Route::get('/cuotas','ControllerPagosCuotas@index');
Route::get('/buscarPagos/{fecha}/{fecha2}', 'ControllerPagosCuotas@buscarPagos')->name('buscarPagos');


Route::get('/ValidardniPadre/{dnipadre}', 'ControllerAll@ValidardniPadre')->name('ValidardniPadre');
// Route::get('Rol/{dnipadre}', function ($dnipadre) {
//     //
// })->where(['dnipadre' => $dnipadre]);
