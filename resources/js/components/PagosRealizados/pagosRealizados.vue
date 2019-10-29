<template>
    <div>
    <form @submit.prevent="buscar">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>PAGOS</h1>
                    <div class="btn-toolbar">
                       <button @click="tableToExcel('table')" class="btn btn-info mr-2" type="button" >
                        <i class="fas fa-download"></i>  EXCEL
                      </button>
                     <button type="submit" class="btn btn-danger mr-2"><i class="fas fa-search"></i> SEARCH </button>
                     <a href="pagos" class="btn btn-primary">
                     <i class="fas fa-hand-point-left"></i> REGRESAR</a> 
                      </div>
                </div>
            </div>
        </div>
<div class="row">
  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">F. INICIO</div>
      </div>           
       <input type="date" class="form-control" v-model="pagar.fecha" required>
    </div>
  </div>

  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">F. FINAL</div>
      </div>
        <input type="date" class="form-control" v-model="pagar.fecha2" required>
    </div>
  </div> 
</div>
    <div class="table-responsive-xl">
        <table class="table table-hover table-sm  text-center table table-striped">
            <thead class="thead-dark">
                <tr>
                    <!-- <th scope="col" class="icon-plan">ID</th> -->
                    <th scope="col" class="icon-plan">ALUMNO</th>
                    <th scope="col" class="icon-plan">CICLO</th>
                    <th scope="col" class="icon-plan">PENSION</th>
                    <th scope="col" class="icon-plan">CUOTA 2</th>
                    <th scope="col" class="icon-plan">ABONO</th>
                    <th scope="col" class="icon-plan">VUELTO</th>
                    <th scope="col" class="icon-plan">F.P</th>
                    <th scope="col" class="icon-plan">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in pagar" :key="index">
                    <!-- <td>M-{{item.id_pagante}}</td> -->
                    <td>{{item.fullname}}</td>
                    <td>{{item.nombrePlan}} Meses</td>
                    <td>S/. {{item.pensionPlan}}.00</td>
                    <td>S/. {{item.segundopago}}.00</td>
                    <td>S/. {{item.pagocuota}}.00</td>
                    <td>S/. {{item.vuelto}}.00</td>
                    <td>{{item.created_at}}</td>
                    <td>
                    <a
                    @click="MostrarFecha(item)"
                    data-toggle="modal" data-target="#exampleModal"
                    href="#">Impriimir
                    </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </form>
    <form v-if="FechaActiva" >
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between pb-2 ">
                    <h3></h3>
                    <div class="btn-toolbar">
                     <button type="#" 
                     class="btn btn-info mr-2" 
                     @click="download">
                     <i class="fas fa-download">
                         </i> Imprimir Ticket</button>
                      </div>
                </div>
            </div>
        </div>        
       <div class="row">
    <div class="col-sm">
      <div class="input-group mb-4 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">Nombre</div>
          </div>
          <input v-model="actual.fullname" class="form-control" disabled>
      </div>
    </div>
    <div class="col-sm">
      <div class="input-group mb-4 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">N° de Impresion</div>
          </div>
          <input v-model="actual.id" class="form-control" disabled>
      </div>
    </div>
   </div>
      </div>
    </div>
  </div>
</div>
    </form>
    </div>
</template>
<script>
import jsPDF from 'jspdf' 
export default {
        data(){
        return{
            pagar:[],
            actual:[],
            FechaActiva:false
         /*    paga: {created_at} */
        }
    },
        mounted() {
            console.log('estamos listos');
            axios.get('cuotas')
            .then(res =>{
            this.pagar = res.data;
            })
        },
        methods:{
             MostrarFecha(item){
        this.FechaActiva = true;
        this.actual = {};
        this.actual.fullname = item.fullname;
        this.actual.created_at = item.created_at;
        this.actual.nombrePlan = item.nombrePlan;
        this.actual.pagocuota = item.pagocuota;
        this.actual.vuelto = item.vuelto;
        this.actual.id = item.id;
    },
            download(){
              const doc = new jsPDF();
              const fechaHora = this.actual.created_at;
              const id = this.actual.id;
              const nombrePlan = this.actual.nombrePlan;
              const pagocuota = this.actual.pagocuota;
              const vuelto = this.actual.vuelto;

                doc.setLineWidth(1)
                doc.line(80,2, 0,2)
                doc.setFontSize(13);
                doc.text(2, 5,'--------------------------------------------------');
                doc.setTextColor(10, 10, 10);;
                doc.setFontSize(15);
                doc.setFontType('bold')
                doc.text(20, 10,'PRE POLICIAL');
                doc.setFontSize(11);
                doc.setFontType('normal')
                doc.text(22, 14,'MARIANO SANTOS');
                doc.setFontType('bold')
                doc.text(22, 18,'RUC : 2060989473');
                doc.setFontType('normal')
                doc.text(12, 22,'telf : 9287817383 / 72836716271');
                doc.setFontSize(13);
                doc.text(2, 25,'--------------------------------------------------');
                doc.setTextColor(10, 10, 10);;
                doc.setFontSize(15);
                doc.setFontType('bold')
                doc.text(18, 29,'--Nota de Venta--');
                doc.setFontSize(12);
                doc.setFontType('normal')
                doc.text(22, 34,'Folio N° N000-0'+id);
                doc.text(6, 39,"Fecha y Hora : "+fechaHora);
                doc.text(6, 44,"Observacion : ");
                doc.setLineWidth(0.5)
                doc.line(77,47, 2,47)
                doc.setFontType('bold')
                doc.text(6, 53,"Descripcion");
                doc.text(55, 53,"Importe");
                doc.setFontType('Normal')
                doc.text(5, 59,"Plan de "+nombrePlan+" Meses");
                doc.text(53, 59,"S/. "+pagocuota+".00");
                doc.setLineWidth(0.5)
                doc.line(77,63, 2,63)
                doc.text(6, 69,"Total : "+pagocuota+".00");
                doc.text(6, 74,"Vuelto : "+vuelto+".00");
                doc.setLineWidth(0.5)
                doc.line(77,77, 2,77)
                doc.save("Factura");
            },
            buscar(){
                const fecha = this.pagar.fecha;
                const fecha2 = this.pagar.fecha2;
                axios.get(`/buscarPagos/${fecha}%/${fecha2}%`)
                .then(res =>{
                    this.pagar = res.data;
                })
            },
        }     
}
</script>

