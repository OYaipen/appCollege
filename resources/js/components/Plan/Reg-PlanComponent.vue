<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>REGISTRAR</h1>
                    <div class="btn-toolbar">
                    <a href="/plan" class="btn btn-primary mb-2">
                    <i class="fas fa-hand-point-left"></i> REGRESAR</a> 
                      </div>
                </div>
            </div>
        </div>
            <form  @submit.prevent="registrar">
        <div class="custom-control custom-switch mb-2">
            <input type="checkbox" class="custom-control-input" id="pagoUnico" value="pagoUnico" v-model="directoPago" />
            <label class="custom-control-label" for="pagoUnico">Pago al cash $</label>
        </div>
        
            <div class="input-group mb-2">
            <div class="input-group-prepend">
                <label class="input-group-text">Tipo de Plan</label>
             </div>
               <select class="custom-select"  v-model="plan.nombre" required>
                        <option value="" selected disabled>Seleccione...</option>
                        <option value="1">1 Meses</option>
                        <option value="3">3 Meses</option>
                        <option value="4">4 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="9">9 Meses</option>
                        <option value="12">12 Meses</option>
                </select>
            </div>
            <div class="input-group mb-2">
            <div class="input-group-prepend">
                <label class="input-group-text">Horario</label>
             </div>
               <select class="custom-select"  v-model="plan.horario" required>
                        <option value="" selected disabled>Seleccione...</option>
                        <option>7:30 am a 05:00 pm</option>
                </select>
            </div>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text" >Pension S/.</span>
            </div>
           <select class="custom-select"  v-model="plan.pension" required>
                        <option value="" selected disabled>Seleccione...</option>
                        <option value="250">250 - 1 Meses</option>
                        <option value="750">750 - 3 Meses</option>
                        <option value="950">950 - 4 Meses</option>
                        <option value="1250">1250 - 6 Meses</option>
                        <option value="1715">1715 - 9 Meses</option>
                        <option value="2050">2050 - 12 Meses</option>
                </select>
            <div class="input-group-prepend">
                <span class="input-group-text">0.00</span>
            </div>
        </div>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text" >Matricula S/.</span>
            </div>
            <input type="number" class="form-control" :disabled="!directo" placeholder="Ingrese.." v-model="plan.matricula" required>
            <div class="input-group-prepend">
                <span class="input-group-text">0.00</span>
            </div>
        </div>
        <div class="input-group">
            <div class="input-group-prepend mb-3">
                <span class="input-group-text">Pago de 1era y 2da Cuota</span>
            </div>
            <input type="number" placeholder="1er Pago"    v-model="plan.primerpago" aria-label="First name" class="form-control">
            <input type="number" placeholder="2do Pago" :disabled="!directo" v-model="plan.segundopago" aria-label="Last name" class="form-control">
        </div>
        <button type="submit" class="btn btn-dark btn-lg btn-block mb-2">Registrar</button>
     </form>
        <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Muy Importante!</h4>
        <p> - Verificar si El Joven o Señorita , Padre o Apoderado Realizara el Pago al Cash o Pagara por Cuotas. <br>
            - Al Realizar el Pago por Cuotas el Alumno Debera Pagar la Matricula. <i class="fas fa-frown"></i> <br>
            - No Olvide que si el Alumno Paga al Cash no Paga Matricula. <i class="fas fa-grin-hearts"></i></p>
        <hr>
         <p class="mb-0">Que tenga un Buen dia Gracias!..</p>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';
    export default {
        data(){
            return{
                directoPago : false,
                plans:[],
                plan:{nombre: '', horario:'',pension:'',matricula:'',primerpago:'',segundopago:''}
            }
        },
         computed:{
        directo:function(){
            return !this.directoPago;
        }
            },
        methods:{
            registrar(){
           const params = {
               nombre: this.plan.nombre,
               horario: this.plan.horario,
               pension:  this.plan.pension,
               matricula: this.plan.matricula,
               primerpago: this.plan.primerpago,
               segundopago: this.plan.segundopago,
                }

             this.plan.nombre = '';
             this.plan.horario  = '';
             this.plan.pension = '';
             this.plan.matricula = '';
             this.plan.primerpago = '';
             this.plan.segundopago  = '';

             axios.post('/bd-plan',params)
             .then(res => {
                 this.plans.push(res.data)
                 this.directoPago = false,
                  swal("Buen Trabajo!", "Plan Registrado Correctamente!", "success");
             })
            }
        }

        }
       
    
</script>