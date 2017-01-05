import {Component, forwardRef, Input, SimpleChanges} from '@angular/core';
import {NG_VALUE_ACCESSOR,NG_VALIDATORS} from '@angular/forms';
import {IInputBaseOptions} from "../IInputBaseOptions";
import {InputBase} from "../input-base";

export const INPUT_CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCheckboxComponent),
    multi: true
};

export const INPUT_CHECKBOX_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputCheckboxComponent),
    multi: true
};

@Component({
    selector: 'samy-input-checkbox',
    templateUrl: 'input-checkbox.component.html',
    styleUrls: ['input-checkbox.component.css'],
    providers: [INPUT_CHECKBOX_VALUE_ACCESSOR, INPUT_CHECKBOX_VALIDATORS],
})
export class InputCheckboxComponent extends InputBase
{
    @Input() options : IInputBaseOptions;
}
