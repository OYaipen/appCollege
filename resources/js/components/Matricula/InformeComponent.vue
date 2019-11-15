<template>
  <div>
<form @submit.prevent="buscar">
          <div class="row">
            <DIV class="col-12">
                <div class="d-flex justify-content-between border-bottom mb-3 pb-2 align-items-center flex-wrap flex-md-nowra">
                    <h1>INFORMES</h1>
                    <div class="btn-toolbar">
                      <button @click="tableToExcel('table')" class="btn btn-success mr-2" type="button" >
                        <i class="fas fa-file-excel"></i> EXCEL 
                      </button>
                     <button type="submit" class="btn btn-danger mr-2"> <i class="fas fa-search"></i> SEARCH </button>
                     <a href="/home" class="btn btn-primary">
                      <i class="fas fa-save"></i> CREAR</a> 
                      </div>
                </div>
            </div>
        </div>
<div class="row">
  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Inicio</div>
      </div>           
       <input type="date" class="form-control" v-model="rols.fecha" required>
    </div>
  </div>
  <div class="col-sm">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Fin</div>
      </div>
        <input type="date" class="form-control" v-model="rols.fecha2" required>
    </div>
  </div> 
</div>
    <div class="table-responsive-xl">
          <table ref="table"  class="table table-hover table-sm  text-center ">
      <thead class="thead-dark">
        <tr>
          <th scope="col" class="icon-informe">ID</th>
          <th scope="col" class="icon-informe">INTERESADO</th>
          <th scope="col" class="icon-informe">DNI</th>
          <th scope="col" class="icon-informe">CELULAR</th>
          <th scope="col" class="icon-informe">SEXO</th>
          <th scope="col" class="icon-informe">F.INFORME</th>
          <th scope="col" class="icon-informe">EDIT</th>
          <th scope="col" class="icon-informe">MATRICULAR</th>
        </tr>
      </thead>
    <tbody>              
      <tr v-for="(item, index) in rols" :key="index">
        <td>I-{{item.id}}</td>
        <td>{{item.fullname}}</td>
        <td>{{item.dni}}</td>
        <td>{{item.celular}}</td>
        <td>{{item.sexo}}</td>
        <td>{{item.created_at.substr(0,11)}}</td>
        <td><a class="icon-lapiz" href="#" data-toggle="modal" data-target="#Actualizar_informe" data-backdrop="static" 
        @click="EditarInforme(item)"><i class="fas fa-pen-alt"></i></a></td>
        <td><a class="icon-sistema" href="#" data-toggle="modal" data-target="#Matricular_informe" data-backdrop="static"
         @click="MatricularAlumno(item)"><i class="fas fa-desktop"></i></a></td>
      </tr>
    </tbody>
    </table>
    </div>
</form>
    <!-- modal actualizar Informe -->
<form @submit.prevent="ActualizarInforme(rol)" v-if="EditarInformeActivo"> 
    <!-- Modal -->
    <div class="modal fade" id="Actualizar_informe" tabindex="-1" role="dialog" aria-labelledby="ActualizarLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="ActualizarLabel">Actualizar Informe <i class="far fa-edit"></i></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>Datos del Alumno :</h3>
          <div class="row">
    <div class="col-sm-8">
      <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">Apellido Y Nombre</div>
          </div>
          <input type="text" class="form-control"  
          v-model="rol.fullname" required>
        </div>
    </div>
    <div class="col-sm-4">
      <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">Edad</div>
          </div>
          <input type="text" maxlength="2" class="form-control"  
          v-model="rol.edad" required>
      </div>
    </div>
  </div>
            <div class="row">
                <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-phone-alt"></i></div>
                    </div>
                    <input type="text" class="form-control" maxlength="9"  
                     v-model="rol.celular" required>
                </div>
                </div>
                 <div class="col-sm">
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">F.Nacimiento</div>
                    </div>
                    <input type="date" class="form-control"  
                     v-model="rol.nacimiento" min="1995-01-01" required>
                </div>
                </div> 
             </div>
              <div class="row"> 
            <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">DNI</div>
                    </div>
                    <input type="text" maxlength="8" class="form-control"  
                    v-model="rol.dni" required>
                </div>
                </div>
                <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">E-mail</div>
                    </div>
                    <input type="email"  class="form-control" v-model="rol.email" required>
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
  <hr>
        <h3>Datos del Padre :</h3>
            <div class="row">
    <div class="col-sm">
     <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Apellido Y Nombre</div>
                    </div>
                    <input type="text" class="form-control"  
                    placeholder="Ingrese...." v-model="rol.nombrepadre" required>
                </div>
      </div>
  </div>
  <div class="row">
          <div class="col-sm">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Edad</div>
                    </div>
                    <input type="text" maxlength="2" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.edadpadre" required>
                </div>
      </div>
                <div class="col-sm">
           <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-phone-alt"></i></div>
                    </div>
                    <input type="text" maxlength="9" class="form-control"  
                   placeholder="Ingrese...." v-model="rol.celularpadre" required>
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
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-success">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
</form>
  <!-- modal matricular -->
