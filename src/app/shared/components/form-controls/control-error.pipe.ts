import { Pipe, PipeTransform } from '@angular/core';

interface errors { [key : string] : string }
interface normalizeError { code : string, msg : string }

@Pipe({
    name: 'controlError'
})
export class ControlErrorPipe implements PipeTransform {
    transform( errors : errors): normalizeError[] {
        let arr = [];
        Object.keys(errors).map( (code) => {
            arr.push({
                code : code,
                msg : errors[code]
            })
        });

        return arr;
    }
}