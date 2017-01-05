import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR,NG_VALIDATORS} from '@angular/forms';
import {IInputBaseOptions} from "../IInputBaseOptions";
import {InputBase} from "../input-base";

export const INPUT_TEXT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSimpleComponent),
    multi: true
};

export const INPUT_TEXT_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputSimpleComponent),
    multi: true
};

@Component({
    selector: 'samy-input-simple',
    templateUrl: 'input-simple.component.html',
    styleUrls: ['input-simple.component.css'],
    providers: [INPUT_TEXT_VALUE_ACCESSOR, INPUT_TEXT_VALIDATORS]
})
export class InputSimpleComponent extends InputBase
{
    @Input() options : IInputBaseOptions;
    @Input() type : string = 'text';
    @Input() readOnly : boolean = false;
    @Input() placeholder : string = null;

}
