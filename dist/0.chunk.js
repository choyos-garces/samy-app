webpackJsonp([0,5,7,8,9,10,16],{

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedores_routing_module__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proveedores_component__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_lista_proveedor_lista_component__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proveedor_nuevo_proveedor_nuevo_component__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_editar_proveedor_editar_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proveedor_ver_proveedor_ver_component__ = __webpack_require__(1034);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProveedoresModule = (function () {
    function ProveedoresModule() {
    }
    ProveedoresModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__proveedores_routing_module__["a" /* ProveedoresRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__proveedores_component__["a" /* ProveedoresComponent */], __WEBPACK_IMPORTED_MODULE_5__proveedor_lista_proveedor_lista_component__["a" /* ProveedorListaComponent */], __WEBPACK_IMPORTED_MODULE_6__proveedor_nuevo_proveedor_nuevo_component__["a" /* ProveedorNuevoComponent */], __WEBPACK_IMPORTED_MODULE_7__proveedor_editar_proveedor_editar_component__["a" /* ProveedorEditarComponent */], __WEBPACK_IMPORTED_MODULE_8__proveedor_ver_proveedor_ver_component__["a" /* ProveedorVerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProveedoresModule);
    return ProveedoresModule;
}());
/* harmony default export */ exports["default"] = ProveedoresModule;


/***/ },

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administracion_routing_module__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal_module__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proveedores_proveedores_module__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productores_productores_module__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__materiales_materiales_module__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bodegas_bodegas_module__ = __webpack_require__(996);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdministracionModule = (function () {
    function AdministracionModule() {
    }
    AdministracionModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__administracion_routing_module__["a" /* AdministracionRoutingnModule */], __WEBPACK_IMPORTED_MODULE_3__personal_personal_module__["default"], __WEBPACK_IMPORTED_MODULE_4__proveedores_proveedores_module__["default"], __WEBPACK_IMPORTED_MODULE_5__productores_productores_module__["default"], __WEBPACK_IMPORTED_MODULE_6__materiales_materiales_module__["default"], __WEBPACK_IMPORTED_MODULE_7__bodegas_bodegas_module__["default"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AdministracionModule);
    return AdministracionModule;
}());
/* harmony default export */ exports["default"] = AdministracionModule;


/***/ },

/***/ 1009:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.queryParameters = function (filters, name) {
        if (name === void 0) { name = 'filters'; }
        var filter = [];
        for (var key in filters) {
            filter.push(name + "[" + key + "]=" + filters[key]);
        }
        return filter.join("&");
    };
    Utils.searchCollectionBy = function (key, collection, term) {
        if (collection == null)
            return [];
        return collection.filter(function (item) {
            if (key in item) {
                return item[key] == term;
            }
            return false;
        }).slice();
    };
    Utils.searchCollectionNotEquals = function (key, collection, term) {
        if (collection == null)
            return [];
        return collection.filter(function (item) {
            if (key in item) {
                return item[key] != term;
            }
            return false;
        }).slice();
    };
    return Utils;
}());


/***/ },

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentSelect_component__ = __webpack_require__(1011);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DocumentSelectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentSelectModule = (function () {
    function DocumentSelectModule() {
    }
    DocumentSelectModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__documentSelect_component__["a" /* DocumentSelectComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__documentSelect_component__["a" /* DocumentSelectComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentSelectModule);
    return DocumentSelectModule;
}());


/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DocumentSelectComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentSelectComponent = (function (_super) {
    __extends(DocumentSelectComponent, _super);
    function DocumentSelectComponent(_reference, formBuilder) {
        _super.call(this, formBuilder);
        this._reference = _reference;
        this.options = [];
        this.active = false;
        this.documentMap = null;
        this.disabled = false;
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    DocumentSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('search', null);
        this.onControlChange('search', function (value) {
            _this.options = _this.updateOptions(value).slice();
        });
    };
    DocumentSelectComponent.prototype.ngOnChanges = function (changes) {
        if ('documents' in changes) {
            this.options = changes['documents'].currentValue;
        }
        if (this.options != null && this.current != null) {
            this.updateCurrent();
        }
        if (this.disabled == true) {
            this.active = false;
        }
    };
    DocumentSelectComponent.prototype.displayLabel = function (option) {
        if (option != null && 'display' in this.documentMap) {
            var display = [];
            var keys = this.documentMap.display;
            for (var i = 0; i < keys.length; i++) {
                display.push(option[keys[i]]);
            }
            return display.join(" ");
        }
        return null;
    };
    DocumentSelectComponent.prototype.displayAux = function (option) {
        if (option != null && 'small' in this.documentMap) {
            var display = [];
            var keys = this.documentMap.small;
            for (var i = 0; i < keys.length; i++) {
                display.push(option[keys[i]]);
            }
            return display.join(" ");
        }
        return null;
    };
    DocumentSelectComponent.prototype.updateSelected = function (option) {
        this.selected = option;
        this.active = false;
        this.output.emit(option.id);
        this.current = option.id;
    };
    DocumentSelectComponent.prototype.toggleActive = function () {
        if (!this.disabled)
            this.active = !this.active;
    };
    DocumentSelectComponent.prototype.isOptionSelected = function (option) {
        return option.id === this.current;
    };
    DocumentSelectComponent.prototype.updateOptions = function (input) {
        var _this = this;
        if (input != null && input != "") {
            return this.documents.filter(function (document) {
                var map = _this.documentMap;
                var flag = false;
                for (var i = 0; i < map.searchKeys.length; i++) {
                    if (document[map.searchKeys[i]].indexOf(input) > -1)
                        flag = true;
                }
                return flag;
            });
        }
        return this.documents;
    };
    DocumentSelectComponent.prototype.updateCurrent = function () {
        var current = this.current;
        var opciones = this.options;
        var results = opciones.filter(function (opcion) { return opcion.id === current; });
        if (results.length == 1) {
            this.updateSelected(results[0]);
        }
        else {
            this.output.emit(null);
        }
    };
    /**
     * Esconde el dropdown si el usuario hace click en otra parte que no
     * sea este component.
     * Revisar @Component:host(document:click)
     *
     * @param event Click event
     */
    DocumentSelectComponent.prototype.onClickOutside = function (event) {
        if (!this._reference.nativeElement.contains(event.target)) {
            this.active = false;
            this.output.emit(this.selected);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap__["IDocumentMap"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap__["IDocumentMap"]) === 'function' && _a) || Object)
    ], DocumentSelectComponent.prototype, "documentMap", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], DocumentSelectComponent.prototype, "current", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], DocumentSelectComponent.prototype, "documents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], DocumentSelectComponent.prototype, "disabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(), 
        __metadata('design:type', Object)
    ], DocumentSelectComponent.prototype, "output", void 0);
    DocumentSelectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            host: { '(document:click)': 'onClickOutside($event)' },
            selector: 'app-document-select',
            template: __webpack_require__(1014),
            styles: [__webpack_require__(1013)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _c) || Object])
    ], DocumentSelectComponent);
    return DocumentSelectComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__FormController__["a" /* FormController */]));


