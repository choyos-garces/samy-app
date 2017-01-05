import {Component, Input, ElementRef, forwardRef, OnChanges, SimpleChanges, OnInit} from "@angular/core";
import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Utils} from "../../../utils";
import {InputBase} from "../input-base";
import {IInputBaseOptions} from "../IInputBaseOptions";

export const INPUT_COLLECTION_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCollectionComponent),
    multi: true
};

export const INPUT_COLLECTION_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputCollectionComponent),
    multi: true
};

@Component({
    host : {'(document:click)' : 'onClickOutside($event)'},
    selector: 'samy-input-collection',
    templateUrl: './input-collection.component.html',
    styleUrls: ['./input-collection.component.css'],
    providers: [INPUT_COLLECTION_VALIDATORS, INPUT_COLLECTION_VALUE_ACCESSOR]
})
export class InputCollectionComponent extends InputBase implements OnChanges
{
    @Input() options : IInputBaseOptions;
    @Input() collection : any[];
    @Input() key : string;
    @Input() itemLabel : string[];
    @Input() itemAux : string[];

    isActive : boolean = false;
    selectedLabel : string;

    constructor( private ref : ElementRef)
    {
        super();
    }

    s : any;

    set modelValue( value : any )
    {
        if(value !== this.s ) {
            this.s = value;
            this.onChangeCallback(value);

            if(this.collection) {
                let result = Utils.searchCollectionBy(this.key, this.collection, this.modelValue);
                if(result.length == 1) {
                    this.selectedLabel = this.displayItemLabel(result[0]);
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

    updateSelection( index : number ) : void
    {
        let selected = this.collection[index];
        this.selectedLabel = this.displayItemLabel(selected);
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
                label.push(item[this.itemLabel[i]]);
            }
            
            return label.join(' ');
        }

        return null;
    }

    displayItemAux(item : any ) : string
    {
        if(this.itemAux !== null ) {
            let label = [];
            for(let i = 0; i < this.itemAux.length; i++) {
                label.push(item[this.itemAux[i]]);
            }

            return label.join(' ');
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
                this.control.markAsDirty();
            }
        }
    }

}