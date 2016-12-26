webpackJsonp([3,16],{

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movimientos_routing_module__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movimientos_component__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movimiento_lista_movimiento_lista_component__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movimiento_nuevo_movimiento_nuevo_component__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movimiento_view_movimiento_view_component__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__movimiento_nuevo_movimiento_item_movimiento_item_component__ = __webpack_require__(1066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__movimiento_nuevo_movimiento_detalle_movimiento_detalle_component__ = __webpack_require__(1065);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MovimientosModule = (function () {
    function MovimientosModule() {
    }
    MovimientosModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__movimientos_routing_module__["a" /* MovimientosRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__["a" /* DocumentSelectModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__movimientos_component__["a" /* MovimientosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movimiento_view_movimiento_view_component__["a" /* MovimientoViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__movimiento_nuevo_movimiento_nuevo_component__["a" /* MovimientoNuevoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__movimiento_lista_movimiento_lista_component__["a" /* MovimientoListaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__movimiento_nuevo_movimiento_item_movimiento_item_component__["a" /* MovimientoItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__movimiento_nuevo_movimiento_detalle_movimiento_detalle_component__["a" /* MovimientoDetalleComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MovimientosModule);
    return MovimientosModule;
}());
/* harmony default export */ exports["default"] = MovimientosModule;


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

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientoListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovimientoListaComponent = (function () {
    function MovimientoListaComponent(_apiService) {
        this._apiService = _apiService;
    }
    MovimientoListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.get("/inventario/movimientos").subscribe(function (data) {
            if ('movimientos' in data)
                _this.movimientos = data.movimientos;
            _this.offset = 0;
        });
    };
    MovimientoListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-movimiento-lista',
            template: __webpack_require__(1106)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], MovimientoListaComponent);
    return MovimientoListaComponent;
    var _a;
}());


/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_form_controls_app_validators__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientoNuevoComponent; });
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







var MovimientoNuevoComponent = (function (_super) {
    __extends(MovimientoNuevoComponent, _super);
    function MovimientoNuevoComponent(_api, router, route, formBuilder) {
        _super.call(this, formBuilder);
        this._api = _api;
        this.router = router;
        this.route = route;
        this.bodegasDisponibles = [];
        this.materialesDisponibles = [];
    }
    MovimientoNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch resources form DB
        var filters = { active: true };
        this.subscribeResource('bodegas', this._api.get("/administracion/bodegas?" + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true);
        this.subscribeResource('materiales', this._api.get('/administracion/materiales?' + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true, null, function (response) {
            //Valor inicial de los materiales disponibles
            _this.materialesDisponibles = response.materiales;
        });
        this.subscribeResource('proveedores', this._api.get('/administracion/proveedores?' + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true);
        this.subscribeResource('productores', this._api.get('/administracion/productores?' + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true);
        filters = { 'seccion.id': "_TIPO_MATERIAL" };
        this.subscribeResource("recursos", this._api.get("/panel/recursos?" + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true, "tiposMateriales");
        filters = { 'seccion.id': "_MOVIMIENTOS" };
        this.subscribeResource("recursos", this._api.get("/panel/recursos?" + __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].queryParameters(filters)), true, "acciones");
        // Set the Form Controllers
        this.addControl('accion', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('bodega', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('detalle', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('materiales', [], __WEBPACK_IMPORTED_MODULE_5__shared_components_form_controls_app_validators__["a" /* AppValidators */].collectionRequired);
        this.addControl('observaciones', null);
        // Sets behavior for Controllers
        this.onControlChange('accion', function (id) {
            _this.setControlValue('detalle', null);
            var results = __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].searchCollectionBy('id', _this.acciones, id);
            if (results.length == 1) {
                var result = results[0];
                _this.accion = (result.detalle == '1');
                _this.categorias = result.categorias;
            }
            else {
                _this.categorias = [];
            }
        });
        this.onControlChange('bodega', function (id) {
            _this.bodegasDisponibles = __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].searchCollectionNotEquals('id', _this.bodegas, id);
        });
        this.onControlChange('materiales', function (movimeintoItems) {
            var results = _this.materiales.filter(function (material) {
                var flag = true;
                for (var i = 0; i < movimeintoItems.length; i++) {
                    if (material.id == movimeintoItems[i].material)
                        flag = false;
                }
                return flag;
            });
            _this.materialesDisponibles = results.slice();
        });
    };
    //@Output: app-detalle.
    MovimientoNuevoComponent.prototype.updateDetalle = function (detalle) {
        this.setControlValue('detalle', detalle);
    };
    //@Output: app-movimiento-items.
    MovimientoNuevoComponent.prototype.updateMovimientoItems = function (movimientoItem) {
        var movimientoMateriales = this.getControlValue('materiales');
        movimientoMateriales = movimientoMateriales.concat([
            movimientoItem
        ]);
        this.setControlValue('materiales', movimientoMateriales);
    };
    //@Template: Remueve el item de la lista de MovimientoItems y updetea el controller.
    MovimientoNuevoComponent.prototype.removerMovimientoItem = function (index) {
        var movimientoMateriales = this.getControlValue('materiales');
        movimientoMateriales = movimientoMateriales.slice(0, index).concat(movimientoMateriales.slice(index + 1));
        this.setControlValue('materiales', movimientoMateriales);
    };
    //@Template: Da el numero de las selecciones de materiales.
    MovimientoNuevoComponent.prototype.totalSeleccion = function () {
        var movimientoMateriales = (this.getControlValue('materiales') == null) ? [] : this.getControlValue('materiales');
        return movimientoMateriales.length;
    };
    //@Template: MovimientoMateriales solo tiene el :id de los materiales. Esto busca en la lista de materiales
    //           para darle el nombre.
    MovimientoNuevoComponent.prototype.getMaterialById = function (id) {
        var result = this.materiales.filter(function (material) { return material.id == id; });
        return result.length == 1 ? result[0] : null;
    };
    //@Template: Submit.
    MovimientoNuevoComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.toggleForm();
            var values = this.form.value;
            values.accion = this.accion;
            this._api.post('/inventario/movimientos', values).subscribe(function (response) {
                _this.toggleForm();
                _this.router.navigate(['../view', response.id], { relativeTo: _this.route });
            }, function (error) {
                _this.toggleForm();
                if ('errors' in error) {
                    _this.handleFormErrors(error.errors);
                }
            });
        }
    };
    MovimientoNuevoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-movimiento-nuevo',
            template: __webpack_require__(1109),
            styles: [__webpack_require__(1077)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], MovimientoNuevoComponent);
    return MovimientoNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1042:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientoViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovimientoViewComponent = (function () {
    function MovimientoViewComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
    }
    MovimientoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/inventario/movimientos/" + id).subscribe(function (response) { _this.movimiento = response; });
        });
    };
    MovimientoViewComponent.prototype.existente = function (item) {
        if (this.movimiento.accion) {
            return item.cantidad + item.existente;
        }
        else {
            return item.existente - item.cantidad;
        }
    };
    MovimientoViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-inventario-movimeinto-ver',
            template: __webpack_require__(1110)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], MovimientoViewComponent);
    return MovimientoViewComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovimientosComponent = (function () {
    function MovimientosComponent(headerService) {
        this.headerService = headerService;
    }
    MovimientosComponent.prototype.ngOnInit = function () {
        var base_uri = "inventario/movimientos/";
        this.headerService.setHeader("inventario", "Ingresos y Egresos", [
            { uri: base_uri + "list", icono: "fa-list" },
            { uri: base_uri + "ingreso", icono: "fa-plus" },
            { uri: base_uri + "egreso", icono: "fa-minus" }
        ]);
    };
    MovimientosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-movimientos',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], MovimientosComponent);
    return MovimientosComponent;
    var _a;
}());