/***/ },

/***/ 1012:
/***/ function(module, exports) {



/***/ },

/***/ 1013:
/***/ function(module, exports) {

module.exports = ".document-select {\r\n    position: relative;\r\n}\r\n\r\n.input-combo {\r\n    position: relative;\r\n}\r\n\r\n.input-combo span:after {\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    text-rendering: auto;\r\n    display: block;\r\n    position: absolute;\r\n}\r\n\r\n.input-combo span.chevron:after {\r\n    content: \"\\f078\";\r\n    bottom: 12px;\r\n    right: 12px;\r\n}\r\n\r\n.active .input-combo span.chevron:after {\r\n    content: \"\\f077\";\r\n}\r\n\r\n.input-combo span.search:after {\r\n    content: \"\\f002\";\r\n    background: #fff;\r\n    bottom: 7px;\r\n    left: 8px;\r\n}\r\n\r\n.input-combo .form-control[readonly] {\r\n    cursor: pointer;\r\n    background: #fff;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.input-combo .form-control:disabled {\r\n    background-color: #eceeef;\r\n}\r\n\r\n.active .input-combo .form-control {\r\n    border-radius: 0.25rem 0.25rem 0 0;\r\n}\r\n\r\n.options {\r\n    box-shadow: 0 1px 4px rgba(0,0,0,0.12);\r\n    position: absolute;\r\n    display: none;\r\n    margin-bottom: 0.75rem;\r\n    background-color: #fff;\r\n    border-radius: 0 0 0.25rem 0.25rem;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-top: none;\r\n    z-index: 333;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.active .options {\r\n    display: block;\r\n}\r\n\r\n.options .form-control {\r\n    padding-left: 28px;\r\n    background: #fff;\r\n}\r\n\r\n.options-scroller {\r\n    max-height: 168px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.option {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 4px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n\r\n.option-text{\r\n    flex-grow: 2;\r\n}\r\n\r\n.selected {\r\n    background: #f0f5f5;\r\n}\r\n\r\n.option:hover {\r\n    background: #0275d8;\r\n    color: #fff\r\n}\r\n\r\n.option-check {\r\n    text-align: center;\r\n    display: none;\r\n    color: #0275d8;\r\n}\r\n\r\n.option:hover .option-check {\r\n    color: #fff;\r\n}\r\n\r\n.option:hover .text-muted {\r\n    color: rgba(255,255,255,.8) !important;\r\n}\r\n\r\n.selected .option-check {\r\n    display: block;\r\n}"

/***/ },

/***/ 1014:
/***/ function(module, exports) {

module.exports = "<div class=\"document-select\" [ngClass]=\"{ active : active }\">\r\n    <div class=\"input-combo\">\r\n        <span class=\"chevron\">\r\n            <input type=\"text\" [value]=\"displayLabel(selected)\" class=\"form-control\" (click)=\"toggleActive()\"  [disabled]=\"disabled\" readonly/>\r\n        </span>\r\n    </div>\r\n    <div class=\"options\">\r\n        <form [formGroup]=\"form\" class=\"p-1\">\r\n            <div class=\"input-combo\">\r\n                <span class=\"search\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"search\" autocomplete=\"off\" placeholder=\"Busqueda\" />\r\n                </span>\r\n            </div>\r\n        </form>\r\n        <div class=\"options-scroller\">\r\n            <div class=\"option px-1\" *ngFor=\"let option of options\" (click)=\"updateSelected(option)\" [ngClass]=\"{'selected' : isOptionSelected(option)}\">\r\n                <div class=\"option-item option-text\">\r\n                    <div class=\"option-display\">\r\n                        {{ displayLabel(option) }}\r\n                    </div>\r\n                    <div class=\"options-aux\" *ngIf=\"displayAux(option)\">\r\n                        <small class=\"text-muted\">{{ displayAux(option) }}</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"option-item option-check\">\r\n                    <i class=\"fa fa-fw fa-circle-o\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 1015:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(1009);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegaEditarComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BodegaEditarComponent = (function (_super) {
    __extends(BodegaEditarComponent, _super);
    function BodegaEditarComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
    }
    BodegaEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('active', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('descripcion', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('encargado', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.subscribeResource('bodega', _this._apiService.get("/administracion/bodegas/" + id), false, null, function (response) {
                _this.bodega = response;
                _this.form.setValue({
                    active: response.active,
                    nombre: response.nombre,
                    descripcion: ('descripcion' in response) ? response.descripcion : null,
                    encargado: ('encargado' in response) ? response.encargado.id : null
                });
            });
        });
        var filters = { active: true };
        this.subscribeResource('personal', this._apiService.get("/administracion/personal?" + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(filters)));
        this.documentMap = {
            searchKeys: ["nombre", "apellido", "cedula"],
            display: ["nombre", "apellido"],
            small: ["cedula"]
        };
    };
    BodegaEditarComponent.prototype.updateEncargado = function (id) {
        this.setControlValue('encargado', id);
    };
    BodegaEditarComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/bodegas/" + this.bodega.id, this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    BodegaEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bodega-editar',
            template: __webpack_require__(1081)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], BodegaEditarComponent);
    return BodegaEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegaListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodegaListaComponent = (function () {
    function BodegaListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    BodegaListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/administracion/bodegas").subscribe(function (data) {
            if ('bodegas' in data)
                _this.bodegas = data.bodegas;
        });
    };
    BodegaListaComponent.prototype.toggleActive = function (bodega, index) {
        var _this = this;
        this._apiService.patch("/administracion/bodegas/" + bodega.id, { active: !bodega.active }).subscribe(function (recurso) {
            _this.bodegas[index].active = recurso.active;
        });
    };
    BodegaListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bodegas-lista',
            template: __webpack_require__(1082)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], BodegaListaComponent);
    return BodegaListaComponent;
    var _a;
}());


