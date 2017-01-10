import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'decimalPlaces'
})
export class DecimalPlacesPipe implements PipeTransform {
    transform( num : number, places : number = 2 ) : string {
        let v = Math.pow(10, places);
        return parseFloat(Math.round(num*v)/v+"").toFixed(places);
    }
}