import {ControlValueAccessor, AbstractControl, FormControl} from "@angular/forms";
import {IInputBaseOptions} from "./IInputBaseOptions";

export class InputBase implements ControlValueAccessor {

    options : IInputBaseOptions;
    label : string;
    name : string;
    control : FormControl = new FormControl();
    hasSuccess : boolean = false;
    hasDanger : boolean = true;

    /** Accessors Properties **/
    private onTouchedCallback : () => void = () => {};
    private onChangeCallback : ( _ : any ) => void = () => {};
    private validatFn : ( control : AbstractControl) => any = () => {};

    private value: string = '';

    get modelValue() : string
    {
        return this.value;
    };

    set modelValue(value : string )
    {
        if ( value !== this.value ) {
            this.value = value;
            this.onChangeCallback(value);
        }
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

    validate( control : AbstractControl ) : void
    {
        this.validatFn(control);
    }

    controlGroupValidationClasses( add? : { [key : string ] : string } ) : { [key : string] : string}
    {
        let classes = {};
        if(this.hasSuccess) classes['has-success'] = this.control.dirty && this.control.valid;
        if(this.hasDanger) classes['has-danger'] = this.control.dirty && !this.control.valid;

        if( add ) {
            Object.keys(add).forEach( key => classes[key] = add[key] );
        }

        return classes;
    }

}