/***/ },

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(1009);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegaNuevaComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BodegaNuevaComponent = (function (_super) {
    __extends(BodegaNuevaComponent, _super);
    function BodegaNuevaComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
        this.codigoReady = false;
    }
    BodegaNuevaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('codigo', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('encargado', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('descripcion', null);
        this._apiService.get("/administracion/bodegas?codigo=true").subscribe(function (response) {
            if ('codigo' in response) {
                _this.codigoReady = true;
                _this.setControlValue('codigo', response.codigo);
            }
        });
        var filters = { active: true };
        this.subscribeResource('personal', this._apiService.get("/administracion/personal?" + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(filters)));
        this.onControlChange('encargado', function (value) { return console.log(value); });
        this.documentMap = {
            searchKeys: ["nombre", "apellido", "cedula"],
            display: ["nombre", "apellido"],
            small: ["cedula"]
        };
    };
    BodegaNuevaComponent.prototype.updateEncargado = function (id) {
        this.setControlValue('encargado', id);
    };
    BodegaNuevaComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.post("/administracion/bodegas", this.form.value).subscribe(function (bodega) {
                _this.router.navigate(["../view", bodega.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                if ('errors' in error)
                    _this.handleFormErrors(error.errors);
            });
        }
    };
    BodegaNuevaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bodega-nueva',
            template: __webpack_require__(1083)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], BodegaNuevaComponent);
    return BodegaNuevaComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_2__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegaVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodegaVerComponent = (function () {
    function BodegaVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.toggleWaiting = false;
    }
    BodegaVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/administracion/bodegas/" + id).subscribe(function (response) { _this.bodega = response; });
        });
    };
    BodegaVerComponent.prototype.toggleActive = function (bodega) {
        var _this = this;
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/bodegas/" + bodega.id, { active: !bodega.active }).subscribe(function (response) {
            _this.bodega.active = response.active;
            _this.toggleWaiting = !_this.toggleWaiting;
        });
    };
    BodegaVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bodega-ver',
            template: __webpack_require__(1084)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], BodegaVerComponent);
    return BodegaVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1019:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialEditarComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MaterialEditarComponent = (function (_super) {
    __extends(MaterialEditarComponent, _super);
    function MaterialEditarComponent(route, _apiService, router, formBuilder) {
        _super.call(this, formBuilder);
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
    }
    MaterialEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required);
        this.addControl('descripcion', null);
        this.addControl('active', null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.subscribeResource('material', _this._apiService.get("/administracion/materiales/" + id), false, null, function (response) {
                _this.material = response;
                _this.form.setValue({
                    nombre: response.nombre,
                    descripcion: ('descripcion' in response) ? response.descripcion : null,
                    active: response.active
                });
            });
        });
    };
    MaterialEditarComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/materiales/" + this.material.id, this.form.value).subscribe(function (response) {
                _this.router.navigate(["../../view", response.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                _this.handleFormErrors(error.errors);
            });
        }
    };
    MaterialEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-material-editar',
            template: __webpack_require__(1085)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], MaterialEditarComponent);
    return MaterialEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1020:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialListaComponent = (function () {
    function MaterialListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    MaterialListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/administracion/materiales").subscribe(function (data) {
            if ('materiales' in data)
                _this.materiales = data.materiales;
        });
    };
    MaterialListaComponent.prototype.toggleActive = function (material, index) {
        var _this = this;
        this._apiService.patch("/administracion/materiales/" + material.id, { active: !material.active }).subscribe(function (recurso) {
            _this.materiales[index].active = recurso.active;
        });
    };
    MaterialListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-material-lista',
            template: __webpack_require__(1086)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], MaterialListaComponent);
    return MaterialListaComponent;
    var _a;
}());


/***/ },

/***/ 1021:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_FormController__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialNuevoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialNuevoComponent = (function (_super) {
    __extends(MaterialNuevoComponent, _super);
    function MaterialNuevoComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
        this.codigoReady = false;
    }
    MaterialNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('tipoMaterial', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('codigo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('descripcion', null);
        this.addControl('categoria', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.onControlChange('tipoMaterial', function (recursoId) {
            var recurso = _this.tiposMateriales.filter(function (recurso) {
                return recurso.id == recursoId;
            })[0];
            _this.categorias = recurso.categorias.filter(function (categoria) { return categoria.active == true; }).slice();
            var categoriaControl = _this.getControl('categoria');
            categoriaControl.setValue(null);
        });
        this.subscribeResource('codigo', this._apiService.get("/administracion/materiales?codigo=true"), false, null, function (response) {
            if ('codigo' in response) {
                _this.codigoReady = true;
                _this.setControlValue('codigo', response.codigo);
            }
        });
        var filters = { active: true, 'seccion.id': "_TIPO_MATERIAL" };
        this.subscribeResource("recursos", this._apiService.get("/panel/recursos?" + __WEBPACK_IMPORTED_MODULE_3__shared_utils__["a" /* Utils */].queryParameters(filters)), true, "tiposMateriales");
    };
    MaterialNuevoComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            var data = this.form.value;
            this.toggleForm();
            this._apiService.post("/administracion/materiales", data).subscribe(function (response) {
                _this.toggleForm();
                _this.router.navigate(["../view", response.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    MaterialNuevoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-material-nuevo',
            template: __webpack_require__(1087)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], MaterialNuevoComponent);
    return MaterialNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_5__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1022:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialVerComponent = (function () {
    function MaterialVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.toggleWaiting = false;
    }
    MaterialVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/administracion/materiales/" + id).subscribe(function (recurso) { _this.material = recurso; });
        });
    };
    MaterialVerComponent.prototype.toggleActive = function (material) {
        var _this = this;
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/materiales/" + material.id, { active: !material.active }).subscribe(function (recurso) {
            _this.material.active = recurso.active;
            _this.toggleWaiting = !_this.toggleWaiting;
        });
    };
    MaterialVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-material-ver',
            template: __webpack_require__(1088)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], MaterialVerComponent);
    return MaterialVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1023:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalEditarComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalEditarComponent = (function (_super) {
    __extends(PersonalEditarComponent, _super);
    function PersonalEditarComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
    }
    PersonalEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('active', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('apellido', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('cedula', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('codigo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('celular', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.subscribeResource('personal', _this._apiService.get("/administracion/personal/" + id), false, null, function (response) {
                _this.form.setValue({
                    active: response.active,
                    nombre: response.nombre,
                    apellido: response.apellido,
                    cedula: response.cedula,
                    correo: response.correo,
                    codigo: response.codigo,
                    telefono: response.telefono,
                    celular: response.celular
                });
            });
        });
    };
    PersonalEditarComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/personal/" + this.personal.id, this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    PersonalEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-personal-editar',
            template: __webpack_require__(1089)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], PersonalEditarComponent);
    return PersonalEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1024:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalListaComponent = (function () {
    function PersonalListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    PersonalListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/administracion/personal").subscribe(function (data) {
            if ('personal' in data)
                _this.personal = data.personal;
        });
    };
    PersonalListaComponent.prototype.toggleActive = function (personal, index) {
        var _this = this;
        this._apiService.patch("/administracion/personal/" + personal.id, { active: !personal.active }).subscribe(function (response) {
            _this.personal[index].active = response.active;
        });
    };
    PersonalListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-personal-lista',
            template: __webpack_require__(1090),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], PersonalListaComponent);
    return PersonalListaComponent;
    var _a;
}());