<form enctype="multipart/form-data" @submit.prevent="create" v-if="MatriculaActiva"> 
    <!-- Modal -->
    <div class="modal fade" id="Matricular_informe" tabindex="-1" role="dialog" aria-labelledby="MatricularLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="MatricularLabel">Matricular Alumno <i class="far fa-handshake"></i></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Datos del Alumno</h5>
          <div class="row">
    <div class="col-sm-8">
      <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">Apellido Y Nombre</div>
          </div>
          <input type="text" class="form-control"  
          v-model="matricular.fullname" required>
        </div>
    </div>
    <div class="col-sm-4">
      <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
              <div class="input-group-text">Edad</div>
          </div>
          <input type="text" maxlength="2" class="form-control"  
          v-model="matricular.edad" required>
      </div>
    </div>
  </div>
              <div class="row"> 
            <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">DNI</div>
                    </div>
                    <input type="text" maxlength="8" class="form-control"  
                    v-model="matricular.dni" required>
                </div>
                </div>
                <div class="col-sm">
               <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">E-mail</div>
                    </div>
                    <input type="email"  class="form-control" 
                    v-model="matricular.email" required>
                </div>
                </div>
             </div>
              <h5>En Caso de emergencia llamar</h5>
                <div class="row">
                <div class="col-sm">
           <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Telefono</div>
                    </div>
                    <input type="text" class="form-control"  
                   placeholder="Ingrese..." v-model="matricular.telf"  required>
                </div>
                </div>
            </div>
            <h5>¿En que Intitucion te has preparado Anteriormente?</h5>
                <div class="row">
                <div class="col-sm">
           <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Institucion</div>
                    </div>
                    <input type="text" class="form-control"  
                   placeholder="Ingrese Institucion...." v-model="matricular.institucion"  required>
                </div>
                </div>
            </div>
            <h5>¿Que dominas mas Ciencias o Letras?</h5>
            <div class="row">
                <div class="col-sm">
              <div class="row">
                <div class="col-sm">
           <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Preferncia</div>
                    </div>
                    <input type="text" class="form-control"  
                   placeholder="Ingrese.:Ciencias ... o Letras.." v-model="matricular.materia"  required>
                </div>
                </div>
            </div>
                </div>
            </div>
            <h5>A que Escuela Esta Postulando</h5>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" >Escuela</span>
            </div>
           <select class="custom-select"  v-model="matricular.escuela" required>
                        <option value="" selected disabled>Seleccione...</option>
                        <option>ETSPNP</option>
                        <option>EOPNP</option>
                        <option>CITEN</option>
                        <option>ESNA</option>
                        <option>ETE</option>
                        <option>EMCH</option>
                        <option>ESOFAP</option>
                        <option>EOFAP</option>
                        <option>EIE</option>
                        <option>INPE</option>
                        <option>ASIMILADO</option>
                        <option>ESCOLAR</option>
                </select>
        </div>
              <h5>Plan de Estudio (*)</h5>
            <div class="row">
                    <div class="col-sm">
                        <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Plan de Estudio</label>
                    </div>
                <select class="custom-select" id="SelectedId" v-model="matricular.plan" required>
                <option value="planes" disabled selected>-- Seleccione Plan --</option>
                <option v-for="(item, index) in plans" :key="index" v-bind:value="item.id" v-if="item.estado == 'activo'">
                Plan: {{item.nombre}} Meses | Pension: S/. {{parseFloat(item.pension).toFixed(2)}} |
                | Matricula: S/. {{parseFloat(item.matricula).toFixed(2)}} |
                1er Pago: S/. {{parseFloat(item.primerpago).toFixed(2)}} |
                | 2do Pago: S/. {{parseFloat(item.segundopago).toFixed(2)}} | 
                </option>    
            </select>
            </div>
                </div>
                </div>
            <div class="row">
                <div class="col-sm">
                    <div class="input-group mb-3 mr-sm-2">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Promocion</label>
                </div>
               <select class="custom-select" v-model="matricular.promocion" required>
                <option :value="promociones" disabled selected>Promociones</option>
                <option>✰ Buzo Completo: Polo + Short + Medias Deportivas + Prospecto + Constitucion Politica</option>   
            </select>
            </div>
                </div>
            </div>
            <h5>Inicio y Culminacion (*)</h5>
            <div class="row">
                 <div class="col-sm">
               <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-calendar-week"></i></div>
                    </div>
                    <input type="date" class="form-control"  placeholder="Fecha Inicio" v-model="matricular.fechainicio" @input="calcular" required>
                </div>
                </div>
                 <div class="col-sm">
               <div class="input-group mb-3 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-calendar-week"></i></div>
                    </div>
                    <input type="date" class="form-control"  placeholder="Fecha Culminacion" v-model="matricular.fechafinal" required>
                </div>
                <input type="file" @change="obtenerImagen" name="foto" id="foto">
                <img :src="foto" width="200px" height="200px">
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-success">Matricular</button>
          </div>
        </div>
      </div>
    </div>
