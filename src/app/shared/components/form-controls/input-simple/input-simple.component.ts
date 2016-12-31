import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS, Validators} from '@angular/forms';

export const INPUT_TEXT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
};

export const INPUT_TEXT_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
};

@Component({
    selector: 'samy-input-simple',
    templateUrl: 'input-simple.component.html',
    providers: [INPUT_TEXT_VALUE_ACCESSOR, INPUT_TEXT_VALIDATORS]
})
export class InputTextComponent implements ControlValueAccessor
{
    @Input() value : string;
    @Input() label : string;
    @Input() name : string;
    @Input() type : string = 'text';
    @Input() readOnly : boolean = false;
    @Input() placeholder : string = null;
    @Input() control : any;
    @Input() hasSuccess : boolean = false;
    @Input() hasDanger : boolean = true;

    /** Accessors Properties **/
    private onTouchedCallback : () => void = () => {};
    private onChangeCallback : ( _ : any ) => void = () => {};
    private validatFn : ( control : FormControl) => any = () => {};

    private _value: string = '';

    get modelValue() : string
    {
        return this._value;
    };

    set modelValue(value : string )
    {
        if ( value !== this._value ) {
            this._value = value;
            this.onChangeCallback(value);
        }
    }

    controlGroupValidationClasses() : { [key : string] : string}
    {
        let classes = {};
        if(this.hasSuccess) classes['has-success'] = this.control.dirty && this.control.valid;
        if(this.hasDanger) classes['has-danger'] = this.control.dirty && !this.control.valid;

        return classes;
    }

    /** Accessors Bindings **/
    writeValue( value: any ) : void
    {
        this.modelValue = value;
    }

    registerOnChange( fn : any ) : void
    {
        this.onChangeCallback = fn;
    }

    registerOnTouched( fn : any ) : void
    {
        this.onTouchedCallback = fn;
    }

    validate( control : FormControl ) : void
    {
        this.validatFn(control);
    }

}
