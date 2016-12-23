webpackJsonp([6,16],{

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guias_routing_module__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guias_component__ = __webpack_require__(1054);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferencia_lista_transferencia_lista_component__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transferencia_ver_transferencia_ver_component__ = __webpack_require__(1039);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GuiasModule = (function () {
    function GuiasModule() {
    }
    GuiasModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__guias_routing_module__["a" /* GuiasRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_documentSelect_documentSelect_module__["a" /* DocumentSelectModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__guias_component__["a" /* GuiasComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transferencia_lista_transferencia_lista_component__["a" /* TransferenciaListaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__transferencia_ver_transferencia_ver_component__["a" /* TransferenciaVerComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GuiasModule);
    return GuiasModule;
}());
/* harmony default export */ exports["default"] = GuiasModule;


/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentSelect_component__ = __webpack_require__(1012);
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

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_IDocumentMap__ = __webpack_require__(1013);
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
            template: __webpack_require__(1015),
            styles: [__webpack_require__(1014)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _c) || Object])
    ], DocumentSelectComponent);
    return DocumentSelectComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__FormController__["a" /* FormController */]));


/***/ },

/***/ 1013:
/***/ function(module, exports) {



/***/ },

/***/ 1014:
/***/ function(module, exports) {

module.exports = ".document-select {\r\n    position: relative;\r\n}\r\n\r\n.input-combo {\r\n    position: relative;\r\n}\r\n\r\n.input-combo span:after {\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    text-rendering: auto;\r\n    display: block;\r\n    position: absolute;\r\n}\r\n\r\n.input-combo span.chevron:after {\r\n    content: \"\\f078\";\r\n    bottom: 12px;\r\n    right: 12px;\r\n}\r\n\r\n.active .input-combo span.chevron:after {\r\n    content: \"\\f077\";\r\n}\r\n\r\n.input-combo span.search:after {\r\n    content: \"\\f002\";\r\n    background: #fff;\r\n    bottom: 7px;\r\n    left: 8px;\r\n}\r\n\r\n.input-combo .form-control[readonly] {\r\n    cursor: pointer;\r\n    background: #fff;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.input-combo .form-control:disabled {\r\n    background-color: #eceeef;\r\n}\r\n\r\n.active .input-combo .form-control {\r\n    border-radius: 0.25rem 0.25rem 0 0;\r\n}\r\n\r\n.options {\r\n    box-shadow: 0 1px 4px rgba(0,0,0,0.12);\r\n    position: absolute;\r\n    display: none;\r\n    margin-bottom: 0.75rem;\r\n    background-color: #fff;\r\n    border-radius: 0 0 0.25rem 0.25rem;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-top: none;\r\n    z-index: 333;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.active .options {\r\n    display: block;\r\n}\r\n\r\n.options .form-control {\r\n    padding-left: 28px;\r\n    background: #fff;\r\n}\r\n\r\n.options-scroller {\r\n    max-height: 168px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.option {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 4px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n\r\n.option-text{\r\n    flex-grow: 2;\r\n}\r\n\r\n.selected {\r\n    background: #f0f5f5;\r\n}\r\n\r\n.option:hover {\r\n    background: #0275d8;\r\n    color: #fff\r\n}\r\n\r\n.option-check {\r\n    text-align: center;\r\n    display: none;\r\n    color: #0275d8;\r\n}\r\n\r\n.option:hover .option-check {\r\n    color: #fff;\r\n}\r\n\r\n.option:hover .text-muted {\r\n    color: rgba(255,255,255,.8) !important;\r\n}\r\n\r\n.selected .option-check {\r\n    display: block;\r\n}"

/***/ },

