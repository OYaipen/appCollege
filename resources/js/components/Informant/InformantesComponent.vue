<template>
    <div>
          <div class="row">
            <DIV class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>INFORMANTES</h1>
                    <div class="btn-toolbar">
                    <a href="/registrarInfo" class="btn btn-info mb-2">
                    <i class="fas fa-user-plus"></i> NUEVO</a> 
                      </div>
                </div>
            </div>
        </div>
        <div class="input-group mb-2">
            <input type="text" class="form-control" v-model="busqueda"  placeholder="Buscar Informante.." required>
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
          </div>
        <div class="tale-responsive-xl">
                <table class="table table-hover table-sm  text-center table table-striped"><!--inicio de tabla  -->
        <thead class="thead-dark">
            <tr>
            <th scope="col" class="icon-informante">N° INFORMANTE</th>
            <th scope="col" class="icon-informante">APELLIDOS Y NOMBRES</th>
            <th scope="col" class="icon-informante">CELULAR</th>
            <th scope="col" class="icon-informante">EDITAR</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in filtrobuscar" :key="index">
              <td>INFO-{{item.id}}</td>
              <td>{{item.apellido}}</td>
              <td>+51 {{item.celular}}</td>
              <td>
                <a 
                href="#" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
              @click="EditarFormulario(item)"><i class="fas fa-pen-alt"></i></a></td>
            </tr>
        </tbody>
      </table> <!--fin de tabla  -->
        </div>

<form @submit.prevent="EditarInformante(informante)" v-if="EditarInformanteActivo"> <!--inicio de form  -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><!--  inicio de  modal -->
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Restaurar Informante <i class="far fa-edit"></i></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        <div class="modal-body"><!--  inicio de body -->
      <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Apellido y Nombre</span>
            </div>
            <input type="text" class="form-control"  v-model="informante.apellido" required>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Celular</span>
            </div>
            <input type="text" class="form-control" maxlength="9" v-model="informante.celular" required>
        </div>
        <div class="row">
                <div class="col-sm-8">
              <button type="submit" class="alert alert-primary  btn-block mb-2"><b>Actualizar</b></button>
                </div>
                <div class="col-sm-4">
              <button type="button" class="alert alert-danger  btn-block mb-2" data-dismiss="modal"><b>Cerrar</b></button>
                </div>
            </div>
          </div><!--final de body -->

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
      informantes:[], 
      informante:{apellido:'',celular:''}, 
      EditarInformanteActivo: false,
      busqueda : ''
    }
  },
  mounted() {
    console.log('estamos listos');
    axios.get('/bd-informante')
    .then(res =>{
      this.informantes = res.data;
    })
  },
  methods:{
    Desactivar(){
      this.informante.apellido= false,
      this.informante.celular=false
    },
    EditarFormulario(item){
      this.EditarInformanteActivo = true;

      this.informante.apellido = item.apellido;
      this.informante.celular = item.celular;
      this.informante.id = item.id;
    },
    
  EditarInformante(informante){
      const params = {apellido: informante.apellido,
                      celular: informante.celular}
      axios.put(`/bd-informante/${informante.id}`,params)

    .then(res => {
        EditarInformante: false
        const index= this.informantes.findIndex(
          InformanteBuscar => InformanteBuscar.id === res.data.id )
          this.informantes[index] = res.data;

          // this.informante =  {apellido:'',celular:''}

          axios.get('/bd-informante')
            .then(res =>{
            this.informantes = res.data;
             swal(this.informante.apellido+" Actualizado!", "Actualizacion Correcta!", "success");
            $("#exampleModal").modal("hide");
            $('#exampleModal').modal({backdrop: 'static', keyboard: false})
          })
      })
    }
  },
      computed:{
      filtrobuscar: function() {
          return this.informantes.filter((item) => 
          {
            return item.apellido.toLowerCase().match(this.busqueda.toLowerCase());
          }) 
        }    
      }
}
</script>
<style  scoped>
.icon-informante { 
   color: rgb(10, 10, 10);
} 
.icon-informante:hover {
	 color: #cf4d25;
}
.icon-lapiz { 
   color: rgb(14, 13, 13);
} 
.icon-lapiz:hover {
	 color: #340ca0;
}
</style>