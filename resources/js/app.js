require('./bootstrap');

window.Vue = require('vue');

// Registro Principal
Vue.component('registro', require('./components/Matricula/Reg-InformaComponent.vue').default);
Vue.component('mostrar', require('./components/Matricula/InformeComponent.vue').default);
// Registro informante
Vue.component('informante', require('./components/Informant/InformantesComponent.vue').default);
Vue.component('reg-informante', require('./components/Informant/Reg-infoComponent.vue').default);
// Registro jalador
Vue.component('jaladores', require('./components/Grabber/JaladorComponent.vue').default);
Vue.component('reg-jalador', require('./components/Grabber/Reg-JaladorComponent.vue').default);
// Registro plan
Vue.component('plan', require('./components/Plan/PlanComponent.vue').default);
Vue.component('reg-plan', require('./components/Plan/Reg-PlanComponent.vue').default);
// Registro util
Vue.component('utiles', require('./components/Utiles/UtilesComponent.vue').default);
Vue.component('reg-util', require('./components/Utiles/Reg-UtilComponent.vue').default);
//Pagos
Vue.component('pagos', require('./components/Pagos/PagosComponent.vue').default);
//Vender
Vue.component('alumnos', require('./components/Alumnos/alumnos.vue').default);
//Ventas
Vue.component('ventas', require('./components/PuntoVenta/venta.vue').default);
//Pagos Realizados
Vue.component('paytoday', require('./components/PagosRealizados/pagosRealizados.vue').default);
// Vue.component('datos-alumnos', require('./components/DatosAlumnosComponent.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});

