import {Component, forwardRef, ElementRef, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, NG_VALIDATORS} from "@angular/forms";
import {InputBase} from "../input-base";
import {IInputBaseOptions} from "../IInputBaseOptions";
import {Utils} from "../../../utils";

export const INPUT_LIST_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputListComponent),
    multi: true
};

export const INPUT_LIST_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputListComponent),
    multi: true
};

@Component({
    host : {'(document:click)' : 'onClickOutside($event)'},
    selector: 'samy-input-list',
    templateUrl: './input-list.component.html',
    styleUrls: ['./input-list.component.css'],
    providers: [INPUT_LIST_VALIDATORS, INPUT_LIST_VALUE_ACCESSOR]
})
export class InputListComponent extends InputBase {

    @Input() options : IInputBaseOptions;
    @Input() collection : any[] = [];
    @Input() key : string = 'id';
    @Input() itemLabel : string[] = [];
    @Input() itemAux : string[] = [];

    isActive : boolean = false;
    searchQuery : string;
    results : any[] = [];
    /** overide of the private value **/
    s : any;
    
    constructor( private ref : ElementRef)
    {
        super();
    }

    set modelValue( value : any )
    {
        if(value == null ) this.searchQuery = "";

        if(value !== this.s ) {
            this.s = value;
            this.onChangeCallback(value);

            if(this.collection && value) {
                let result = Utils.searchCollectionBy(this.key, this.collection, this.modelValue);
                if(result.length == 1) {
                    this.searchQuery = this.displayItemLabel(result[0]);
                }
                else {
                    this.modelValue = null;
                }
            }
        }
    }

    get modelValue() : any
    {
        return this.s;
    }

    toggleOptions() : void
    {
        this.isActive = !this.isActive;
    }

    searchOptions() : void
    {
        let results = [];
        let keys = [ ...this.itemLabel, ...this.itemAux];

        if(this.searchQuery.length !== 0) {
            results = this.collection.filter(value => {
                for (let i = 0; i < keys.length; i++) {
                    if (value.hasOwnProperty(keys[i]) && value[keys[i]].toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0)
                        return true;
                }

                return false;
            });
        }

        this.results = [...results];

        this.isActive = (results.length > 0 );
        if(results.length == 0) this.modelValue = null
    }

    updateSelection( index : number ) : void
    {
        let selected = this.collection[index];
        this.searchQuery = this.displayItemLabel(selected);
        if( this.key !== null ) {
            this.modelValue = selected[this.key];
        }

        this.toggleOptions();
    }

    displayItemLabel(item : any ) : string
    {
        if(this.itemLabel !== null ) {
            let label = [];
            for(let i = 0; i < this.itemLabel.length; i++) {
                if(item.hasOwnProperty(this.itemLabel[i])) label.push(item[this.itemLabel[i]]);
            }

            return label.join(' - ');
        }

        return null;
    }

    displayItemAux(item : any ) : string
    {
        if(this.itemAux !== null ) {
            let label = [];
            for(let i = 0; i < this.itemAux.length; i++) {
                if(item.hasOwnProperty(this.itemAux[i])) label.push(item[this.itemAux[i]]);
            }

            return label.join(' - ');
        }

        return null;
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
        if (!this.ref.nativeElement.contains(event.target)) {
            this.isActive = false;

            if( this.modelValue == null && this.collection && this.control.touched ) {
                this.searchQuery = "";
                this.control.markAsDirty();
            }

            if(this.modelValue !== null) {
                let result = Utils.searchCollectionBy(this.key, this.collection, this.modelValue);
                if(result.length == 1) {
                    this.searchQuery = this.displayItemLabel(result[0]);
                }
                else {
                    this.modelValue = null;
                }
            }
        }
    }
}