/***/ 1015:
/***/ function(module, exports) {

module.exports = "<div class=\"document-select\" [ngClass]=\"{ active : active }\">\r\n    <div class=\"input-combo\">\r\n        <span class=\"chevron\">\r\n            <input type=\"text\" [value]=\"displayLabel(selected)\" class=\"form-control\" (click)=\"toggleActive()\"  [disabled]=\"disabled\" readonly/>\r\n        </span>\r\n    </div>\r\n    <div class=\"options\">\r\n        <form [formGroup]=\"form\" class=\"p-1\">\r\n            <div class=\"input-combo\">\r\n                <span class=\"search\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"search\" autocomplete=\"off\" placeholder=\"Busqueda\" />\r\n                </span>\r\n            </div>\r\n        </form>\r\n        <div class=\"options-scroller\">\r\n            <div class=\"option px-1\" *ngFor=\"let option of options\" (click)=\"updateSelected(option)\" [ngClass]=\"{'selected' : isOptionSelected(option)}\">\r\n                <div class=\"option-item option-text\">\r\n                    <div class=\"option-display\">\r\n                        {{ displayLabel(option) }}\r\n                    </div>\r\n                    <div class=\"options-aux\" *ngIf=\"displayAux(option)\">\r\n                        <small class=\"text-muted\">{{ displayAux(option) }}</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"option-item option-check\">\r\n                    <i class=\"fa fa-fw fa-circle-o\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 1038:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TransferenciaListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferenciaListaComponent = (function () {
    function TransferenciaListaComponent(_api) {
        this._api = _api;
    }
    TransferenciaListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._api.get("/inventario/guias").subscribe(function (data) {
            if ('guias' in data)
                _this.guias = data.guias;
        });
    };
    TransferenciaListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "app-guia-transferencia-lista",
            template: __webpack_require__(1104)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TransferenciaListaComponent);
    return TransferenciaListaComponent;
    var _a;
}());


/***/ },

/***/ 1039:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TransferenciaVerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransferenciaVerComponent = (function () {
    function TransferenciaVerComponent(route, _apiService, router) {
        this.route = route;
        this._apiService = _apiService;
        this.router = router;
        this.stack = [];
    }
    TransferenciaVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this._apiService.get("/inventario/guias/" + id).subscribe(function (response) {
                _this.guia = response;
                _this.diferenciaEntreMateriales(response);
            });
        });
    };
    TransferenciaVerComponent.prototype.diferenciaEntreMateriales = function (guia) {
        var materialesOrigen = guia.movimientoOrigen.materiales;
        var materialesDestino = (guia.movimientoDestino !== null) ? guia.movimientoDestino.materiales : null;
        var stack;
        if (materialesDestino == null) {
            for (var i = 0; i < materialesOrigen.length; i++) {
                stack = {
                    material: materialesOrigen[i].material,
                    origen: materialesOrigen[i].cantidad,
                    destino: 0
                };
                this.stack.push(stack);
            }
        }
        else {
            for (var i = 0; i < materialesOrigen.length; i++) {
                var m = materialesOrigen[i].material;
                var mm = this.findMaterialById(m.id, materialesDestino);
                stack = {
                    material: materialesOrigen[i].material,
                    origen: materialesOrigen[i].cantidad,
                    destino: mm !== null ? mm.cantidad : 0
                };
                this.stack.push(stack);
            }
        }
    };
    TransferenciaVerComponent.prototype.findMaterialById = function (id, materiales) {
        var results = materiales.filter(function (item, key) {
            console.log(key);
            return item.material.id == id;
        });
        if (results.length == 1)
            return results[0];
        return null;
    };
    TransferenciaVerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "app-guia-transferencia-ver",
            template: __webpack_require__(1105)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], TransferenciaVerComponent);
    return TransferenciaVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GuiasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuiasComponent = (function () {
    function GuiasComponent(headerService) {
        this.headerService = headerService;
    }
    GuiasComponent.prototype.ngOnInit = function () {
        var base_uri = "inventario/guias/";
        this.headerService.setHeader("inventario", "Guias y Documentos", [
            { uri: base_uri + "list", icono: "fa-building-o", title: 'Transferencuas' },
            { uri: base_uri + "remision", icono: "fa-truck", title: 'Guias de Remision' }
        ]);
    };
    GuiasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-guias-transferencia',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], GuiasComponent);
    return GuiasComponent;
    var _a;
}());


/***/ },

/***/ 1064:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferencia_lista_transferencia_lista_component__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferencia_ver_transferencia_ver_component__ = __webpack_require__(1039);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GuiasRoutingModule; });
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
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__transferencia_lista_transferencia_lista_component__["a" /* TransferenciaListaComponent */] },
    { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_3__transferencia_ver_transferencia_ver_component__["a" /* TransferenciaVerComponent */] }
];
var GuiasRoutingModule = (function () {
    function GuiasRoutingModule() {
    }
    GuiasRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], GuiasRoutingModule);
    return GuiasRoutingModule;
}());


/***/ },

