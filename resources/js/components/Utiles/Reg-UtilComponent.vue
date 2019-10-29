<template>
    <div class="container-fluid">
                    <div class="row">
            <DIV class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>REGISTRAR</h1>
                    <div class="btn-toolbar">
                    <a href="/utiles" class="btn btn-info mb-2">
                    <i class="fas fa-hand-point-left"></i> REGRESAR</a> 
                      </div>
                </div>
            </div>
        </div>
        <form @submit.prevent="registrar">
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text" >Nombre</span>
            </div>
            <input type="text" class="form-control" placeholder="Ingrese.." v-model="producto.descripcion" required>
        </div>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text" >Precio.. S/.</span>
            </div>
            <input type="number" class="form-control" step="any" placeholder="Ingrese.." v-model="producto.precio" required>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Stock</span>
            </div>
            <input type="number" class="form-control" placeholder="Ingrese.." v-model="producto.stock" required>
        </div>
        <button type="submit" class="alert alert-success btn-lg btn-block mb-2"><b>Registrar</b></button>
     </form>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    data() {
        return {
        utiles:[], 
        producto:{descripcion: '', precio:'',stock: ''},   
        }
    },
     methods:{
        registrar(){
           const params = {
               descripcion: this.producto.descripcion,
               precio:  this.producto.precio,
               stock: this.producto.stock
            }

             this.producto.descripcion = '';
             this.producto.precio  = '';
             this.producto.stock = '';

             axios.post('/bd-utiles',params)
            .then(res => {
             swal("Producto Agregado", "Correctamente!", "success");
            })
        }
    },

       
}
</script>
