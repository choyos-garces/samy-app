webpackJsonp([8,16],{

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productores_routing_module__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productores_component__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productor_lista_productor_lista_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productor_nuevo_productor_nuevo_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productor_editar_productor_editar_component__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productor_ver_productor_ver_component__ = __webpack_require__(1031);
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


/***/ },

/***/ 1028:
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
            template: __webpack_require__(1094)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProductorEditarComponent);
    return ProductorEditarComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1029:
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
            template: __webpack_require__(1095),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ProductorListaComponent);
    return ProductorListaComponent;
    var _a;
}());


/***/ },

/***/ 1030:
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
            template: __webpack_require__(1096)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ProductorNuevoComponent);
    return ProductorNuevoComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1031:
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
            template: __webpack_require__(1097),
            styles: [__webpack_require__(1076)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], ProductorVerComponent);
    return ProductorVerComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1051:
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

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productor_lista_productor_lista_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productor_nuevo_productor_nuevo_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productor_ver_productor_ver_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productor_editar_productor_editar_component__ = __webpack_require__(1028);
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

/***/ 1076:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1094:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"clearfix\">\n            <div class=\"float-xs-right \">\n                <button [routerLink]=\"['../../view', productor?.id ]\"><i class=\"fa fa-fw fa-file-text-o\"></i></button>\n            </div>\n            <h5>Editar Productor</h5>\n        </div>\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control form-control-danger\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"recurso-active\">\n                            <input type=\"checkbox\" id=\"recurso-active\" class=\"form-check-input\" formControlName=\"active\"/>\n                            Recurso Habilitado\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-xs-right\">\n                <div class=\"btn-group\">\n                    <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                        <span>Ingresar Bodega</span>\n                        <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                    </button>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1095:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <h5>Lista del Personal</h5>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th>Nombre</th>\r\n            <th>RUC</th>\r\n            <th>Correo</th>\r\n            <th class=\"text-xs-center\">Habilitado</th>\r\n            <th class=\"text-xs-center\">Creado</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let productor of productores; let i = index\">\r\n            <td><a [routerLink]=\"['../view', productor.id]\">{{ productor.nombre + \" \" + productor.apellido }}</a></td>\r\n            <td>{{ productor.ruc }}</td>\r\n            <td>{{ productor.correo }}</td>\r\n            <td class=\"text-xs-center\">{{ productor.active ? \"Si\" : \"No\" }}</td>\r\n            <td class=\"text-xs-center\">{{ productor.created | date }}</td>\r\n            <td class=\"list-actions\">\r\n                <a [routerLink]=\"['../edit', productor.id]\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"toggleActive(productor, i)\"><i class=\"fa\" [ngClass]=\"{'fa-eye' : productor?.active, 'fa-eye-slash' : !productor?.active}\"></i></a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ },

/***/ 1096:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n        <fieldset [disabled]=\"isFormDisabled()\">\n            <h5>Nuevo Productor</h5>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('nombre')}\">\n                        <label class=\"form-control-label\" for=\"nombre\">Nombre</label>\n                        <input type=\"text\" id=\"nombre\" class=\"form-control\" formControlName=\"nombre\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('apellido')}\">\n                        <label class=\"form-control-label\" for=\"apellido\">Apellido</label>\n                        <input type=\"text\" id=\"apellido\" class=\"form-control\" formControlName=\"apellido\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('correo')}\">\n                        <label class=\"form-control-label\" for=\"correo\">Correo Electronico</label>\n                        <input type=\"email\" id=\"correo\" class=\"form-control\" formControlName=\"correo\" autocomplete=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('ruc')}\">\n                        <label class=\"form-control-label\" for=\"ruc\">Cedula</label>\n                        <input type=\"tel\" id=\"ruc\" class=\"form-control\" formControlName=\"ruc\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('ruc') }}</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger' : isControlInvalid('telefono')}\">\n                        <label class=\"form-control-label\" for=\"telefono\">Telefono</label>\n                        <input type=\"tel\" id=\"telefono\" class=\"form-control\" formControlName=\"telefono\" autocomplete=\"off\"/>\n                        <div class=\"form-control-feedback\" >{{ getFeedback('telefono') }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"form-group text-xs-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" (click)=\"submit()\" [disabled]=\"isSubmitDisabled()\">\n                                <span>Ingresar Personal</span>\n                                <i class=\"fa fa-fw\" [ngClass]=\"{ 'fa-spin fa-circle-o-notch' : waiting, 'fa-check' : !waiting }\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>"

/***/ },

/***/ 1097:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\n    <p>\n      personal-ver works!\n    </p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=8.map