/***/ },

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalNuevoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalNuevoComponent = (function (_super) {
    __extends(PersonalNuevoComponent, _super);
    function PersonalNuevoComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
        this.codigoReady = false;
    }
    PersonalNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('apellido', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('cedula', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('codigo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('celular', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.subscribeResource('codigo', this._apiService.get('/administracion/personal?codigo=true'), true, null, function (response) {
            _this.setControlValue('codigo', response.codigo);
            _this.codigoReady = true;
        });
    };
    PersonalNuevoComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.post("/administracion/personal", this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    PersonalNuevoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-personal-nuevo',
            template: __webpack_require__(1091)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], PersonalNuevoComponent);
    return PersonalNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1026:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalVerComponent = (function () {
    function PersonalVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.toggleWaiting = false;
    }
    PersonalVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/administracion/personal/" + id).subscribe(function (response) { _this.personal = response; });
        });
    };
    PersonalVerComponent.prototype.toggleActive = function (personal) {
        var _this = this;
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/personals/" + personal.id, { active: !personal.active }).subscribe(function (response) {
            _this.personal.active = response.active;
            _this.toggleWaiting = !_this.toggleWaiting;
        });
    };
    PersonalVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-personal-ver',
            template: __webpack_require__(1092),
            styles: [__webpack_require__(1074)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], PersonalVerComponent);
    return PersonalVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1027:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductorEditarComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductorEditarComponent = (function (_super) {
    __extends(ProductorEditarComponent, _super);
    function ProductorEditarComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
    }
    ProductorEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('active', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('apellido', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('ruc', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.subscribeResource('personal', _this._apiService.get("/administracion/productores/" + id), false, null, function (response) {
                _this.productor = response;
                _this.form.setValue({
                    active: response.active,
                    nombre: response.nombre,
                    apellido: response.apellido,
                    ruc: response.ruc,
                    correo: response.correo,
                    telefono: response.telefono,
                });
            });
        });
    };
    ProductorEditarComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/productores/" + this.productor.id, this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    ProductorEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-productor-editar',
            template: __webpack_require__(1093)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProductorEditarComponent);
    return ProductorEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1028:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductorListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductorListaComponent = (function () {
    function ProductorListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    ProductorListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/administracion/productores").subscribe(function (data) {
            if ('productores' in data)
                _this.productores = data.productores;
        });
    };
    ProductorListaComponent.prototype.toggleActive = function (productor, index) {
        var _this = this;
        this._apiService.patch("/administracion/productores/" + productor.id, { active: !productor.active }).subscribe(function (response) {
            _this.productores[index].active = response.active;
        });
    };
    ProductorListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-productor-lista',
            template: __webpack_require__(1094),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ProductorListaComponent);
    return ProductorListaComponent;
    var _a;
}());


/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductorNuevoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductorNuevoComponent = (function (_super) {
    __extends(ProductorNuevoComponent, _super);
    function ProductorNuevoComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
    }
    ProductorNuevoComponent.prototype.ngOnInit = function () {
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('apellido', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('ruc', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
    };
    ProductorNuevoComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.post("/administracion/productores", this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    ProductorNuevoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-productor-nuevo',
            template: __webpack_require__(1095)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProductorNuevoComponent);
    return ProductorNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductorVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductorVerComponent = (function () {
    function ProductorVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.toggleWaiting = false;
    }
    ProductorVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/administracion/productores/" + id).subscribe(function (response) { _this.productor = response; });
        });
    };
    ProductorVerComponent.prototype.toggleActive = function (productor) {
        var _this = this;
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/productores/" + productor.id, { active: !productor.active }).subscribe(function (response) {
            _this.productor.active = response.active;
            _this.toggleWaiting = !_this.toggleWaiting;
        });
    };
    ProductorVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-productor-ver',
            template: __webpack_require__(1096),
            styles: [__webpack_require__(1075)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], ProductorVerComponent);
    return ProductorVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedorEditarComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProveedorEditarComponent = (function (_super) {
    __extends(ProveedorEditarComponent, _super);
    function ProveedorEditarComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
    }
    ProveedorEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('active', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('ruc', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.subscribeResource('proveedor', _this._apiService.get("/administracion/proveedores/" + id), false, null, function (response) {
                _this.proveedor = response;
                _this.form.setValue({
                    active: response.active,
                    nombre: response.nombre,
                    ruc: response.ruc,
                    correo: response.correo,
                    telefono: response.telefono,
                });
            });
        });
    };
    ProveedorEditarComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/proveedores/" + this.proveedor.id, this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    ProveedorEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-proveedor-editar',
            template: __webpack_require__(1097)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProveedorEditarComponent);
    return ProveedorEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedorListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProveedorListaComponent = (function () {
    function ProveedorListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    ProveedorListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/administracion/proveedores").subscribe(function (data) {
            if ('proveedores' in data)
                _this.proveedores = data.proveedores;
        });
    };
    ProveedorListaComponent.prototype.toggleActive = function (proveedor, index) {
        var _this = this;
        this._apiService.patch("/administracion/proveedores/" + proveedor.id, { active: !proveedor.active }).subscribe(function (response) {
            _this.proveedores[index].active = response.active;
        });
    };
    ProveedorListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-proveedor-lista',
            template: __webpack_require__(1098),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ProveedorListaComponent);
    return ProveedorListaComponent;
    var _a;
}());


/***/ },

/***/ 1033:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedorNuevoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProveedorNuevoComponent = (function (_super) {
    __extends(ProveedorNuevoComponent, _super);
    function ProveedorNuevoComponent(_apiService, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._apiService = _apiService;
        this.router = router;
        this.route = route;
        this.codigoReady = false;
    }
    ProveedorNuevoComponent.prototype.ngOnInit = function () {
        this.addControl('nombre', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('ruc', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('correo', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
        this.addControl('telefono', null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required);
    };
    ProveedorNuevoComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            this._apiService.post("/administracion/proveedores", this.form.value).subscribe(function (repsonse) {
                _this.router.navigate(["../view", repsonse.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                console.log(error.errors);
                _this.handleFormErrors(error.errors);
            });
        }
    };
    ProveedorNuevoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-proveedor-nuevo',
            template: __webpack_require__(1099)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProveedorNuevoComponent);
    return ProveedorNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1034:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedorVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProveedorVerComponent = (function () {
    function ProveedorVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.toggleWaiting = false;
    }
    ProveedorVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/administracion/proveedores/" + id).subscribe(function (response) { _this.proveedor = response; });
        });
    };
    ProveedorVerComponent.prototype.toggleActive = function (proveedor) {
        var _this = this;
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/proveedorses/" + proveedor.id, { active: !proveedor.active }).subscribe(function (response) {
            _this.proveedor.active = response.active;
            _this.toggleWaiting = !_this.toggleWaiting;
        });
    };
    ProveedorVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-proveedor-ver',
            template: __webpack_require__(1100),
            styles: [__webpack_require__(1076)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], ProveedorVerComponent);
    return ProveedorVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1047:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodegasComponent = (function () {
    function BodegasComponent(headerService) {
        this.headerService = headerService;
    }
    BodegasComponent.prototype.ngOnInit = function () {
        var base_uri = "administracion/bodegas/";
        this.headerService.setHeader("administracion", "Bodegas", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "add", icono: "fa-plus" }
        ]);
    };
    BodegasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bodegas',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], BodegasComponent);
    return BodegasComponent;
    var _a;
}());