/***/ },

/***/ 1065:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_FormController__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientoDetalleComponent; });
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



var MovimientoDetalleComponent = (function (_super) {
    __extends(MovimientoDetalleComponent, _super);
    function MovimientoDetalleComponent(formBuilder) {
        _super.call(this, formBuilder);
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.isNotReady = true;
    }
    MovimientoDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('documento', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('referencia', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('adicional', null);
        this.onControlChange('documento', function (value) {
            _this.setControlValue('referencia', null);
            if (value == 'Saldo Inicial') {
                _this.setControlValue('referencia', true);
            }
        });
        this.form.valueChanges.subscribe(function (value) {
            value = (_this.form.valid) ? value : null;
            _this.output.emit(value);
        });
    };
    MovimientoDetalleComponent.prototype.ngOnChanges = function (changes) {
        if ('accion' in changes) {
            this.resetForm();
        }
        if (typeof this.accion != 'undefined') {
            this.isNotReady = false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(), 
        __metadata('design:type', Object)
    ], MovimientoDetalleComponent.prototype, "output", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoDetalleComponent.prototype, "categorias", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], MovimientoDetalleComponent.prototype, "accion", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoDetalleComponent.prototype, "proveedores", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoDetalleComponent.prototype, "productores", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoDetalleComponent.prototype, "bodegas", void 0);
    MovimientoDetalleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-movimiento-detalle',
            template: __webpack_require__(1107)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object])
    ], MovimientoDetalleComponent);
    return MovimientoDetalleComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1066:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_FormController__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientoItemComponent; });
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



