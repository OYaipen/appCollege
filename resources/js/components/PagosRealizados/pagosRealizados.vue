<template>
    <div>
    <form @submit.prevent="buscar">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>PAGOS</h1>
                    <div class="btn-toolbar">
                       <button @click="tableToExcel('table')" class="btn btn-success mr-2" type="button" >
                        <i class="fas fa-file-excel"></i> EXCEL
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
        <table class="table table-hover table-sm  text-center">
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
                    <td>{{item.created_at.substr(0,11)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </form>
    </div>
</template>
<script>
export default {
        data(){
        return{
            pagar:[]
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