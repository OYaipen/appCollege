<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>REGISTRAR </h1>
                    <div class="btn-toolbar">
                    <a href="/jaladores" class="btn btn-primary mb-2">
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
            <input type="text" class="form-control"  placeholder="Ingrese..." v-model="jalador.apellidoJ" required>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" ><i class="fas fa-phone-alt"></i></span>
            </div>
            <input type="text" class="form-control" maxlength="9"  placeholder="Ingrese.. (Solo 9 Digitos)" v-model="jalador.celularJ" required>
        </div>
        <button type="submit" class="alert alert-success btn-lg btn-block"><b>Registrar</b></button>
     </form>
    </div>
</template>

<script>
import swal from 'sweetalert'
    export default {
        data(){
            return{
               jaladores:[],
               jalador:{apellidoJ: '', celularJ:''} 
            }

        },

        methods:{
            registrar(){
                if( this.jalador.apellidoJ.trim() === '' || 
                     this.jalador.celularJ.trim() === ''
            ){
        alert('Debes completar todos los campos antes de guardar');
        return;
           }
           const params = {
               apellidoJ : this.jalador.apellidoJ,
               celularJ: this.jalador.celularJ,
               estadoJ: 'activo'
                }
             this.jalador.apellidoJ = '';
             this.jalador.celularJ  = '';

             axios.post('/bd-jalador',params)
             .then(res => {
                 this.jaladores.push(res.data)
                 swal("Buen Trabajo!", "Jalador Registrado Correctamente!", "success");
             })
            }
        },
       
    }
</script>