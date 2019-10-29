<template>
<div class="container-fluid">
            <div class="row">
            <DIV class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                     <h1>PUNTO DE VENTAS </h1>
                      <div class="btn-toolbar">
                     <h1>Total: S/. {{parseFloat(sumtotal).toFixed(2)}}</h1>
                    </div>
                </div>
            </div>
        </div>
          <div class="input-group mb-2">
            <input type="text" class="form-control" v-model="busqueda"  placeholder="Buscar Producto.." required>
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
          </div>
<form @submit.prevent="venta(producto)" >
<div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Vender Producto</h4>
      </div>
      <div class="modal-body">         
        <div class="input-group">
        <input type="text" class="form-control" v-model="ventas.x" disabled>
        <input type="text" class="form-control" v-model="ventas.y" disabled>
        <input type="hidden" class="form-control" v-model="ventas.s" disabled>
        <input type="hidden" class="form-control" v-model="ventas.t" disabled>
        <input type="hidden" class="form-control" v-model="ventas.precio" disabled>
        <input type="number" placeholder="Cantidad" class="form-control" v-model="ventas.cantidad" required>
        </div>  
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-success">Vender</button>
        <button class="btn btn-outline-danger" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>
</form>
<!------------------------------------------ TABLA DE PRODUCTOS VENDIDOS ------------------------------------------>
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
      <tr v-for="(item, index) in filtrobuscar" :key="index">
        <td>{{item.descripcion}}</td>
        <td>S/. {{parseFloat(item.precio).toFixed(2)}}</td>
        <td>{{item.stock}} Unidades</td>
        <td><a href="#" data-toggle="modal" data-target="#exampleModal" data-backdrop="static"
         @click="agregar(item)">Vender</a></td>
      </tr>
    </tbody>
    </table>
</div>
<!----------------------------------------------------------------------------------------------------------------->
</div>
</template>
<script>
import swal from 'sweetalert';
export default {
    data(){
      return{
        utiles: [],
        producto: {descripcion: '',precio: '',stock: ''},
        busqueda: "",
        fecha: [],
        ventas: [],
        MostrarUtiles:false,
        sumtotal: '0.00'
      }
    },
    mounted(){

      axios.get('/sumtotal')
      .then(res => {
        this.sumtotal = res.data;
      })
      axios.get('ventas')
      .then(res => {
      this.ventas = res.data;
      })
        axios.get('/bd-utiles')
    .then(res =>{
      this.utiles = res.data;
    })

    },
    methods:{
      agregar(item){
       /*  this.MostrarUtiles = true; */
        this.ventas = {};
        this.ventas.x = item.descripcion;
        this.ventas.y = 'S/. '+item.precio;
        this.ventas.precio = item.precio;
        this.ventas.s = item.id;
        this.ventas.t = item.stock;
      },
      venta(){
        const id = this.ventas.s;
        const x = this.ventas.x;
        const y = parseFloat(this.ventas.precio);
        const t = parseInt(this.ventas.t);
        const l = parseInt(this.ventas.cantidad);
        const stock = t - l;
        const precio = y * l;

          const params = {
          id_producto: id,
          cantidad: l,
          total: precio
        }

        if(l > t){
           swal("Stock Insuficiente!","Revisar Stock , Stock Sctual: "+t+" Unidades", "error");
        }else{
          axios.post('/bd-Ventas',params)
          swal("Venta Exitosa!",x+" Vendido Correctamente", "success");
          const edit = {
            descripcion: x,
            precio: y,
            stock: stock
          }

          axios.put(`/bd-utiles/${id}`,edit)
            .then(res=>{
            const index = this.utiles.findIndex(productedit => productedit.id === res.data.id)
            this.utiles[index] = res.data;
            })

          axios.get('/sumtotal')
          .then(res => {
          this.sumtotal = res.data;
          })
          
          axios.get('ventas')
          .then(res => {
          this.ventas = res.data;
           })

            this.busqueda = '';

          $("#exampleModal").modal("hide");
          $("#exampleModal").modal({backdrop: 'static', keyboard: false})
        } 
      },
    },
    computed:{

      filtrobuscar: function() {
          return this.utiles.filter((item) => 
          {
            return item.descripcion.toLowerCase().match(this.busqueda.toLowerCase());
          }) 

        }    

      }
};
</script>
<style  scoped>
.icon-ventas { 
   color: rgb(10, 10, 10);
} 
.icon-ventas:hover {
	 color: #cf4d25;
}
</style>