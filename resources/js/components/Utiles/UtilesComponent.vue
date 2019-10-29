<template>
  <div>
            <div class="row">
            <DIV class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>UTILES  <i class="fas fa-box-open"></i></h1>
                    <div class="btn-toolbar">
                    <a href="/registrarutil" class="btn btn-info mb-2">
                    <i class="fas fa-save"></i> CREAR</a> 
                      </div>
                </div>
            </div>
        </div>
<div class="table-responsive-xl">
      <table class="table table-hover table-sm  text-center table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col" class="icon-utiles">NOMBRE</th>
          <th scope="col" class="icon-utiles">PRECIO</th>
          <th scope="col" class="icon-utiles">STOCK</th>
          <th scope="col" class="icon-utiles">OPCIONES</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="(item, index) in utiles" :key="index">
        <td>{{item.descripcion}}</td>
        <td>S/. {{parseFloat(item.precio).toFixed(2)}}</td>
        <td>{{item.stock}} Unidades</td>
        <td><a  href="#" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
         @click="EditarFormulario(item)">Agregar</a></td>
         
      </tr>
    </tbody>
    </table>
</div>
    <form @submit.prevent="editarProducto(producto)" v-if="EditarUtiles"> <!--inicio de form  -->
    <div class="modal fade" id="exampleModal" tabindex="-1" 
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><!--  inicio de  modal -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Agregar Productos</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        <div class="modal-body"><!--  inicio de body -->
       <!--  <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Nombre</span>
            </div>
            <input type="text" class="form-control" v-model="producto.descripcion" required>
        </div>
              <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Precio S/.</span>
            </div>
            <input type="number" class="form-control" v-model="producto.precio" required>
            <div class="input-group-prepend">
                <span class="input-group-text">0.00</span>
            </div>
        </div> -->
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Stock</span>
            </div>
            <input type="number" class="form-control" v-model="producto.stock" required>    
        </div>
                    <div class="row">
                <div class="col-sm">
              <button type="submit" class="alert alert-primary  btn-block mb-2"><b>Agregar +</b></button>
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
import swal from 'sweetalert';
export default {
  data() {
    return {
    utiles:[], 
    producto:{descripcion: '', precio:'',stock: ''},   
    EditarUtiles : false
    }
  },
  mounted() {
    console.log('estamos listos');
    axios.get('/bd-utiles')
    .then(res =>{
      this.utiles = res.data;
    })
  },
    methods:{
    EditarFormulario(item){
      this.EditarUtiles = true;

        this.producto.descripcion = item.descripcion;
        this.producto.precio = item.precio;
        this.producto.stock = item.stock;
        this.producto.id = item.id;
    },
    
      editarProducto(producto){        
        const params = {
            descripcion: producto.descripcion,
            precio: producto.precio,
            stock: producto.stock
            }
        axios.put(`/bd-utiles/${producto.id}`, params)

        .then(res=>{
          editarProducto: false
          const index = this.utiles.findIndex(
            productoBuscar => productoBuscar.id === res.data.id)
          this.utiles[index] = res.data;

          axios.get('bd-utiles')
         .then(res => {
          this.utiles = res.data;
          swal("Producto Agregado!", "Correctamente!", "success");

          $("#exampleModal").modal("hide");
          $('#exampleModal').modal({backdrop: 'static', keyboard: false})
          })
        })
      },
  }
}
</script>
<style  scoped>
.icon-utiles { 
   color: rgb(10, 10, 10);
} 
.icon-utiles:hover {
	 color: #cf4d25;
}
.icon-lapiz { 
   color: rgb(14, 13, 13);
} 
.icon-lapiz:hover {
	 color: #340ca0;
}
</style>