/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialesComponent = (function () {
    function MaterialesComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    MaterialesComponent.prototype.ngOnInit = function () {
        var base_uri = "administracion/materiales/";
        this._dashboardService.setHeader("Administracion", "Materiales", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "add", icono: "fa-plus" }
        ]);
    };
    MaterialesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-materiales',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], MaterialesComponent);
    return MaterialesComponent;
    var _a;
}());


/***/ },

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalComponent = (function () {
    function PersonalComponent(headerService) {
        this.headerService = headerService;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        var base_uri = "administracion/personal/";
        this.headerService.setHeader("administracion", "Personal", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "add", icono: "fa-plus" }
        ]);
    };
    PersonalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-personal',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], PersonalComponent);
    return PersonalComponent;
    var _a;
}());


/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductoresComponent = (function () {
    function ProductoresComponent(headerService) {
        this.headerService = headerService;
    }
    ProductoresComponent.prototype.ngOnInit = function () {
        var base_uri = "administracion/productores/";
        this.headerService.setHeader("administracion", "Productores", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "add", icono: "fa-plus" }
        ]);
    };
    ProductoresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-prductores',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], ProductoresComponent);
    return ProductoresComponent;
    var _a;
}());


/***/ },

/***/ 1051:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProveedoresComponent = (function () {
    function ProveedoresComponent(headerService) {
        this.headerService = headerService;
    }
    ProveedoresComponent.prototype.ngOnInit = function () {
        var base_uri = "administracion/proveedores/";
        this.headerService.setHeader("administracion", "Proveedores", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "add", icono: "fa-plus" }
        ]);
    };
    ProveedoresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-proveedores',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], ProveedoresComponent);
    return ProveedoresComponent;
    var _a;
}());


/***/ },

/***/ 1057:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodega_nueva_bodega_nueva_component__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bodega_lista_bodega_lista_component__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bodega_ver_bodega_ver_component__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodega_editar_bodega_editar_component__ = __webpack_require__(1015);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodegasRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_3__bodega_lista_bodega_lista_component__["a" /* BodegaListaComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_2__bodega_nueva_bodega_nueva_component__["a" /* BodegaNuevaComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__bodega_ver_bodega_ver_component__["a" /* BodegaVerComponent */] },
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__bodega_editar_bodega_editar_component__["a" /* BodegaEditarComponent */] }
];
var BodegasRoutingModule = (function () {
    function BodegasRoutingModule() {
    }
    BodegasRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BodegasRoutingModule);
    return BodegasRoutingModule;
}());


/***/ },

/***/ 1058:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_lista_material_lista_component__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_nuevo_material_nuevo_component__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ver_material_ver_component__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_editar_material_editar_component__ = __webpack_require__(1019);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MaterialesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__material_lista_material_lista_component__["a" /* MaterialListaComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_3__material_nuevo_material_nuevo_component__["a" /* MaterialNuevoComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__material_ver_material_ver_component__["a" /* MaterialVerComponent */] },
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__material_editar_material_editar_component__["a" /* MaterialEditarComponent */] }
];
var MaterialesRoutingModule = (function () {
    function MaterialesRoutingModule() {
    }
    MaterialesRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialesRoutingModule);
    return MaterialesRoutingModule;
}());


/***/ },

/***/ 1059:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_lista_personal_lista_component__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_nuevo_personal_nuevo_component__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_ver_personal_ver_component__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_editar_personal_editar_component__ = __webpack_require__(1023);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__personal_lista_personal_lista_component__["a" /* PersonalListaComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_3__personal_nuevo_personal_nuevo_component__["a" /* PersonalNuevoComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__personal_ver_personal_ver_component__["a" /* PersonalVerComponent */] },
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__personal_editar_personal_editar_component__["a" /* PersonalEditarComponent */] }
];
var PersonalRoutingModule = (function () {
    function PersonalRoutingModule() {
    }
    PersonalRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonalRoutingModule);
    return PersonalRoutingModule;
}());


/***/ },

/***/ 1060:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productor_lista_productor_lista_component__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productor_nuevo_productor_nuevo_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productor_ver_productor_ver_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productor_editar_productor_editar_component__ = __webpack_require__(1027);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductoresRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__productor_lista_productor_lista_component__["a" /* ProductorListaComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_3__productor_nuevo_productor_nuevo_component__["a" /* ProductorNuevoComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__productor_ver_productor_ver_component__["a" /* ProductorVerComponent */] },
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__productor_editar_productor_editar_component__["a" /* ProductorEditarComponent */] }
];
var ProductoresRoutingModule = (function () {
    function ProductoresRoutingModule() {
    }
    ProductoresRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductoresRoutingModule);
    return ProductoresRoutingModule;
}());


/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_lista_proveedor_lista_component__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_nuevo_proveedor_nuevo_component__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proveedor_ver_proveedor_ver_component__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_editar_proveedor_editar_component__ = __webpack_require__(1031);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProveedoresRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__proveedor_lista_proveedor_lista_component__["a" /* ProveedorListaComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_3__proveedor_nuevo_proveedor_nuevo_component__["a" /* ProveedorNuevoComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__proveedor_ver_proveedor_ver_component__["a" /* ProveedorVerComponent */] },
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__proveedor_editar_proveedor_editar_component__["a" /* ProveedorEditarComponent */] }
];
var ProveedoresRoutingModule = (function () {
    function ProveedoresRoutingModule() {
    }
    ProveedoresRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProveedoresRoutingModule);
    return ProveedoresRoutingModule;
}());


/***/ },

/***/ 1074:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1075:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1076:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1081:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view',bodega?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Bodega</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"bodega-codigo\">Codigo</label>\n                        <input type=\"text\" id=\"bodega-codigo\" class=\"form-control text-md-center\" [value]=\"bodega?.codigo\" readonly/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('encargado')}\">\n                        <label class=\"form-control-label\">Encargado</label>\n                        <app-document-select\n                                [documents]=\"personal\"\n                                [current]=\"bodega?.encargado.id\"\n                                [documentMap]=\"documentMap\"\n                                [disabled]=\"waiting\"\n                                (output)=\"updateEncargado($event)\"\n                        ></app-document-select>\n                        <small class=\"form-control-feedback\">{{ getFeedback('encargado') }}</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"bodega-nombre\">Nombre</label>\n                        <input type=\"text\" id=\"bodega-nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\" placeholder=\"Cuidad, Edificio, etc...\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"descripcion\">Descripcion</label>\n                        <textarea id=\"descripcion\" class=\"form-control control-y-2\" formControlName=\"descripcion\" placeholder=\"Cartonera, Etiquetas y Fundas, etc..\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Recurso Habilitado\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 text-xs-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                            <span>Editar Bodega</span>\n                            <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1082:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <h5>Lista de Bodegas</h5>\n</div>\n<div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th width=\"1\">#</th>\n            <th>Codigo</th>\n            <th>Nombre</th>\n            <th class=\"text-xs-center\">Habilitado</th>\n            <th class=\"text-xs-center\">Creado</th>\n            <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let bodega of bodegas; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td><code><a [routerLink]=\"['../view', bodega.id]\">{{ bodega.codigo }}</a></code></td>\n            <td><a [routerLink]=\"['../view', bodega.id]\">{{ bodega.nombre }}</a></td>\n            <td class=\"text-xs-center\">{{ bodega.active ? \"Si\" : \"No\" }}</td>\n            <td class=\"text-xs-center\">{{ bodega.created | date }}</td>\n            <td class=\"list-actions\">\n                <a [routerLink]=\"['../edit', bodega.id]\"><i class=\"fa fa-pencil\"></i></a>\n                <a (click)=\"toggleActive(bodega, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye' : bodega?.active, 'fa-eye-slash' : !bodega?.active}\"></i></a>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>"