/***/ 1104:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Estados de Transferencia</h5>\r\n</div>\r\n<table class=\"table table-bordered table-hover text-sm-center\">\r\n    <thead>\r\n        <tr>\r\n            <th rowspan=\"2\" width=\"1\">#</th>\r\n            <th rowspan=\"2\">Numero de Guia</th>\r\n            <th colspan=\"2\" class=\"thead-expand-title\">Origen</th>\r\n            <th colspan=\"2\" class=\"thead-expand-title\">Destino</th>\r\n            <th rowspan=\"2\">Estado</th>\r\n            <th rowspan=\"2\">Emitida</th>\r\n            <th rowspan=\"2\">Culminada</th>\r\n        </tr>\r\n        <tr class=\"thead-expand\">\r\n            <th>Codigo</th>\r\n            <th>Nombre</th>\r\n            <th>Codigo</th>\r\n            <th>Nombre</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let guia of guias; let i = index\">\r\n            <td>{{ i + 1 }}</td>\r\n            <td><code><a [routerLink]=\"['../view', guia.numeroGuia ]\">{{ guia.numeroGuia }}</a></code></td>\r\n            <td><code>{{ guia.movimientoOrigen.bodega.codigo }}</code></td>\r\n            <td>{{ guia.movimientoOrigen.bodega.nombre }}</td>\r\n            <td><code>{{ guia.movimientoOrigen.detalle.bodega.codigo }}</code></td>\r\n            <td>{{ guia.movimientoOrigen.detalle.bodega.nombre }}</td>\r\n            <td><i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-warning' : guia.status == 'error', 'fa-check' : guia.status == 'done', 'fa-clock-o' : guia.status == 'waiting'}\"></i></td>\r\n            <td>{{ guia.created | date }}</td>\r\n            <td>{{ guia.updated | date }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },

/***/ 1105:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <div class=\"clearfix button-holder\">\r\n        <div class=\"view-action\">\r\n            <button (click)=\"toggleActive(bodega)\" [disabled]=\"toggleWaiting\">\r\n                Notificar Destino<i class=\"fa fa-fw fa-bell-o\"></i>\r\n            </button>\r\n            <button><i class=\"fa fa-fw fa-flag-o\"></i></button>\r\n        </div>\r\n        <h5>\r\n            Guia de Transferencia\r\n            <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-warning' : guia?.status == 'error', 'fa-check' : guia?.status == 'done', 'fa-clock-o' : guia?.status == 'waiting'}\"></i>\r\n        </h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5>Destino</h5>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Numero de Guia</strong>\r\n                            <div class=\"view-display-static\">\r\n                                <code>{{ guia?.numeroGuia }}</code>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Estado</strong>\r\n                            <div class=\"view-display-static\">\r\n                                <span *ngIf=\"guia?.status == 'waiting'\">Esperando</span>\r\n                                <span *ngIf=\"guia?.status == 'done'\">Terminada</span>\r\n                                <span *ngIf=\"guia?.status == 'error'\">Incompleta</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5>Origen</h5>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Bodega</strong>\r\n                            <div class=\"view-display-static\">\r\n                                {{ guia?.movimientoOrigen.bodega.nombre }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Fecha</strong>\r\n                            <div class=\"view-display-static\">\r\n                                {{ guia?.movimientoOrigen.created | date }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5>Destino</h5>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Bodega</strong>\r\n                            <div class=\"view-display-static\">\r\n                                {{ guia?.movimientoOrigen.detalle.bodega.nombre }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Fecha</strong>\r\n                            <div class=\"view-display-static\">\r\n                                {{ guia?.movimientoDestino?.created | date }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<table class=\"table table-bordered toble-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th rowspan=\"2\" width=\"1\">#</th>\r\n            <th colspan=\"5\" class=\"thead-expand-title\">Material</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\">Origen</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\">Destino</th>\r\n            <th class=\"text-sm-center\" rowspan=\"2\"></th>\r\n        </tr>\r\n        <tr class=\"thead-expand\">\r\n            <th>Codigo</th>\r\n            <th>Tipo</th>\r\n            <th>Categoria</th>\r\n            <th>Nombre</th>\r\n            <th>Descripcion</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of stack; let i = index\">\r\n            <td>{{ i + 1 }}</td>\r\n            <td class=\"text-sm-center\"><code>{{ item.material.codigo }}</code></td>\r\n            <td class=\"text-sm-center\">{{ item.material.tipoMaterial.nombre }}</td>\r\n            <td class=\"text-sm-center\">{{ item.material.categoria.nombre  }}</td>\r\n            <td class=\"text-sm-center\">{{ item.material.nombre }}</td>\r\n            <td>{{ item.material.descripcion }}</td>\r\n            <td class=\"text-sm-right\">{{ item.origen }}</td>\r\n            <td class=\"text-sm-right\">{{ item.destino }}</td>\r\n            <td  class=\"text-sm-right\" [ngClass]=\"{ 'text-danger' : (item.origen - item.destino) != 0, 'text-success' : (item.origen - item.destino) == 0}\">\r\n                {{ item.destino - item.origen }}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }

});
//# sourceMappingURL=6.map