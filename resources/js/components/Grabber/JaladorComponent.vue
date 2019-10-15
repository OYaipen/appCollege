<template>
    <div>
                 <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>JALADORES</h1>
                    <div class="btn-toolbar">
                    <a href="/registrarjala" class="btn btn-primary mb-2">
                    <i class="fas fa-user-plus"></i> NUEVO</a> 
                      </div>
                </div>
            </div>
        </div>
          <div class="table-responsive-xl">
                    <table class="table table-hover table-sm  text-center">
        <thead class="thead-dark">
            <tr>
            <th scope="col" class="icon-jalador">N° JALADOR</th>
            <th scope="col" class="icon-jalador">APELLIDOS Y NOMBRES</th>
            <th scope="col" class="icon-jalador">CELULAR</th>
            <th scope="col" class="icon-jalador">EDIT</th>
            <th scope="col" class="icon-jalador">OPCION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in jaladores" :key="index">
                    <td>JAL-{{item.id}}</td>
                    <td>{{item.apellidoJ}}</td>
                    <td>{{item.celularJ}}</td>
                    <td><a class="icon-lapiz" href="" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
                    @click="EditarFormulario(item)"><i class="fas fa-pen-alt"></i></a></td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Desavtivar</label>
                      </div>
                    </td>
                    </tr>
        </tbody>
    </table>
          </div>
   <form @submit.prevent="EditarJala(jalador)" v-if="EditarJalador"> <!--inicio de form  -->
    <div class="modal fade" id="exampleModal" tabindex="-1" 
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><!--  inicio de  modal -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Restaurar Jalador <i class="far fa-edit"></i></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        <div class="modal-body"><!--  inicio de body -->
      <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Apellido y Nombre</span>
            </div>
            <input type="text" class="form-control"  v-model="jalador.apellidoJ" required>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Celular</span>
            </div>
            <input type="text" class="form-control" maxlength="9"  v-model="jalador.celularJ"  required>
        </div>
          </div><!--final de body -->

          <div class="modal-footer"><!--  inicio de footer -->
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success">Save</button>
          </div><!--  final de footer -->
        </div>
      </div>
    </div><!-- fin de modal -->
    </form><!--final de form  -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      jaladores:[],
      jalador:{apellidoJ:'',celularJ:''},
      EditarJalador: false     
    }
  },
  mounted() {
    console.log('estamos listos');
    axios.get('/bd-jalador')
    .then(res =>{
      this.jaladores = res.data;
    })
  },
  methods:{
    myFunction() {
    document.getElementById("exampleCheck1").disabled = true;
},
    EditarFormulario(item){
      this. EditarJalador = true;

      this.jalador.apellidoJ = item.apellidoJ;
      this.jalador.celularJ = item.celularJ;
      this.jalador.id = item.id;
    },
    
    EditarJala(jala){
      const params = {apellidoJ: jala.apellidoJ,
                      celularJ: jala.celularJ}
      axios.put(`/bd-jalador/${jala.id}`,params)

      .then(res => {
       EditarJalador: false
        const index= this.jaladores.findIndex(
          jaladorBuscar => jaladorBuscar.id === res.data.id )
          this.jaladores[index] = res.data;

          // this.jalador =  {apellidoJ:'',celularJ:''}

          axios.get('/bd-jalador')
            .then(res =>{
            this.jaladores = res.data;
             swal(this.jalador.apellidoJ+" Actualizado!", "Acutalizacion Exitosa!", "success");

            $("#exampleModal").modal("hide");
            $('#exampleModal').modal({backdrop: 'static', keyboard: false})
          })
      })
    }
  }
}
</script>
<style  scoped>
.icon-jalador { 
   color: rgb(10, 10, 10);
} 
.icon-jalador:hover {
	 color: #cf4d25;
}
.icon-lapiz { 
   color: rgb(14, 13, 13);
} 
.icon-lapiz:hover {
	 color: #340ca0;
}
</style>