</form>

  </div>       
</template>

<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
      files: [],
      imagenMiniatura: '',
      uri:'data:application/vnd.ms-excel;base64,',
      template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
      base64:function(s) { return window.btoa(unescape(encodeURIComponent(s))) },
      format:function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
      rols:[],
      rol:{ fullname:'',edad:'',nombrepadre:'',edadpadre:'',celular:'',nacimiento:'',
            dni:'',email:'',direccion:'',sexo:'',telf:''},
      matricular:[],
      planes:'',
      promociones:null,
      plans:[],
      EditarInformeActivo: false,
      MatriculaActiva: false,
      fecha:[],
      imagen: ''
    }
  },
  mounted() {
        axios.get('/bd-plan')
        .then(res =>{
        this.plans = res.data;
        }),

          axios.get('/bd-Ventas')
        .then(res =>{
        this.ventas = res.data;
        }),
   
       axios.get('/bd-informes')
       .then(res =>{
        this.rols = res.data;

    })
  },
  computed: {
    foto(){
      return this.imagenMiniatura;
    }
  },
   methods:{
     create(e){

       let foto = e.dataTransfer.files;
       this.imagen = foto;

       axios.post('/bd-matricula',foto)
       .then(response => {
      swal(" GAAA! ", "Imagen Enviada", "success")
    })
    .catch(error => {
      swal('ERROR!','No se pudo Enviar '+error,'error');
    })

     },
     obtenerImagen(e){
       let file = e.target.files[0];
       this.imagen = file;
        console.log(file)
       this.cargarImagen(file);
       
     },
     cargarImagen(file){
       let reader = new FileReader();
        reader.onload = (e) => {
          this.imagenMiniatura = e.target.result;
        }
       reader.readAsDataURL(file);
     },
calcular(){
       
  const index = this.plans.findIndex(bus => bus.id === this.matricular.plan)
  const x = new Date(this.matricular.fechainicio);
  const m = x.getMonth()+1;
  const d = x.getDate()+1;
  const a = x.getFullYear();
  const meses = parseInt(this.plans[index].nombre);
  const y = m+meses;


  if(d == 32){
   const p = '0'+1
   const m2 = y+1
    
    if(y > 12){
     const año = a + 1;
     const ms = m2 - 12;
     
     if(ms < 10){
      const mes = '0'+ms
      this.matricular.fechafinal = año+'-'+mes+'-'+p
     }else{
      const mes = ms
      this.matricular.fechafinal = año+'-'+mes+'-'+p
     }

    }else{
     const año = a;
     const ms = m2;
      
      if(ms < 10){
       const mes = '0'+ms
       this.matricular.fechafinal = año+'-'+mes+'-'+p
      }else{
       const mes = ms
       this.matricular.fechafinal = año+'-'+mes+'-'+p
      }

     }

    }else{
     const p = d;
      
      if(y > 12){
       const año = a + 1;
       const ms = y - 12;
        
        if(ms < 10){
         const mes = '0'+ms
         const h = new Date(año+'-'+mes+'-28')
         const l = new Date(h.getFullYear(), h.getMonth() + 1, 0)
         
         if(p > l.getDate()){
          this.matricular.fechafinal = año+'-'+mes+'-'+l.getDate()
         }else{
          
          if(p < 10){
           const dia = '0'+p
           this.matricular.fechafinal = año+'-'+mes+'-'+dia
          }else{
           const dia = p
           this.matricular.fechafinal = año+'-'+mes+'-'+dia
          }                 
         }
        }else{
         const mes = ms
         const h = new Date(año+'-'+mes+'-28')
         const l = new Date(h.getFullYear(), h.getMonth() + 1, 0)
          
          if(p > l.getDate()){
           this.matricular.fechafinal = año+'-'+mes+'-'+l.getDate()
          }else{
           
           if(p < 10){
            const dia = '0'+p
            this.matricular.fechafinal = año+'-'+mes+'-'+dia
           }else{
            const dia = p
            this.matricular.fechafinal = año+'-'+mes+'-'+dia
           } 
          }
        }
       }else{
        const año = a;
        const ms = y;
          
         if(ms < 10){
          const mes = '0'+ms
          const h = new Date(año+'-'+mes+'-28')
          const l = new Date(h.getFullYear(), h.getMonth() + 1, 0)
           
           if(p > l.getDate()){
            this.matricular.fechafinal = año+'-'+mes+'-'+l.getDate()
           }else{
             
            if(p < 10){
             const dia = '0'+p
             this.matricular.fechafinal = año+'-'+mes+'-'+dia
            }else{
             const dia = p
             this.matricular.fechafinal = año+'-'+mes+'-'+dia
            } 
           }
         }else{
          const mes = ms
          const h = new Date(año+'-'+mes+'-28')
          const l = new Date(h.getFullYear(), h.getMonth() + 1, 0)
              
           if(p > l.getDate()){
            this.matricular.fechafinal = año+'-'+mes+'-'+l.getDate()
           }else{
               
            if(p < 10){
             const dia = '0'+p
             this.matricular.fechafinal = año+'-'+mes+'-'+dia
            }else{
             const dia = p
             this.matricular.fechafinal = año+'-'+mes+'-'+dia
            } 
           }
         }
       }
    }
},

    tableToExcel(table,name){
        if (!table.nodeType) table = this.$refs.table
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = this.uri + this.base64(this.format(this.template, ctx))
    },
    //---------------------------------------------  Actualizar Informe-----------------------------------------------------
      buscar(){
        const fecha = this.rols.fecha;
        const fecha2 = this.rols.fecha2;
         axios.get(`/searchFecha/${fecha}%/${fecha2}%`)
         .then(res =>{
           this.rols = res.data;
         })
      },
    EditarInforme(item){
      this.EditarInformeActivo = true;

      this.rol.fullname = item.fullname;
      this.rol.edad = item.edad;
      this.rol.celular = item.celular;
      this.rol.nacimiento = item.nacimiento;
      this.rol.dni = item.dni;
      this.rol.email = item.email;
      this.rol.direccion = item.direccion;    
      this.rol.sexo = item.sexo;   
      this.rol.nombrepadre = item.nombrepadre;
      this.rol.edadpadre = item.edadpadre;
      this.rol.celularpadre = item.celularpadre;
      this.rol.telf = item.telf;
      this.rol.id = item.id;
    },
    ActualizarInforme(rol){
      const params = {fullname: rol.fullname,
                      edad: rol.edad,
                      celular: rol.celular,
                      nacimiento: rol.nacimiento,
                      dni: rol.dni,
                      email: rol.email,
                      direccion: rol.direccion,
                      sexo:rol.sexo,
                      nombrepadre: rol.nombrepadre,
                      edadpadre: rol.edadpadre,
                      celularpadre: rol.celularpadre,
                      telf: rol.telf,
      } 
      axios.put(`/bd-informes/${rol.id}`,params)
      
    .then(res => {
        EditarInformeActivo: false
        const index= this.rols.findIndex(
          InformeActualizar => InformeActualizar.id === res.data.id )
          this.rols[index] = res.data;

          axios.get('/bd-informes')
          .then(res =>{
            this.rols = res.data;
             swal("Informe Actualizado", "Actualizacion Correcta!", "success");

            $("#Actualizar_informe").modal("hide");
            $("#Actualizar_informe").modal({backdrop: 'static', keyboard: false})
          })
      })
    },
  //----------------------------------------------------------------------------------------------------------------
//---------------------------------------------  Matricular Informe-----------------------------------------------------

 MatricularAlumno(item){
      this.MatriculaActiva = true;
        this.matricular = {plan:'',promocion:'',fechainicio:'',fechafinal:''}
        this.matricular.fullname = item.fullname;
        this.matricular.edad = item.edad;
        this.matricular.celular = item.celular;
        this.matricular.nacimiento = item.nacimiento;
        this.matricular.dni = item.dni;
        this.matricular.email = item.email;
        this.matricular.direccion = item.direccion;
        this.matricular.sexo = item.sexo;
        this.matricular.nombrepadre = item.nombrepadre;
        this.matricular.edadpadre = item.edadpadre;
        this.matricular.telf = item.telf;
        this.matricular.institucion = item.institucion;
        this.matricular.materia = item.materia;
        this.matricular.escuela = item.escuela;
        this.matricular.plan = item.plan;
        this.matricular.promocion = item.promocion;
        this.matricular.fechainicio = item.fechainicio;
        this.matricular.fechafinal = item.fechafinal;
        this.matricular.id = item.id;
    },
    MatriculaGeneral(){
        const id = this.matricular.id;
        const institucion = this.matricular.institucion;
        const materia = this.matricular.materia;
        const escuela = this.matricular.escuela;
        const plan = this.matricular.plan;
        const promo = this.matricular.promocion;
        const f_inicio = this.matricular.fechainicio;
        const f_final = this.matricular.fechafinal
        const foto = this.imagen

        const params = {
            id_rol : id,
            id_plan : plan,
            institucion : institucion,
            materia:materia,
            escuela:escuela,
            promocion : promo,
            fechainicio : f_inicio,
            fechafinal : f_final,
            foto: foto
        }
    axios.post('/bd-matricula',params)
    .then(response => {
      swal(this.matricular.fullname+" Matriculado!", "Matricula Registrada Correctamente!", "success")
      $("#Matricular_informe").modal("hide");
          $("#Matricular_informe").modal({backdrop: 'static', keyboard: false})
    })
    .catch(error => {
      swal('ERROR!','No se pudo registrar la matricula '+error,'error');
    });
                    
    }
    
  }
}
</script>
<style  scoped>
.icon-informe { 
   color: rgb(63, 59, 59);
} 
.icon-informe:hover {
	 color: #cf4d25;
}
.icon-sistema { 
   color: rgb(139, 44, 44);
} 
.icon-sistema:hover {
	 color: #030303;
}
.icon-lapiz { 
   color: rgb(14, 13, 13);
} 
.icon-lapiz:hover {
	 color: #340ca0;
}
</style>