import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";
import {IGuiaTransferencia} from "../../../shared/interfaces/Inventario/IGuiaTransferencia";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {IMovimientoMaterial} from "../../../shared/interfaces/Inventario/IMovimientoMaterial";

@Component({
    selector : "app-guia-transferencia-ver",
    templateUrl : "transferencia-ver.component.html"
})
export class TransferenciaVerComponent {

    guia : IGuiaTransferencia;
    stack : IStack[] = [];

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router )
    {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/inventario/guias/" + id).subscribe(
                ( response ) => {
                    this.guia = response;
                    this.diferenciaEntreMateriales(response);
                }
            )
        })
    }

    private diferenciaEntreMateriales( guia : IGuiaTransferencia ) : void
    {
        let materialesOrigen = guia.movimientoOrigen.materiales;
        let materialesDestino = ( guia.movimientoDestino !== null ) ? guia.movimientoDestino.materiales : null;
        let stack : IStack;

        if(materialesDestino == null) {
            for(let i = 0; i < materialesOrigen.length; i++) {
                stack = {
                    material : materialesOrigen[i].material,
                    origen : materialesOrigen[i].cantidad,
                    destino : 0
                };

                this.stack.push(stack);
            }
        }
        else {
            for(let i = 0; i < materialesOrigen.length; i++) {
                let m = materialesOrigen[i].material;
                let mm = this.findMaterialById(m.id, materialesDestino);

                stack = {
                    material : materialesOrigen[i].material,
                    origen : materialesOrigen[i].cantidad,
                    destino : mm !== null ? mm.cantidad : 0
                };

                this.stack.push(stack);
            }
        }
    }

    private findMaterialById(id : string, materiales : IMovimientoMaterial[] ) : IMovimientoMaterial
    {
        let results = materiales.filter( (item )  => {
            return item.material.id == id;
        });

        if(results.length == 1) return results[0];
        return null;
    }

}

interface IStack {
    material : IMaterial | any;
    origen : number;
    destino : number;
}