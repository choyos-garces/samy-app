webpackJsonp([12,16],{

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historial_routing_module__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historial_component__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historial_lista_historial_lista_component__ = __webpack_require__(1040);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistorialModule = (function () {
    function HistorialModule() {
    }
    HistorialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__historial_routing_module__["a" /* HistorialRoutingModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__historial_component__["a" /* HistorialComponent */],
                __WEBPACK_IMPORTED_MODULE_5__historial_lista_historial_lista_component__["a" /* HistorialListaComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HistorialModule);
    return HistorialModule;
}());
/* harmony default export */ exports["default"] = HistorialModule;


/***/ },

/***/ 1010:
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

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_FormController__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(1010);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistorialListaComponent; });
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






var HistorialListaComponent = (function (_super) {
    __extends(HistorialListaComponent, _super);
    function HistorialListaComponent(route, _api, router, formBuilder) {
        _super.call(this, formBuilder);
        this.route = route;
        this._api = _api;
        this.router = router;
    }
    HistorialListaComponent.prototype.ngOnInit = function () {
        this.addControl('bodega', null);
        this.addControl('material', null);
        this.addControl('desde', null);
        this.addControl('hasta', null);
        this.addControl('limit', null);
        var filters = { active: true };
        this.subscribeResource('bodegas', this._api.get('/administracion/bodegas?' + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(filters)));
        this.subscribeResource('materiales', this._api.get('/administracion/materiales?' + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(filters)));
        this.route.params.subscribe(function (params) {
            var materialId = params['material'];
            var bodegaId = params['bodega'];
        });
    };
    HistorialListaComponent.prototype.submit = function () {
        var _this = this;
        this.toggleForm();
        var values = this.form.value;
        var filters = {};
        if (values.bodega !== null)
            filters['bodega.id'] = values.bodega;
        if (values.material !== null)
            filters['material.id'] = values.material;
        var range = {};
        if (values.desde !== null && values.desde !== "")
            range['desde'] = values.desde;
        if (values.hasta !== null && values.hasta !== "")
            range['hasta'] = values.hasta;
        var uri = "/inventario/historial/?" + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(filters) + "&" + __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].queryParameters(range, 'range');
        this.subscribeResource('historial', this._api.get(uri), true, null, function () { return _this.toggleForm(); });
    };
    HistorialListaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-historial-lista',
            template: __webpack_require__(1106)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], HistorialListaComponent);
    return HistorialListaComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_3__shared_FormController__["a" /* FormController */]));


/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistorialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistorialComponent = (function () {
    function HistorialComponent(headerService) {
        this.headerService = headerService;
    }
    HistorialComponent.prototype.ngOnInit = function () {
        this.headerService.setHeader("inventario", "Historial Inventario", []);
    };
    HistorialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-historial',
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], HistorialComponent);
    return HistorialComponent;
    var _a;
}());


/***/ },

/***/ 1065:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial_lista_historial_lista_component__ = __webpack_require__(1040);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistorialRoutingModule; });
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
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__historial_lista_historial_lista_component__["a" /* HistorialListaComponent */] },
];
var HistorialRoutingModule = (function () {
    function HistorialRoutingModule() {
    }
    HistorialRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HistorialRoutingModule);
    return HistorialRoutingModule;
}());


/***/ },

/***/ 1106:
/***/ function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <div class=\"card\">\r\n        <div class=\"card-block\">\r\n            <form [formGroup]=\"form\">\r\n                <fieldset [disabled]=\"isFormDisabled()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"bodegas\" class=\"form-control-label\">Bodega</label>\r\n                                <select class=\"form-control\" id=\"bodegas\" formControlName=\"bodega\">\r\n                                    <option *ngFor=\"let bodega of bodegas\" [value]=\"bodega.id\">{{ bodega.nombre}} (#{{ bodega.codigo}})</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"materiales\" class=\"form-control-label\">Material</label>\r\n                                <select class=\"form-control\" id=\"materiales\" formControlName=\"material\">\r\n                                    <option *ngFor=\"let material of materiales\" [value]=\"material.id\">{{ material.nombre}} (#{{ material.codigo}})</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"desde\" class=\"form-control-label\">Desde</label>\r\n                                <input type=\"date\" class=\"form-control\" id=\"desde\" formControlName=\"desde\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"hasta\" class=\"form-control-label\">Hasta</label>\r\n                                <input type=\"date\" class=\"form-control\" id=\"hasta\" formControlName=\"hasta\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <fieldset class=\"form-inline\">\r\n                            <div class=\"col-sm-12 text-sm-right\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"limit\" class=\"form-control-label\">Mostrar</label>\r\n                                    <input type=\"number\" size=\"3\" class=\"form-control\" id=\"limit\" formControlName=\"limit\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button (click)=\"submit()\"><i class=\"fa fa-fw fa-search\"></i> Buscar</button>\r\n                                    <button (click)=\"resetForm()\"><i class=\"fa fa-circle-o\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th rowspan=\"2\" width=\"1\">#</th>\r\n        <th rowspan=\"2\">Fecha</th>\r\n        <th rowspan=\"2\">Detalle</th>\r\n        <th colspan=\"2\" class=\"thead-expand-title\">Bodega</th>\r\n        <th colspan=\"3\" class=\"thead-expand-title\">Material</th>\r\n        <th rowspan=\"2\">Previo</th>\r\n        <th rowspan=\"2\">Movimiento</th>\r\n        <th rowspan=\"2\">Saldo</th>\r\n    </tr>\r\n    <tr class=\"thead-expand\">\r\n        <th>Codigo</th>\r\n        <th>Nombre</th>\r\n        <th>Codigo</th>\r\n        <th>Categoria</th>\r\n        <th>Nombre</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let historia of historial; let i = index\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{ historia.created | date }}</td>\r\n        <td>\r\n            <a [routerLink]=\"['../../../movimientos/view', historia.movimiento.id]\">\r\n                {{ historia.accion ? \"Ingreso\" : \"Egreso\" }}<i class=\"fa fa-fw fa-angle-double-right\"></i>{{ historia.movimiento.detalle.documento }}\r\n            </a>\r\n        </td>\r\n        <td><code>{{ historia.bodega.codigo }}</code></td>\r\n        <td>{{ historia.bodega.nombre }}</td>\r\n        <td><code>{{ historia.material.codigo }}</code></td>\r\n        <td>{{ historia.material.categoria.nombre }}</td>\r\n        <td>{{ historia.material.nombre }}</td>\r\n        <td class=\"text-xs-right\">{{ historia.existente }}</td>\r\n        <td class=\"text-xs-right\" [ngClass]=\"{'text-danger': !historia.accion}\">\r\n            {{ historia.accion ? \"+\" : \"-\"}}{{ historia.cantidad }}\r\n        </td>\r\n        <td class=\"text-xs-right\">\r\n            <span *ngIf=\"historia.accion\">{{ historia.existente + historia.cantidad }}</span>\r\n            <span *ngIf=\"!historia.accion\">{{ historia.existente - historia.cantidad }}</span>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n\r\n</table>"

/***/ }

});
//# sourceMappingURL=12.map