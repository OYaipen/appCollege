<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>REGISTRAR</h1>
                    <div class="btn-toolbar">
                    <a href="/informantes" class="btn btn-info mb-2">
                    <i class="fas fa-hand-point-left"></i> REGRESAR</a> 
                      </div>
                </div>
            </div>
        </div>
        <form  @submit.prevent="registrar">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Apellido y Nombre</span>
            </div>
            <input type="text" class="form-control" placeholder="Ingrese..." v-model="informante.apellido" required>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" ><i class="fas fa-phone-alt"></i></span>
            </div>
            <input type="text" class="form-control" maxlength="9" placeholder="ingrese.. (Solo 9 digitos)" v-model="informante.celular" required >
        </div>
        <button type="submit" class="alert alert-success btn-lg btn-block"><b>Registrar</b></button>
     </form>
    </div>
</template>

<script>
import swal from 'sweetalert';
    export default {
        data(){
            return{
               informantes:[],
               informante:{apellido: '', celular:''} 
            }

        },

        methods:{
            registrar(){
                if( this.informante.apellido.trim() === '' || 
                     this.informante.celular.trim() === ''){
        alert('Debes completar todos los campos antes de guardar');
        return;
           }

        //    if(this.informante.celular >= 10){
        //        alert('Ingrese numero de 9 Digitos');
        //        return;
        //    }
           const params = {
               apellido : this.informante.apellido,
               celular: this.informante.celular,
               estado: 'activo'
                }
                
             this.informante  = {apellido :'',celular : ''}

             axios.post('/bd-informante',params)
             .then(res => {
                 this.informantes.push(res.data)
                  swal("Buen Trabajo!", "Informante Registrado Correctamente!", "success");
             })
            }
        },
       
    }
</script>