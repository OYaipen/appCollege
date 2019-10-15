(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      jaladores: [],
      informantes: [],
      plans: [],
      tareas: [],
      tarea: {
        apellidoA: '',
        nombreA: '',
        celularA: '',
        nacA: '',
        edadA: '',
        nombreP: '',
        edadP: '',
        celularP: '',
        comoS: '',
        informante: '',
        jalador: '',
        fechaI: '',
        fechaF: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    console.log('estamos listos');
    axios.get('/informantes').then(function (res) {
      _this.informantes = res.data;
    }), axios.get('/jaladores').then(function (res) {
      _this.jaladores = res.data;
    }), axios.get('/plan').then(function (res) {
      _this.plans = res.data;
    });
  },
  methods: {
    registrar: function registrar() {
      var _this2 = this;

      if (this.tarea.apellidoA.trim() === '' || this.tarea.nombreA.trim() === '' || this.tarea.celularA.trim() === '' || this.tarea.nacA.trim() === '' || this.tarea.edadA.trim() === '' || this.tarea.nombreP.trim() === '' || this.tarea.edadP.trim() === '' || this.tarea.celularP.trim() === '' || this.tarea.comoS.trim() === '' || this.tarea.informante.trim() === '' || this.tarea.jalador.trim() === '' || this.tarea.fechaI.trim() === '' || this.tarea.fechaF.trim() === '') {
        alert('Debes completar todos los campos antes de guardar');
        return;
      }

      var params = {
        apellidoA: this.tarea.apellidoA,
        nombreA: this.tarea.nombreA,
        celularA: this.tarea.celularA,
        nacA: this.tarea.nacA,
        edadA: this.tarea.edadA,
        nombreP: this.tarea.nombreP,
        edadP: this.tarea.edadP,
        celularP: this.tarea.celularP,
        comoS: this.tarea.comoS,
        informante: this.tarea.informante,
        jalador: this.tarea.jalador,
        fechaI: this.tarea.fechaI,
        fechaF: this.tarea.fechaF
      };
      this.tarea.apellidoA = '';
      this.tarea.nombreA = '';
      this.tarea.celularA = '';
      this.tarea.nacA = '';
      this.tarea.edadA = '';
      this.tarea.nombreP = '';
      this.tarea.edadP = '';
      this.tarea.celularP = '';
      this.tarea.comoS = '';
      this.tarea.informante = '';
      this.tarea.jalador = '';
      this.tarea.fechaI = '';
      this.tarea.fechaF = '';
      axios.post('/registrar', params).then(function (res) {
        _this2.tareas.push(res.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h3", [_vm._v("Datos del Alumno:")]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.registrar($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.apellidoA,
                    expression: "tarea.apellidoA"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Aepllido" },
                domProps: { value: _vm.tarea.apellidoA },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "apellidoA", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.nombreA,
                    expression: "tarea.nombreA"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Nombre" },
                domProps: { value: _vm.tarea.nombreA },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "nombreA", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.celularA,
                    expression: "tarea.celularA"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Celular" },
                domProps: { value: _vm.tarea.celularA },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "celularA", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.nacA,
                    expression: "tarea.nacA"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date", placeholder: "Fecha de Nacimiento" },
                domProps: { value: _vm.tarea.nacA },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "nacA", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.edadA,
                    expression: "tarea.edadA"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Edad" },
                domProps: { value: _vm.tarea.edadA },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "edadA", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h3", [_vm._v("Datos del Padre")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.nombreP,
                    expression: "tarea.nombreP"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Nombre" },
                domProps: { value: _vm.tarea.nombreP },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "nombreP", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.edadP,
                    expression: "tarea.edadP"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Edad" },
                domProps: { value: _vm.tarea.edadP },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "edadP", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(7),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.celularP,
                    expression: "tarea.celularP"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Celular" },
                domProps: { value: _vm.tarea.celularP },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "celularP", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("h4", [_vm._v("Como se Entero de la Academia :")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.comoS,
                    expression: "tarea.comoS"
                  }
                ],
                staticClass: "custom-select",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.tarea,
                      "comoS",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { selected: "" } }, [
                  _vm._v("Seleccione")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [
                  _vm._v("Por Recomendacion de Un Amigo")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [
                  _vm._v("Murales de Publicidad")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "3" } }, [_vm._v("Volante")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "4" } }, [
                  _vm._v("Por Internet")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "5" } }, [
                  _vm._v("Por Poriformeo")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "6" } }, [_vm._v("Vine Solo")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h3", [_vm._v("Informante - Jalador")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.informante,
                    expression: "tarea.informante"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "SelectedId" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.tarea,
                      "informante",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "undefined", disabled: "" } }, [
                  _vm._v("Informante")
                ]),
                _vm._v(" "),
                _vm._l(_vm.informantes, function(item, index) {
                  return _c("option", { key: index }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(item.apellido) +
                        "\n            "
                    )
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.jalador,
                    expression: "tarea.jalador"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "SelectedId" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.tarea,
                      "jalador",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c(
                  "option",
                  { attrs: { value: "undefined", disabled: "", selected: "" } },
                  [_vm._v("Jaladores")]
                ),
                _vm._v(" "),
                _vm._l(_vm.jaladores, function(item, index) {
                  return _c("option", { key: index }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(item.apellidoJ) +
                        "\n            "
                    )
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "card" }, [
              _c("h4", { staticClass: "card-header" }, [
                _vm._v("Plan de Estudios")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.plans, function(item, index) {
                  return _c("ul", { key: index }, [
                    _c("p", [
                      _vm._v(
                        "Plan: " +
                          _vm._s(item.nombreP) +
                          " ,Precio de Matricula : " +
                          _vm._s(item.precioM) +
                          " S/. ,\n                            Duracion: " +
                          _vm._s(item.mesesP) +
                          " meses , Precio del Plan: " +
                          _vm._s(item.precioP) +
                          " S/."
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("h3", [_vm._v("Inicio y Culminacion")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(8),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.fechaI,
                    expression: "tarea.fechaI"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date", placeholder: "Fecha Inicio" },
                domProps: { value: _vm.tarea.fechaI },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "fechaI", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm" }, [
            _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
              _vm._m(9),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tarea.fechaF,
                    expression: "tarea.fechaF"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date", placeholder: "Fecha Culminacion" },
                domProps: { value: _vm.tarea.fechaF },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.tarea, "fechaF", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm._m(10)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("@")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-dark btn-lg btn-block",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistroComponent.vue?vue&type=template&id=3c7b4e2f& */ "./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&");
/* harmony import */ var _RegistroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegistroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegistroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroComponent.vue?vue&type=template&id=3c7b4e2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);