var MovimientoItemComponent = (function (_super) {
    __extends(MovimientoItemComponent, _super);
    function MovimientoItemComponent(formBuilder) {
        _super.call(this, formBuilder);
        this.tiposMateriales = [];
        this.materiales = [];
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    MovimientoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addControl('tipoMaterial', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('categoria', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('material', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.addControl('cantidad', null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.onControlChange('tipoMaterial', function (value) {
            var results = _this.tiposMateriales.filter(function (tipoMaterial) { return tipoMaterial.id == value; });
            _this.categorias = (results.length == 1) ? results[0].categorias.slice() : [];
        });
        this.onControlChange('categoria', function (value) {
            var results = _this.materiales.filter(function (material) { return material.categoria.id == value; });
            _this.opcionesMaterial = results.slice();
        });
    };
    MovimientoItemComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.toggleForm();
            this.output.emit({
                material: this.getControlValue('material'),
                cantidad: this.getControlValue('cantidad')
            });
            this.resetForm();
            this.toggleForm();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoItemComponent.prototype, "tiposMateriales", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], MovimientoItemComponent.prototype, "materiales", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(), 
        __metadata('design:type', Object)
    ], MovimientoItemComponent.prototype, "output", void 0);
    MovimientoItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-movimiento-item',
            template: __webpack_require__(1108)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object])
    ], MovimientoItemComponent);
    return MovimientoItemComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1067:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movimiento_lista_movimiento_lista_component__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movimiento_nuevo_movimiento_nuevo_component__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movimiento_view_movimiento_view_component__ = __webpack_require__(1042);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovimientosRoutingModule; });
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
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__movimiento_lista_movimiento_lista_component__["a" /* MovimientoListaComponent */] },
    { path: "ingreso", component: __WEBPACK_IMPORTED_MODULE_3__movimiento_nuevo_movimiento_nuevo_component__["a" /* MovimientoNuevoComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_4__movimiento_view_movimiento_view_component__["a" /* MovimientoViewComponent */] }
];
var MovimientosRoutingModule = (function () {
    function MovimientosRoutingModule() {
    }
    MovimientosRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MovimientosRoutingModule);
    return MovimientosRoutingModule;
}());


/***/ },

/***/ 1070:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppValidators; });
var AppValidators = (function () {
    function AppValidators() {
    }
    AppValidators.collectionRequired = function (control) {
        return (control.value.length !== 0) ? null : {
            collectionRequired: {
                valid: false
            }
        };
    };
    AppValidators.notNullorEmpty = function (control) {
        if (control.value == null)
            return {
                notNullorEmpty: "Este item no puede quedar vacio."
            };
        if (control.value == "")
            return {
                notNullorEmpty: "Este item no puede quedar vacio."
            };
        return null;
    };
    return AppValidators;
}());


/***/ },