/***/ },

/***/ 1083:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nueva Bodega</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('codigo'), 'has-success' : codigoReady }\">\n                        <label class=\"form-control-label\" for=\"bodega-codigo\">Codigo</label>\n                        <input type=\"text\" id=\"bodega-codigo\" class=\"form-control form-control-success text-md-center\" formControlName=\"codigo\" readonly/>\n                        <small class=\"form-text text-muted\">Codigo generado automaticamente</small>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('encargado')}\">\n                        <label class=\"form-control-label\" for=\"encargado\">Encargado</label>\n                        <select formControlName=\"encargado\" id=\"encargado\" class=\"form-control\">\n                            <option *ngFor=\"let persona of personal\" [value]=\"persona.id\">{{ persona.nombre + \" \" + persona.apellido}}</option>\n                        </select>\n                        <small class=\"form-control-feedback\">{{ getFeedback('encargado') }}</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"bodega-nombre\">Nombre</label>\n                        <input type=\"text\" id=\"bodega-nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\" placeholder=\"Cuidad, Edificio, etc...\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"descripcion\">Descripcion</label>\n                        <textarea id=\"descripcion\" class=\"form-control control-y-2\" formControlName=\"descripcion\" placeholder=\"Cartonera, Etiquetas y Fundas, etc..\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-xs-right\">\n                <div class=\"btn-group\">\n                    <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                        <span>Ingresar Bodega</span>\n                        <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                    </button>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1084:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <div class=\"clearfix button-holder\">\n        <div class=\"view-action\">\n            <button (click)=\"toggleActive(bodega)\" [disabled]=\"toggleWaiting\">\n                {{ bodega?.active ? 'Habilitado' : 'Deshabilitado' }} <i class=\"fa fa-fw\" [ngClass]=\"{'fa-eye': bodega?.active, 'fa-eye-slash': !bodega?.active}\"></i>\n            </button>\n            <button [routerLink]=\"['../../edit', bodega?.id ]\" ><i class=\"fa fa-fw fa-pencil\"></i></button>\n        </div>\n        <h5>Bodega: <code>#{{ bodega?.codigo}}</code></h5>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Nombre</strong>\n                <div class=\"view-display-static\">{{ bodega?.nombre }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Encargado Actual</strong>\n                <div class=\"view-display-static\">{{ bodega?.encargado?.nombre }} {{ bodega?.encargado?.apellido }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Creada</strong>\n                <div class=\"view-display-static\">{{ bodega?.created | date }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Ultimo Cambio</strong>\n                <div class=\"view-display-static\">{{ bodega?.edited | date }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-12\">\n            <div>\n                <strong>Descripcion</strong>\n                <div class=\"box-pre\"><pre>{{ bodega?.descripcion }}</pre></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1085:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view', material?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Material</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"codigo-material\">Codigo</label>\n                        <input type=\"text\" id=\"codigo-material\" class=\"form-control text-md-center\" [value]=\"material?.codigo\" readonly/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"tipo-material\">Tipo de Material</label>\n                        <input type=\"text\" id=\"tipo-material\" class=\"form-control text-md-center\" [value]=\"material?.tipoMaterial.nombre\" readonly/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"categoria\">Categoria</label>\n                        <input type=\"text\" id=\"categoria\" class=\"form-control text-md-center\" [value]=\"material?.categoria.nombre\" readonly/>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre-material\">Nombre</label>\n                        <input type=\"text\" id=\"nombre-material\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"descripcion-material\">Descripcion</label>\n                        <textarea id=\"descripcion-material\" class=\"form-control control-y-2\" formControlName=\"descripcion\" placeholder=\"Opcional\"></textarea>\n                    </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Material Habilitado\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 text-xs-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                            <span>Editar Material</span>\n                            <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1086:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <h5>Lista de Materiales</h5>\n</div>\n<div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Codigo</th>\n                <th>Nombre</th>\n                <th>Tipo Material</th>\n                <th>Categoria</th>\n                <th class=\"text-xs-center\">Habilitado</th>\n                <th class=\"text-xs-center\">Creado</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let material of materiales; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td><code><a [routerLink]=\"['../view', material?.id]\">{{ material.codigo }}</a></code></td>\n                <td><a [routerLink]=\"['../view', material?.id]\">{{ material.nombre }}</a></td>\n                <td>{{ material.tipoMaterial.nombre }}</td>\n                <td>{{ material.categoria.nombre }}</td>\n                <td class=\"text-xs-center\">{{ material.active ? \"Si\" : \"No\" }}</td>\n                <td class=\"text-xs-center\">{{ material.created | date }}</td>\n                <td class=\"list-actions\">\n                    <a [routerLink]=\"['../edit', material.id]\"><i class=\"fa fa-pencil\"></i></a>\n                    <a (click)=\"toggleActive(material, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye-slash' : !material?.active, 'fa-eye' : material?.active}\"></i></a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ },

/***/ 1087:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nuevo Material</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-danger' :isControlInvalid('codigo'), 'has-success' : codigoReady}\">\n                        <label class=\"form-control-label\" for=\"codigo-material\">Codigo</label>\n                        <input type=\"text\" id=\"codigo-material\" class=\"form-control  form-control-success text-md-center\" formControlName=\"codigo\" readonly/>\n                        <small class=\"form-text text-muted\">Codigo generado automaticamente</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"tipo-material\">Tipo de Material</label>\n                        <select id=\"tipo-material\" class=\"form-control\" formControlName=\"tipoMaterial\">\n                            <option *ngFor=\"let tipoMaterial of tiposMateriales\" [value]=\"tipoMaterial.id\">{{ tipoMaterial.nombre }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-danger' : isControlInvalid('categoria')}\">\n                        <label class=\"form-control-label\" for=\"categoria\">Categoria</label>\n                        <select id=\"categoria\" class=\"form-control\" formControlName=\"categoria\">\n                            <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{ categoria.nombre }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre-material\">Nombre</label>\n                        <input type=\"text\" id=\"nombre-material\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"descripcion-material\">Descripcion</label>\n                        <textarea id=\"descripcion-material\" class=\"form-control control-y-2\" formControlName=\"descripcion\" placeholder=\"Opcional\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-xs-right\">\n                <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                    <span>Ingresar Material</span>\n                    <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                </button>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1088:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <div class=\"clearfix button-holder\">\n        <div class=\"view-action\">\n            <button (click)=\"toggleActive(material)\" [disabled]=\"toggleWaiting\">\n                {{ material?.active ? 'Habilitado' : 'Deshabilitado' }} <i class=\"fa fa-fw\" [ngClass]=\"{'fa-eye': material?.active, 'fa-eye-slash': !material?.active}\"></i>\n            </button>\n            <button [routerLink]=\"['../../edit', material?.id ]\" ><i class=\"fa fa-fw fa-pencil\"></i></button>\n        </div>\n        <h5>Material: <code>#{{ material?.codigo}}</code></h5>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Nombre</strong>\n                <div class=\"view-display-static\">{{ material?.nombre }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Tipo Material</strong>\n                <div class=\"view-display-static\">{{ material?.tipoMaterial.nombre }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Categoria</strong>\n                <div class=\"view-display-static\">{{ material?.categoria.nombre }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Creado</strong>\n                <div class=\"view-display-static\">{{ material?.created | date }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Ultimo Cambio</strong>\n                <div class=\"view-display-static\">{{ material?.edited | date }}</div>\n            </div>\n        </div>\n        <div class=\"col-sm-12\">\n            <div>\n                <strong>Detalle</strong>\n                <div class=\"box-pre\"><pre>{{ material?.descripcion }}</pre></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1089:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view', personal?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Personal</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"codigo\">Codigo</label>\n                        <input type=\"text\" id=\"codigo\" class=\"form-control text-md-center\" [ngClass]=\"{ 'form-control-success' : !isControlInvalid('codigo') }\" [value]=\"personal?.codigo\" readonly/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('cedula')}\">\n                        <label class=\"form-control-label\" for=\"cedula\">Cedula</label>\n                        <input type=\"tel\" id=\"cedula\" class=\"form-control\" formControlName=\"cedula\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('cedula') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control form-control-danger\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('celular')}\">\n                        <label class=\"form-control-label\" for=\"celular\">Celular</label>\n                        <input type=\"tel\" id=\"celular\" class=\"form-control\" formControlName=\"celular\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('celular') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Recurso Habilitado\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-xs-right\">\n                <div class=\"btn-group\">\n                    <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                        <span>Ingresar Bodega</span>\n                        <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                    </button>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>\n"

/***/ },

/***/ 1090:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Lista del Personal</h5>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th>Nombre</th>\r\n            <th>Codigo</th>\r\n            <th>Cedula</th>\r\n            <th class=\"text-xs-center\">Habilitado</th>\r\n            <th class=\"text-xs-center\">Creado</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let persona of personal; let i = index\">\r\n            <td><a [routerLink]=\"['../view', persona.id]\">{{ persona.nombre + \" \" + persona.apellido }}</a></td>\r\n            <td>{{ persona.codigo }}</td>\r\n            <td>{{ persona.cedula }}</td>\r\n            <td class=\"text-xs-center\">{{ persona.active ? \"Si\" : \"No\" }}</td>\r\n            <td class=\"text-xs-center\">{{ persona.created | date }}</td>\r\n            <td class=\"list-actions\">\r\n                <a [routerLink]=\"['../edit', persona.id]\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"toggleActive(persona, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye' : persona?.active, 'fa-eye-slash' : !persona?.active}\"></i></a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ },

/***/ 1091:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nuevo Personal</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('codigo'), 'has-success' : codigoReady}\">\n                        <label class=\"form-control-label\" for=\"codigo\">Codigo</label>\n                        <input type=\"text\" id=\"codigo\" class=\"form-control form-control-success text-md-center\" formControlName=\"codigo\" readonly/>\n                        <small class=\"form-text text-muted\">Codigo generado automaticamente.</small>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('cedula')}\">\n                        <label class=\"form-control-label\" for=\"cedula\">Cedula</label>\n                        <input type=\"tel\" id=\"cedula\" class=\"form-control\" formControlName=\"cedula\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('cedula') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('celular')}\">\n                        <label class=\"form-control-label\" for=\"celular\">Celular</label>\n                        <input type=\"tel\" id=\"celular\" class=\"form-control\" formControlName=\"celular\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('celular') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group text-xs-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                                <span>Ingresar Personal</span>\n                                <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1092:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <p>\n    personal-ver works!\n    </p>\n</div>\n"

/***/ },

/***/ 1093:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view', productor?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Productor</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control form-control-danger\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Recurso Habilitado\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-xs-right\">\n                <div class=\"btn-group\">\n                    <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                        <span>Ingresar Bodega</span>\n                        <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                    </button>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1094:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Lista del Personal</h5>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th>Nombre</th>\r\n            <th>RUC</th>\r\n            <th>Correo</th>\r\n            <th class=\"text-xs-center\">Habilitado</th>\r\n            <th class=\"text-xs-center\">Creado</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let productor of productores; let i = index\">\r\n            <td><a [routerLink]=\"['../view', productor.id]\">{{ productor.nombre + \" \" + productor.apellido }}</a></td>\r\n            <td>{{ productor.ruc }}</td>\r\n            <td>{{ productor.correo }}</td>\r\n            <td class=\"text-xs-center\">{{ productor.active ? \"Si\" : \"No\" }}</td>\r\n            <td class=\"text-xs-center\">{{ productor.created | date }}</td>\r\n            <td class=\"list-actions\">\r\n                <a [routerLink]=\"['../edit', productor.id]\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"toggleActive(productor, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye' : productor?.active, 'fa-eye-slash' : !productor?.active}\"></i></a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ },

/***/ 1095:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nuevo Productor</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group text-xs-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                                <span>Ingresar Personal</span>\n                                <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1096:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <p>\n      personal-ver works!\n    </p>\n</div>\n"

/***/ },

/***/ 1097:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view', proveedor?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Proveedor</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula o R.U.C.</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Recurso Habilitado\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group text-xs-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                                <span>Editar Proveedor</span>\n                                <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1098:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Lista de Proveedores</h5>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th>Nombre</th>\r\n            <th>RUC</th>\r\n            <th>Correo</th>\r\n            <th class=\"text-xs-center\">Habilitado</th>\r\n            <th class=\"text-xs-center\">Creado</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let proveedor of proveedores; let i = index\">\r\n            <td><a [routerLink]=\"['../view', proveedor.id]\">{{ proveedor.nombre }}</a></td>\r\n            <td>{{ proveedor.ruc }}</td>\r\n            <td>{{ proveedor.correo }}</td>\r\n            <td class=\"text-xs-center\">{{ proveedor.active ? \"Si\" : \"No\" }}</td>\r\n            <td class=\"text-xs-center\">{{ proveedor.created | date }}</td>\r\n            <td class=\"list-actions\">\r\n                <a [routerLink]=\"['../edit', proveedor.id]\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"toggleActive(proveedor, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye' : proveedor?.active, 'fa-eye-slash' : !proveedor?.active}\"></i></a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ },

