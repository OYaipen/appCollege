<template>
<div class="container-fluid">
<form @submit.prevent="buscar">
    <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
        <h1>HISTORIAL DE VENTAS </h1>
        <div class="btn-toolbar">
          <button  @click="tableToExcel('table')"
          class="btn btn-info mr-2" type="button">
          <i class="fas fa-download"></i> EXCEL 
          </button>
          <button type="submit" class="btn btn-danger mr-2">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
        <h1></h1>
        <div class="btn-toolbar">
            <h1>Total: S/. {{parseFloat(sumtotal).toFixed(2)}}</h1>
        </div>
      </div>
    </div>
  </div>

<div class="row">
  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">F.INICIAL</div>
      </div>           
       <input type="date" class="form-control" v-model="ventas.fecha" required> 
    </div>
  </div>
  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">F.FINAL</div>
      </div>
        <input type="date" class="form-control" v-model="ventas.fecha2" required>
    </div>
  </div> 
</div>
<!------------------------------------------ TABLA DE PRODUCTOS VENDIDOS ------------------------------------------>
<div class="table-responsive-xl">
  <table ref="table" class="table table-hover table-sm  text-center table table-striped">
    <thead class="thead-dark">
      <th class="icon-ventas">Productos Vendidos</th>
      <th class="icon-ventas">Cantidad Vendidas</th>
      <th class="icon-ventas">Fecha Venta</th>
      <th class="icon-ventas">Total (Venta)</th>
    </thead>
    <tbody >
      <tr v-for="(item, index) in ventas" :key="index">
       <td>{{item.descripcion}}</td>
       <td>{{item.cantidad}} Unidades</td>
       <td>{{item.created_at.substr(0,11)}}</td>
       <td>S/. {{parseFloat(item.total).toFixed(2)}}</td>
      </tr>
    </tbody>
</table>
</div>
</form>
</div>
</template>
<script>
import swal from 'sweetalert';
export default {
    data(){

      return{
      uri:'data:application/vnd.ms-excel;base64,',
      template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
      base64:function(s) { return window.btoa(unescape(encodeURIComponent(s))) },
      format:function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
        utiles: [],
        producto: {descripcion: '',precio: '',stock: ''},
        busqueda: [],
        fecha: [],
        ventas: [],
        sumtotal: '0.00'
      }
    },
    created(){

      axios.get('/sumtotal')
      .then(res => {
        this.sumtotal = res.data;
      })

      axios.get('ventas')
      .then(res => {
      this.ventas = res.data;
      })

    },
    methods:{
      // Generar Excel
           tableToExcel(table,name){
        if (!table.nodeType) table = this.$refs.table
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = this.uri + this.base64(this.format(this.template, ctx))
     },

      agregar(item){

          this.ventas.cantidad = '';
        $("#modalVenta").modal("show");

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
          // alert('Stock Insuficiente!!!  stock actual: '+t+' unidades');
          // this.ventas.cantidad = '';
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

          $("#modalVenta").modal("hide");
        }

        
      },
      buscar(){
        const fecha = this.ventas.fecha;
        const fecha2 = this.ventas.fecha2;
         axios.get(`/buscfecha/${fecha}%/${fecha2}%`)
         .then(res =>{
           this.ventas = res.data;
         })
      }

    },
    computed:{

      filtrobuscar: function() {
        
        if(this.busqueda != ''){

            axios.get('/filtro')
            .then(res => {
            this.utiles = res.data;
            })

          return this.utiles.filter((item) => 
          {
            return item.descripcion.toLowerCase().match(this.busqueda.toLowerCase());
            return item.precio.toLowerCase().match(this.busqueda.toLowerCase());
          }) 

        }    

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