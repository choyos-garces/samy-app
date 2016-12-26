webpackJsonp([5,16],{

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


/***/ }

});
//# sourceMappingURL=5.map