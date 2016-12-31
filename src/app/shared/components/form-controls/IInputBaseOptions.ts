import {FormControl} from "@angular/forms";

export interface IInputBaseOptions {
    label : string;
    name : string;
    control : FormControl;
    hasSuccess? : boolean;
    hasDanger? : boolean;
}