/***/ 1077:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1106:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Lista de ingresos y egresos de Inventario</h5>\r\n</div>\r\n<table class=\"table table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th width=\"1\">#</th>\r\n            <th>Tipo</th>\r\n            <th width=\"*\">Motivo</th>\r\n            <th width=\"*\">Bodega</th>\r\n            <th class=\"text-sm-center\">Materiales</th>\r\n            <th>Usuario</th>\r\n            <th class=\"text-sm-center\">Fecha</th>\r\n            <th class=\"text-sm-right\"></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let movimiento of movimientos; let i = index\">\r\n            <td>{{ i + offset + 1}}</td>\r\n            <td>\r\n                <a [routerLink]=\"['../view', movimiento.id]\">{{ movimiento.accion ? \"Ingreso\" : \"Egreso \"}}</a>\r\n            </td>\r\n            <td>{{ movimiento.detalle.documento }}</td>\r\n            <td>{{ movimiento.bodega.nombre}}</td>\r\n            <td class=\"text-sm-center\">{{ movimiento.materiales.length }}</td>\r\n            <td>{{ movimiento.createdBy.username }}</td>\r\n            <td class=\"text-sm-center\">{{ movimiento.created | date }}</td>\r\n            <td class=\"list-actions text-sm-right\">\r\n                <a href=\"#\"><i class=\"fa fa-fw fa-bell-o\" title=\"Re-notificar\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-fw fa-flag-o\" title=\"Reportar un error\"></i></a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ },

/***/ 1107:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <fieldset [disabled]=\"isNotReady\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"documento\">{{ accion ? 'Origen' : 'Destino' }}</label>\r\n                    <select class=\"form-control\" id=\"documento\" formControlName=\"documento\">\r\n                        <option *ngFor=\"let documento of categorias\" [value]=\"documento.nombre\">{{ documento.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\" *ngIf=\"getControlValue('documento') == 'Bodega'\">\r\n                    <label class=\"form-control-label\" for=\"bodegas\">Bodega</label>\r\n                    <select class=\"form-control\" id=\"bodegas\" formControlName=\"referencia\">\r\n                        <option *ngFor=\"let bodega of bodegas\" [value]=\"bodega.id\">{{ bodega.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"getControlValue('documento') == 'Proveedor'\">\r\n                    <label class=\"form-control-label\" for=\"proveedores\">Proveedor</label>\r\n                    <select class=\"form-control\" id=\"proveedores\" formControlName=\"referencia\">\r\n                        <option *ngFor=\"let proveedor of proveedores\" [value]=\"proveedor.id\">{{ proveedor.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"getControlValue('documento') == 'Productor'\">\r\n                    <label class=\"form-control-label\" for=\"productores\">Productor</label>\r\n                    <select class=\"form-control\" id=\"productores\" formControlName=\"referencia\">\r\n                        <option *ngFor=\"let productor of productores\" [value]=\"productor.id\">{{ productor.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\"  *ngIf=\"!accion && getControlValue('documento') == 'Productor'\">\r\n                    <label class=\"form-control-label\" for=\"info\">Orden de Corte</label>\r\n                    <input type=\"tel\" id=\"info\" class=\"form-control\" formControlName=\"adicional\" />\r\n                </div>\r\n                <div class=\"form-group\"  *ngIf=\"accion && getControlValue('documento') == 'Proveedor'\">\r\n                    <label class=\"form-control-label\" for=\"info\">Factura</label>\r\n                    <input type=\"tel\" id=\"info\" class=\"form-control\" formControlName=\"adicional\" />\r\n                </div>\r\n                <div class=\"form-group\"  *ngIf=\"accion && getControlValue('documento') == 'Bodega'\">\r\n                    <label class=\"form-control-label\" for=\"info\">Numero de Guia</label>\r\n                    <input type=\"tel\" id=\"info\" class=\"form-control\" formControlName=\"adicional\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },

/***/ 1108:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <fieldset [disabled]=\"isFormDisabled()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-6 col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"tipo-material\">Tipo Material</label>\r\n                    <select id=\"tipo-material\" class=\"form-control\" formControlName=\"tipoMaterial\">\r\n                        <option *ngFor=\"let tipoMaterial of tiposMateriales\" [value]=\"tipoMaterial.id\">{{ tipoMaterial.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6 col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"categoria\">Categoria</label>\r\n                    <select id=\"categoria\" class=\"form-control\" formControlName=\"categoria\">\r\n                        <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{ categoria.nombre }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6 col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"material\">Material</label>\r\n                    <select id=\"material\" class=\"form-control\" formControlName=\"material\">\r\n                        <option *ngFor=\"let material of opcionesMaterial\" [value]=\"material.id\">{{ material.nombre }} (#{{ material.codigo }})</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6 col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"cantidad\">Cantidad</label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"cantidad\" formControlName=\"cantidad\" type=\"number\" class=\"form-control\" />\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-secondary\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\"><i class=\"fa fa-fw fa-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },

/***/ 1109:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <form [formGroup]=\"form\">\r\n        <h5>Ingreso de Inventario</h5>\r\n        <fieldset [disabled]=\"isFormDisabled()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('accion')}\">\r\n                        <label class=\"form-control-label\" for=\"accion\">Accion</label>\r\n                        <select id=\"accion\" class=\"form-control\" formControlName=\"accion\">\r\n                            <option *ngFor=\"let accion of acciones\" [value]=\"accion.id\">{{ accion.nombre }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('bodega')}\">\r\n                        <label class=\"form-control-label\" for=\"bodega\">Bodega</label>\r\n                        <select class=\"form-control\" id=\"bodega\" formControlName=\"bodega\">\r\n                            <option *ngFor=\"let bodega of bodegas\" [value]=\"bodega.id\">{{ bodega.nombre }}</option>\r\n                        </select>\r\n                        <small class=\"form-control-feedback\">{{ getFeedback('bodega') }}</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <strong>Datos del Movimiento</strong>\r\n                    <app-movimiento-detalle\r\n                            [categorias]=\"categorias\"\r\n                            [accion]=\"accion\"\r\n                            [bodegas]=\"bodegasDisponibles\"\r\n                            [proveedores]= \"proveedores\"\r\n                            [productores]= \"productores\"\r\n                            (output)=\"updateDetalle($event)\"\r\n                    ></app-movimiento-detalle>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"getError('detalle', 'feedback')\">\r\n                        <pre>{{ getError('detalle', 'feedback') | json }}</pre>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <strong>Materiales</strong>\r\n                    <app-movimiento-item\r\n                            [tiposMateriales]= \"tiposMateriales\"\r\n                            [materiales]= \"materialesDisponibles\"\r\n                            (output)=\"updateMovimientoItems($event)\"\r\n                    ></app-movimiento-item>\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"getError('materiales', 'feedback')\">\r\n                    <pre>{{ getError('materiales', 'feedback') | json }}</pre>\r\n                </div>\r\n                <table class=\"table table-hover table-bordered\">\r\n                    <thead class=\"thead-condensed\">\r\n                        <tr>\r\n                            <th width=\"1\" rowspan=\"2\">#</th>\r\n                            <th class=\"thead-expand-title\" colspan=\"5\">Material</th>\r\n                            <th class=\"text-sm-center\" rowspan=\"2\">Cantidad</th>\r\n                            <th width=\"1\" class=\"text-sm-right\" rowspan=\"2\">\r\n                                <button class=\"form-control-sm\"><i class=\"fa fa-fw fa-trash\"></i></button>\r\n                            </th>\r\n                        </tr>\r\n                        <tr class=\"thead-expand\">\r\n                            <th>Codigo</th>\r\n                            <th>Tipo</th>\r\n                            <th>Categoria</th>\r\n                            <th>Nombre</th>\r\n                            <th>Descripcion</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let material of getControlValue('materiales'); let i = index\">\r\n                            <td >{{i+1}}</td>\r\n                            <td class=\"text-sm-center\"><code>#{{ getMaterialById(material.material).codigo }}</code></td>\r\n                            <td class=\"text-sm-center\">{{ getMaterialById(material.material).tipoMaterial.nombre }}</td>\r\n                            <td class=\"text-sm-center\">{{ getMaterialById(material.material).categoria.nombre }}</td>\r\n                            <td class=\"text-sm-center\">{{ getMaterialById(material.material).nombre }}</td>\r\n                            <td class=\"text-sm-left\">{{ getMaterialById(material.material).descripcion }}</td>\r\n                            <td class=\"text-sm-right\">{{ material.cantidad }}</td>\r\n                            <td class=\"text-sm-right\"><button class=\"form-control-sm\" (click)=\"removerMovimientoItem(i)\"><i class=\"fa fa-fw fa-close\"></i></button></td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot class=\"thead-condensed\">\r\n                        <tr>\r\n                            <th colspan=\"7\" class=\"text-muted text-sm-right\">Total de Ingresos</th>\r\n                            <th class=\"text-muted text-sm-center\">{{ totalSeleccion() }}</th>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"observaciones\" class=\"form-control-label\">Observaciones</label>\r\n                        <textarea id=\"observaciones\" class=\"form-control control-y-2\" formControlName=\"observaciones\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group text-xs-right\">\r\n                <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\r\n                    <span>Ingresar Inventario</span>\r\n                    <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\r\n                </button>\r\n            </div>\r\n        </fieldset>\r\n    </form>\r\n</div>"

