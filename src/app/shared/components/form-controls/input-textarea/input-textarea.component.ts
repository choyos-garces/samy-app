import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR,NG_VALIDATORS} from '@angular/forms';
import {IInputBaseOptions} from "../IInputBaseOptions";
import {InputBase} from "../input-base";

export const INPUT_TEXTAREA_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextareaComponent),
    multi: true
};

export const INPUT_TEXTAREA_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputTextareaComponent),
    multi: true
};

@Component({
    selector: 'samy-input-textarea',
    templateUrl: 'input-textarea.component.html',
    styleUrls: ['input-textarea.component.css'],
    providers: [INPUT_TEXTAREA_VALUE_ACCESSOR, INPUT_TEXTAREA_VALIDATORS]
})
export class InputTextareaComponent extends InputBase
{
    @Input() options : IInputBaseOptions;
    @Input() placeholder : string = null;
}
