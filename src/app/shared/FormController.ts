import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";
import {OnInit} from "@angular/core";

export class FormController implements OnInit {

    public form : FormGroup;
    public feedback : { (key :  string) : string[] }[] | string[];
    private resources : any[] = [];
    private waiting : boolean = false;

    ngOnInit(): void {}

    constructor(formBuilder : FormBuilder)
    {
        this.form = formBuilder.group({});
    }

    protected addControl(name : string, value : any, validators : any = null) : void
    {
        let control = new FormControl(name, validators);
        control.setValue(value);

        this.form.addControl(name, control);
    }

    protected getControl(controlName : string ) : FormControl
    {
        return <FormControl>this.form.controls[controlName];
    }

    protected getControlValue(control) : any
    {
        return this.getControl(control).value;
    }

    protected setControlValue(controlName : string, value : any) : void
    {
        this.getControl(controlName).setValue(value);
        this.getControl(controlName).markAsTouched();
        this.getControl(controlName).markAsDirty();
    }

    protected onControlChange(controlName : string, subscription : ( value : any) => void) : void
    {
        this.getControl(controlName).valueChanges.subscribe(subscription);
    }

    protected isControlInvalid(controlName : string) : boolean
    {
        let control = this.getControl(controlName);
        return !control.valid && control.touched;
    }

    protected toggleForm() : void
    {
        this.waiting = !this.waiting;
    }

    protected isFormDisabled() : boolean
    {
        return (!this.allResourcesLoaded() || this.waiting );
    }

    protected isSubmitDisabled() : boolean
    {
        return !this.form.valid;
    }

    protected allResourcesLoaded() : boolean
    {
        let flag = true;
        for(let i = 0; i < this.resources.length; i++ ) {
            if(typeof this[this.resources[i]] == "undefined") flag = false;
        }

        return flag;
    }

    protected subscribeResource(resourceName : string, observable : Observable<any>, isCollection : boolean = true, alias : string = null, callback : ( i : any ) => void = null )
    {
        alias = (alias == null) ? resourceName : alias;
        this.resources = [ ...this.resources, alias ];

        observable.subscribe(
            ( response ) => {
                if( isCollection && !(resourceName in response) ) {
                    console.error("Colleccion no encontrado en Response", response)
                }
                else if (isCollection){
                    this[alias] = response[resourceName];
                    if(callback != null ) callback(response);
                } else {
                    this[alias] = response;
                    if(callback != null ) callback(response);
                }
            }
        );
    }

    protected handleFormErrors(errors : { (key : string) : string[] }[]) : void
    {
        this.feedback = errors;
        for(let error in errors) {
            this.getControl(error).setErrors({ "feedback" : errors[error] })
        }
    }

    protected getError(name , error) : string[]
    {
        return this.getControl(name).getError(error)
    }

    protected resetForm() : void
    {
        let blueprint = this.form.value;

        for(let prop in blueprint) {
            if(blueprint.hasOwnProperty(prop)) blueprint[prop] = null;
        }

        this.form.setValue(blueprint);
    }

    protected getFeedback(name : string ) : string[]
    {
        if(this.feedback && this.feedback[name]) {
            return this.feedback[name];
        }
    }

}