/***/ 1099:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nuevo Proveedor</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula o R.U.C.</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group text-xs-right\">\n                        <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                            <span>Ingresar Proveedor</span>\n                            <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1100:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <div class=\"clearfix button-holder\">\n        <div class=\"float-xs-right \">\n            <button (click)=\"toggleActive(proveedor)\" [disabled]=\"toggleWaiting\">\n                {{ proveedor?.active ? 'Habilitado' : 'Deshabilitado' }} <i class=\"fa fa-fw\" [ngClass]=\"{'fa-eye': proveedor?.active, 'fa-eye-slash': !proveedor?.active}\"></i>\n            </button>\n            <button [routerLink]=\"['../../edit', proveedor?.id ]\" ><i class=\"fa fa-fw fa-pencil\"></i></button>\n        </div>\n        <h5>Proveedor: {{ proveedor?.nombre}}</h5>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div>\n                <strong>Nombre</strong>\n                <div class=\"form-control-static\">{{ proveedor?.nombre }}</div>\n            </div>\n            <div>\n                <strong>Creado</strong>\n                <div class=\"form-control-static\">{{ proveedor?.created | date }}</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productores_productores_component__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proveedores_proveedores_component__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodegas_bodegas_component__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__materiales_materiales_component__ = __webpack_require__(1048);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdministracionRoutingnModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: "", redirectTo: "personal", pathMatch: "full" },
    { path: "personal", component: __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__["a" /* PersonalComponent */], loadChildren: "app/administracion/personal/personal.module" },
    { path: "proveedores", component: __WEBPACK_IMPORTED_MODULE_4__proveedores_proveedores_component__["a" /* ProveedoresComponent */], loadChildren: "app/administracion/proveedores/proveedores.module" },
    { path: "productores", component: __WEBPACK_IMPORTED_MODULE_3__productores_productores_component__["a" /* ProductoresComponent */], loadChildren: "app/administracion/productores/productores.module" },
    { path: "materiales", component: __WEBPACK_IMPORTED_MODULE_6__materiales_materiales_component__["a" /* MaterialesComponent */], loadChildren: "app/administracion/materiales/materiales.module" },
    { path: "bodegas", component: __WEBPACK_IMPORTED_MODULE_5__bodegas_bodegas_component__["a" /* BodegasComponent */], loadChildren: "app/administracion/bodegas/bodegas.module" }
];
var AdministracionRoutingnModule = (function () {
    function AdministracionRoutingnModule() {
    }
    AdministracionRoutingnModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AdministracionRoutingnModule);
    return AdministracionRoutingnModule;
}());


/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bodegas_routing_module__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodegas_component__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bodega_lista_bodega_lista_component__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bodega_nueva_bodega_nueva_component__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bodega_ver_bodega_ver_component__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bodega_editar_bodega_editar_component__ = __webpack_require__(1015);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BodegasModule = (function () {
    function BodegasModule() {
    }
    BodegasModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__bodegas_routing_module__["a" /* BodegasRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__["a" /* DocumentSelectModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__bodegas_component__["a" /* BodegasComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bodega_lista_bodega_lista_component__["a" /* BodegaListaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__bodega_nueva_bodega_nueva_component__["a" /* BodegaNuevaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__bodega_ver_bodega_ver_component__["a" /* BodegaVerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bodega_editar_bodega_editar_component__["a" /* BodegaEditarComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BodegasModule);
    return BodegasModule;
}());
/* harmony default export */ exports["default"] = BodegasModule;


/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__materiales_routing_module__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__materiales_component__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ver_material_ver_component__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_nuevo_material_nuevo_component__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_lista_material_lista_component__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_editar_material_editar_component__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MaterialesModule = (function () {
    function MaterialesModule() {
    }
    MaterialesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__materiales_routing_module__["a" /* MaterialesRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__materiales_component__["a" /* MaterialesComponent */], __WEBPACK_IMPORTED_MODULE_7__material_lista_material_lista_component__["a" /* MaterialListaComponent */], __WEBPACK_IMPORTED_MODULE_6__material_nuevo_material_nuevo_component__["a" /* MaterialNuevoComponent */], __WEBPACK_IMPORTED_MODULE_5__material_ver_material_ver_component__["a" /* MaterialVerComponent */], __WEBPACK_IMPORTED_MODULE_8__material_editar_material_editar_component__["a" /* MaterialEditarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialesModule);
    return MaterialesModule;
}());
/* harmony default export */ exports["default"] = MaterialesModule;


/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_lista_personal_lista_component__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_routing_module__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_component__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_nuevo_personal_nuevo_component__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_editar_personal_editar_component__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_ver_personal_ver_component__ = __webpack_require__(1026);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PersonalModule = (function () {
    function PersonalModule() {
    }
    PersonalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__personal_routing_module__["a" /* PersonalRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__personal_component__["a" /* PersonalComponent */], __WEBPACK_IMPORTED_MODULE_3__personal_lista_personal_lista_component__["a" /* PersonalListaComponent */], __WEBPACK_IMPORTED_MODULE_6__personal_nuevo_personal_nuevo_component__["a" /* PersonalNuevoComponent */], __WEBPACK_IMPORTED_MODULE_7__personal_editar_personal_editar_component__["a" /* PersonalEditarComponent */], __WEBPACK_IMPORTED_MODULE_8__personal_ver_personal_ver_component__["a" /* PersonalVerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonalModule);
    return PersonalModule;
}());
/* harmony default export */ exports["default"] = PersonalModule;


/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productores_routing_module__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productores_component__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productor_lista_productor_lista_component__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productor_nuevo_productor_nuevo_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productor_editar_productor_editar_component__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productor_ver_productor_ver_component__ = __webpack_require__(1030);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductoresModule = (function () {
    function ProductoresModule() {
    }
    ProductoresModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__productores_routing_module__["a" /* ProductoresRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__productores_component__["a" /* ProductoresComponent */], __WEBPACK_IMPORTED_MODULE_5__productor_lista_productor_lista_component__["a" /* ProductorListaComponent */], __WEBPACK_IMPORTED_MODULE_6__productor_nuevo_productor_nuevo_component__["a" /* ProductorNuevoComponent */], __WEBPACK_IMPORTED_MODULE_7__productor_editar_productor_editar_component__["a" /* ProductorEditarComponent */], __WEBPACK_IMPORTED_MODULE_8__productor_ver_productor_ver_component__["a" /* ProductorVerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductoresModule);
    return ProductoresModule;
}());
/* harmony default export */ exports["default"] = ProductoresModule;


/***/ }

});
//# sourceMappingURL=0.map