<template>
 <div class="container-fluid">
    <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>REGISTRAR</h1>
                    <div class="btn-toolbar">
                    <a href="/mostrar" class="btn btn-info mb-2">
                    <i class="fas fa-hand-point-left"></i> REGRESAR</a> 
                      </div>
                </div>
            </div>
        </div>
        <h3>Datos del Alumno:</h3>
        <form  @submit.prevent="registrarMatricula">
          <div class="row">
    <div class="col-sm-8">
     <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Apellido Y Nombre</div>
                    </div>
                    <input type="text" class="form-control"  
                    placeholder="Ingrese...." v-model="rol.fullname" required>
                </div>
      </div>
    <div class="col-sm-4">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Edad</div>
                    </div>
                    <input type="text" maxlength="2" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.edad" required>
                </div>
      
      </div>
  </div>
            <div class="row">
                <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-phone-alt"></i></div>
                    </div>
                    <input type="text" class="form-control" maxlength="9"  placeholder="Ingrese.. solo (9 Digitos)" v-model="rol.celular" required>
                </div>
                </div>
                 <div class="col-sm">
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-calendar-week"></i></div>
                    </div>
                    <input type="date" class="form-control"  placeholder="Fecha de Nacimiento" min="1995-01-01" v-model="rol.nacimiento" required>
                </div>
                </div> 
             </div>
              <div class="row"> 
            <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">DNI</div>
                    </div>
                    <input type="text" maxlength="8" class="form-control"  placeholder="Ingrese..solo (7 Digitos)" v-model="rol.dni"  required>
                </div>
                </div>
                <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">E-mail</div>
                    </div>
                    <input type="email"  class="form-control"  placeholder="Example : admin@taisale.com" v-model="rol.email" required>
                </div>
                </div>
             </div>
            <div class="row">
            <div class="col-sm-8">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Direccion</div>
                    </div>
                    <input type="text" class="form-control"  placeholder="Ingrese... Example: Av. 16 de Setiembre..." 
                    v-model="rol.direccion" required>
                </div>
                </div>
                    <div class="col-sm-4">
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Sexo</label>
                    </div>
               <select class="custom-select" v-model="rol.sexo" required>
                    <option value="" disabled selected>Seleccione</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
            </select>
                 </div>
      </div>
            </div>
   <h3>Datos del Padre:</h3>
            <div class="row">
    <div class="col-sm-8">
     <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Apellido Y Nombre</div>
                    </div>
                    <input type="text" class="form-control"  
                    placeholder="Ingrese...." v-model="rol.nombrepadre" required>
                </div>
      </div>
      <div class="col-sm-4">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Edad</div>
                    </div>
                    <input type="text" maxlength="2" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.edadpadre" required>
                </div>
      </div>
  </div>
  <div class="row">
                <div class="col-sm">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-phone-alt"></i></div>
                    </div>
                    <input type="text" maxlength="9" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.celularpadre" required>
                </div>
      </div>
      <div class="col-sm">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">DNI</div>
                    </div>
                    <input type="text" maxlength="8" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.dnipadre" required>
                </div>
      </div>
  </div>
              <div class="row">
                <div class="col-sm">
           <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Telf. Familiar</div>
                    </div>
                    <input type="text" maxlength="7" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.telf" required>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h4>Como se Entero de la Academia :</h4>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-clipboard"></i></label>
                    </div>
               <select class="custom-select" v-model="rol.como" required>
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option>Por Recomendacion de Un Amigo</option>
                    <option>Murales de Publicidad</option>
                    <option>Volante</option>
                    <option>Por Internet</option>
                    <option>Por Poriformeo</option>
                    <option>Vine Solo</option>
            </select>
                 </div>
                </div>
            </div>
            <h3>Informante - Jalador</h3>
            <div class="row">
                <div class="col-sm">
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-clipboard"></i></label>
                    </div>
               <select class="custom-select" id="SelectedId" v-model="rol.informante" required>
                <option value="" disabled selected>Informante</option>
                <option v-for="(item, index) in informantes" :key="index" v-bind:value="item.id">
                {{item.apellido}}
                </option>    
            </select>
            </div>
                </div>
                    <div class="col-sm">
                        <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-clipboard"></i></label>
                    </div>
               <select class="custom-select" id="SelectedId" v-model="rol.jalador" required>
                <option value="" disabled selected>Jalador</option>
                <option v-for="(item, index) in jaladores" :key="index" v-bind:value="item.id">
                {{item.apellidoJ}}
                </option>    
            </select>
            </div>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="alert alert-success btn-lg btn-block"><b>Registrar</b></button>
            </div> 
        </form>
    </div>
</template>
<script>
import swal from 'sweetalert';
export default {
    data () {
        return {

            rols:[],
            rol:{fullname:'',edad:'',celular:'', nacimiento:'',dni:'',
            email:'',direccion:'',sexo:'',nombrepadre:'',edadpadre:'',celularpadre:'',dnipadre:'',telf:'',como:'',informante:'',jalador:''},
            ventas:[],
            jaladores:[],
            plans:[],
            informantes:[]

        }
    },
    mounted() {
        console.log('estamos listos');
        axios.get('/bd-informante')
        .then(res =>{
         this.informantes = res.data;
        }),
        axios.get('/bd-jalador')
        .then(res =>{
        this.jaladores = res.data;
        }),
          axios.get('/bd-Ventas')
        .then(res =>{
        this.ventas = res.data;
        })
    },
    
    methods:{
            registrarMatricula(){
           const params = {
                fullname : this.rol.fullname,
                edad : this.rol.edad,
                celular : this.rol.celular,
                nacimiento: this.rol.nacimiento,
                dni : this.rol.dni,
                email : this.rol.email,
                direccion : this.rol.direccion,
                sexo : this.rol.sexo,
                nombrepadre:this.rol.nombrepadre,
                edadpadre:this.rol.edadpadre,
                celularpadre:this.rol.celularpadre,
                dnipadre:this.rol.dnipadre,
                telf:this.rol.telf,
                como : this.rol.como,
                informante : this.rol.informante,
                jalador : this.rol.jalador
            }

                this.rol = {fullname:'',edad:'',celular:'',
                            nacimiento:'',dni:'',email:'',direccion:'',sexo:'',
                            nombrepadre:'',edadpadre:'',celularpadre:'',dnipadre:'',
                            como:'',informante:'',jalador:''}

                const Validar = this.rol.dnipadre;
                if(Validar == 0){
                axios.post('/bd-informes',params)
                .then(res => {
                this.rols.push(res.data)
                swal("Buen Trabajo!", "Informe Registrado Correctamente!", "success")
                .then((value) => {
                swal("Atencion!", "Antes de Matricular Fijar un Plan de Estudio", "info");
                });
                })
            }
             else{
                axios.get(`/ValidardniPadre/${dnipadre}`)
                .then(res =>{
                swal("El Dni Existe", "El DNI del Padre ya esta Registrado", "info");
                this.rols = res.data;
         })
            }
            
        }
    }
    
}
</script>