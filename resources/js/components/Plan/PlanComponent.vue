<template>
  <div>
          <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>PLAN DE ESTUDIO</h1>
                    <div class="btn-toolbar">
                    <a href="/registrarplan" class="btn btn-primary mr-2">
                    <i class="fas fa-save"></i> CREAR</a> 
                      </div>
                </div>
            </div>
        </div>
      <div class="table-responsive-xl">
            <table class="table table-hover table-sm  text-center">
      <thead class="thead-dark">
        <tr>
          <th scope="col" class="icon-plan">PLAN</th>
          <th scope="col" class="icon-plan">MATRICULA</th>
          <th scope="col" class="icon-plan">PENSION</th>
          <th scope="col" class="icon-plan">1ER PAGO - PAGO-CASH</th>
          <th scope="col" class="icon-plan">2DO PAGO</th>
          <th scope="col" class="icon-plan">EDIT</th>
          <th scope="col" class="icon-plan">OPCION</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="(item, index) in plans" :key="index">
        <td>{{item.nombre}} Meses</td>
        <td>S/. {{item.matricula}}.00</td>
        <td>S/. {{item.pension}}.00</td>
        <td>S/. {{item.primerpago}}.00</td>
        <td>S/. {{item.segundopago}}.00</td>
        <td><a class="icon-lapiz" href="#" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
         @click="EditarFormulario(item)"><i class="fas fa-pen-alt"></i></a></td>
        <td>
          <input type="checkbox" class="activ" @click="activar(item)" v-bind:id="item.id" :checked="item.estado == 'activo'">
        </td>
      </tr>
    </tbody>
    </table>
      </div>
  <form @submit.prevent="EditarPlan(plan)" v-if="EditarPlanEstudio"> <!--inicio de form  -->
    <div class="modal fade" id="exampleModal"  tabindex="-1" 
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><!--  inicio de  modal -->
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Actualizar Plan de Estudio <i class="far fa-edit"></i></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        <div class="modal-body"><!--  inicio de body -->
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
               <select class="custom-select" v-model="plan.horario" required>
                        <option value="" selected disabled>Seleccione...</option>
                        <option>7:30 am a 05:00 pm</option>
                </select>
            </div>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text" >Pension S/.</span>
            </div>
           <select class="custom-select" v-model="plan.pension" required>
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
            <input type="number" class="form-control"  placeholder="Ingrese.." v-model="plan.matricula">
            <div class="input-group-prepend">
                <span class="input-group-text">0.00</span>
            </div>
        </div>
        <div class="input-group">
            <div class="input-group-prepend mb-3">
                <span class="input-group-text">Pago de 1era y 2da Cuota</span>
            </div>
            <input type="number" placeholder="1er Pago" v-model="plan.primerpago" aria-label="First name" class="form-control">
            <input type="number" placeholder="2do Pago"  v-model="plan.segundopago" aria-label="Last name" class="form-control">
        </div>
          </div><!--final de body -->

          <div class="modal-footer"><!--  inicio de footer -->
            <button type="submit" class="btn btn-success">Actualizar</button>
          </div><!--  final de footer -->
        </div>
      </div>
    </div><!-- fin de modal -->
    </form><!--final de form  -->
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
      plans:[], 
       plan:{nombre: '',horario: '', pension:'',
       matricula:'',primerpago:'',segundopago:''} ,   
       EditarPlanEstudio : false
    }
  },
  mounted() {
    console.log('estamos listos');
    axios.get('/bd-plan')
    .then(res =>{
      this.plans = res.data;
    })
  },
    methods:{
    EditarFormulario(item){
      this. EditarPlanEstudio = true;

      this.plan.nombre = item.nombre;
      this.plan.horario = item.horario;
      this.plan.pension = item.pension;
      this.plan.matricula = item.matricula;
      this.plan.primerpago = item.primerpago;
      this.plan.segundopago = item.segundopago;
      this.plan.id = item.id;
    },
    
    EditarPlan(plan){
      const x = document.getElementById(plan.id);
      if(x.checked == true){
        const params = {nombre: plan.nombre,
                      horario: plan.horario,
                      pension: plan.pension,
                      matricula: plan.matricula,
                      primerpago: plan.primerpago,
                      segundopago: plan.segundopago,
                      estado: 'activo'}
      axios.put(`/bd-plan/${plan.id}`,params)
      }else{
        const params = {nombre: plan.nombre,
                      horario: plan.horario,
                      pension: plan.pension,
                      matricula: plan.matricula,
                      primerpago: plan.primerpago,
                      segundopago: plan.segundopago,
                      estado: 'inactivo'}
        axios.put(`/bd-plan/${plan.id}`,params)
      }
      
      axios.get('/bd-plan')
            .then(res =>{
            this.plans = res.data;
             swal("Buen Trabajo!", "Plan Actualizado Correctamente!", "success");

            $("#exampleModal").modal("hide");
            $('#exampleModal').modal({backdrop: 'static', keyboard: false})
          })
    },
    activar(item){
      const x = document.getElementById(item.id);
      if(x.checked == true){
        const params = {nombre: item.nombre,
                      horario: item.horario,
                      pension: item.pension,
                      matricula: item.matricula,
                      primerpago: item.primerpago,
                      segundopago: item.segundopago,
                      estado: 'activo'}
        axios.put(`/bd-plan/${item.id}`,params)
      }else{
        const params = {nombre: item.nombre,
                      horario: item.horario,
                      pension: item.pension,
                      matricula: item.matricula,
                      primerpago: item.primerpago,
                      segundopago: item.segundopago,
                      estado: 'inactivo'}
        axios.put(`/bd-plan/${item.id}`,params)
      }
    }
  }
}
</script>
<style  scoped>
.icon-plan { 
   color: rgb(10, 10, 10);
} 
.icon-plan:hover {
	 color: #cf4d25;
}
.icon-lapiz { 
   color: rgb(14, 13, 13);
} 
.icon-lapiz:hover {
	 color: #340ca0;
}
.activ{
  position: relative;
  width: 30px;
  height: 15px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  transition: .5s;
}
.activ:checked{
  background: #03a9f4;
}
.activ:before{
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0,0,0,.2);
  transition: .5s;
}
.activ:checked:before{
  left: 15px;
}
</style>