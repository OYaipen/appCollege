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
        <div class="input-group mb-2">
            <input type="text" class="form-control" v-model="busqueda"  placeholder="Buscar Jalador.." required>
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
          </div>
          <div class="table-responsive-xl">
                    <table class="table table-hover table-sm  text-center table table-striped">
        <thead class="thead-dark">
            <tr>
            <th scope="col" class="icon-jalador">N° JALADOR</th>
            <th scope="col" class="icon-jalador">APELLIDOS Y NOMBRES</th>
            <th scope="col" class="icon-jalador">CELULAR</th>
            <th scope="col" class="icon-jalador">EDITAR</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in filtrobuscar" :key="index">
                    <td>JAL-{{item.id}}</td>
                    <td>{{item.apellidoJ}}</td>
                    <td>+51 {{item.celularJ}}</td>
                    <td><a href="" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
                    @click="EditarFormulario(item)"><i class="fas fa-pen-alt"></i></a></td>
                    <td>
                    <input type="checkbox" class="activ" @click="activar(item)" v-bind:id="item.id" :checked="item.estadoJ == 'activo'">
                    </td>


                    </tr>
        </tbody>
    </table>
          </div>
   <form @submit.prevent="EditarJala(jalador)" v-if="EditarJalador"> <!--inicio de form  -->
    <div class="modal fade" id="exampleModal" tabindex="-1" 
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><!--  inicio de  modal -->
      <div class="modal-dialog modal-lg" role="document">
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
      jaladores:[],
      jalador:{apellidoJ:'',celularJ:''},
      EditarJalador: false,
      busqueda:''     
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
      const x = document.getElementById(jala.id);

      if(x.checked == true){
        const params = {
          apellidoJ: jala.apellidoJ,
          celularJ: jala.celularJ,
          estadoJ: 'activo'
        }
        axios.put(`/bd-jalador/${jala.id}`,params)
      }
      else{
          const params = {
          apellidoJ: jala.apellidoJ,
          celularJ: jala.celularJ,
          estadoJ: 'inactivo'
        }
        axios.put(`/bd-jalador/${jala.id}`,params)
      }
        axios.get('/bd-jalador')
            .then(res =>{
            this.jaladores = res.data;
             swal(this.jalador.apellidoJ+" Actualizado!", "Acutalizacion Exitosa!", "success");

            $("#exampleModal").modal("hide");
            $('#exampleModal').modal({backdrop: 'static', keyboard: false})
          })
    },
    activar(item){
      const x = document.getElementById(item.id);
      if(x.checked == true){
        const params = {
          apellidoJ: item.apellidoJ,
          celularJ: item.celularJ,
          estadoJ: 'activo'
        }
        console.log(params)
        axios.put(`/bd-jalador/${item.id}`,params)
      }else{
        const params = {
          apellidoJ: item.apellidoJ,
          celularJ: item.celularJ,
          estadoJ: 'inactivo'
        }
        console.log(params)
        axios.put(`/bd-jalador/${item.id}`,params)
      }
    }
  },

      computed:{
      filtrobuscar: function() {
          return this.jaladores.filter((item) => 
          {
            return item.apellidoJ.toLowerCase().match(this.busqueda.toLowerCase());
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