/***/ },

/***/ 1110:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <div class=\"clearfix button-holder\">\r\n        <div class=\"view-action\">\r\n            <button (click)=\"toggleActive(bodega)\" [disabled]=\"toggleWaiting\">\r\n                Volver a Notificar <i class=\"fa fa-fw fa-bell-o\"></i>\r\n            </button>\r\n            <button [routerLink]=\"['../../edit', bodega?.id ]\" ><i class=\"fa fa-fw fa-flag-o\"></i></button>\r\n        </div>\r\n        <h5>Datos de Movimiento:</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Accion</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.accion ? \"Ingreso de Material\" : \"Egreso de Material\" }}</div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Bodega</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.bodega.nombre }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>{{ movimiento?.accion ? \"Origen\" : \"Destino\" }}</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.documento }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"movimiento?.detalle.documento == 'Saldo Inicial'\">\r\n                            <strong>Autorizado Por</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.adicional }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"!movimiento?.accion && movimiento?.detalle.documento == 'Productor'\">\r\n                            <strong>Orden de Corte</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.adicional }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"movimiento?.accion && movimiento?.detalle.documento == 'Productor'\">\r\n                            <strong>Autorizado por</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.adicional }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"movimiento?.accion && movimiento?.detalle.documento == 'Proveedor'\">\r\n                            <strong>Factura</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.adicional }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"!movimiento?.accion && movimiento?.detalle.documento == 'Proveedor'\">\r\n                            <strong>Autorizado Por</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.detalle.adicional }}</div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\" *ngIf=\"movimiento?.detalle.documento == 'Bodega'\">\r\n                            <strong>Numero de Guia</strong>\r\n                            <div class=\"view-display-static\">\r\n                                <code>\r\n                                    <a [routerLink]=\"['../../../guias/view', movimiento?.detalle.adicional ]\">\r\n                                        {{ movimiento?.detalle.adicional }}\r\n                                    </a>\r\n                                </code>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Fecha</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.created | date }}</div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Responsable</strong>\r\n                            <div class=\"view-display-static\">{{ movimiento?.createdBy?.username }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<table class=\"table table-bordered table-hover\">\r\n    <thead class=\"thead-condensed\">\r\n        <tr>\r\n            <th width=\"1\" rowspan=\"2\">#</th>\r\n            <th colspan=\"5\" class=\"thead-expand-title\">Material</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\">Cantidad</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\">Saldo Previo</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\">Total</th>\r\n        </tr>\r\n        <tr class=\"thead-expand\">\r\n            <th>Codigo</th>\r\n            <th>Tipo</th>\r\n            <th>Categoria</th>\r\n            <th>Nombre</th>\r\n            <th>Descripcion</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of movimiento?.materiales; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td class=\"text-sm-center\"><code>#{{ item.material.codigo}}</code></td>\r\n            <td class=\"text-sm-center\">{{ item.material.tipoMaterial.nombre }}</td>\r\n            <td class=\"text-sm-center\">{{ item.material.categoria.nombre }}</td>\r\n            <td class=\"text-sm-center\">{{ item.material.nombre}}</td>\r\n            <td>{{ item.material.descripcion }}</td>\r\n            <td class=\"text-sm-right\">{{ item.cantidad }}</td>\r\n            <td class=\"text-sm-right\">{{ item.existente }}</td>\r\n            <td class=\"text-sm-right\">{{ existente(item) }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }

});
//# sourceMappingURL=3.map