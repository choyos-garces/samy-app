import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef} from "@angular/core";
import {FormController} from "../../FormController";
import {FormBuilder} from "@angular/forms";
import {IDocumentMap} from "./shared/IDocumentMap";

@Component({
    host : {'(document:click)' : 'onClickOutside($event)'},
    selector: 'app-document-select',
    templateUrl: 'documentSelect.component.html',
    styleUrls: ['documentSelect.component.css']
})
export class DocumentSelectComponent extends FormController implements OnChanges
{
    options : any[] = [];
    active : boolean = false;
    selected : string;

    @Input() documentMap : IDocumentMap = null;
    @Input() current : string;
    @Input() documents : any[];
    @Input() disabled : boolean = false;
    @Output() output = new EventEmitter();

    constructor( private _reference : ElementRef,
                 formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {
        this.addControl('search', null);

        this.onControlChange('search', ( value ) => {
            this.options = [...this.updateOptions( value )];
        });
    }

    ngOnChanges(changes : SimpleChanges) : void
    {
        if('documents' in changes) {
            this.options = changes['documents'].currentValue;
        }

        if( this.options != null && this.current != null ) {
            this.updateCurrent();
        }


        if( this.disabled == true ) {
            this.active = false;
        }
    }

    displayLabel( option : any ) : string {
        if(option != null && 'display' in this.documentMap ) {
            let display = [];
            let keys = this.documentMap.display;

            for(let i = 0; i < keys.length; i++) {
                display.push(option[keys[i]]);
            }

            return display.join(" ");
        }

        return null;
    }

    displayAux( option : any ) : string {
        if(option != null && 'small' in this.documentMap ) {
            let display = [];
            let keys = this.documentMap.small;

            for(let i = 0; i < keys.length; i++) {
                display.push(option[keys[i]]);
            }

            return display.join(" ");
        }

        return null;
    }

    updateSelected( option : any ) : void
    {
        this.selected = option;
        this.active = false;
        this.output.emit(option.id);
        this.current = option.id;
    }

    toggleActive() : void
    {
        if(!this.disabled)
            this.active = !this.active;
    }

    isOptionSelected(option) : boolean
    {
        return option.id === this.current;
    }

    private updateOptions( input : string ) : any[]
    {
        if(input != null && input != "") {
            return this.documents.filter( document => {
                let map = this.documentMap;
                let flag = false;

                for(let i = 0; i < map.searchKeys.length; i++) {
                    if(document[map.searchKeys[i]].indexOf(input) > -1)
                        flag = true;
                }

                return flag;
            })
        }
        
        return this.documents;
    }

    private updateCurrent() : void
    {
        let current = this.current;
        let opciones = this.options;

        let results = opciones.filter( opcion => opcion.id === current);

        if(results.length == 1) {
            this.updateSelected(results[0]);
        }
        else {
            this.output.emit(null)
        }

    }

    /**
     * Esconde el dropdown si el usuario hace click en otra parte que no
     * sea este component.
     * Revisar @Component:host(document:click)
     *
     * @param event Click event
     */
    onClickOutside( event ) : void
    {
        if (!this._reference.nativeElement.contains(event.target)) {
            this.active = false;
            this.output.emit(this.selected);
        }
    }
}