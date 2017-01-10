import {FormControl} from "@angular/forms";

export class SamyValidators {

    static NOT_VALID_OPTION = "SAMY_NOT_VALID_OPTION";

    static collectionRequired = function ( control : FormControl ) {
        let value = control.value;
        return (value.constructor === Array && value.length !== 0) ? null : {
                collectionRequired : "Colleccion de items requerrida."
            }
    };

    static notNullorEmpty = function( control : FormControl ) {
        if( control.value == null ) return {
            notNullorEmpty : "Este item no puede quedar vacio."
        };

        if( control.value == "" ) return {
            notNullorEmpty : "Este item no puede quedar vacio."
        };
        return null
    };

    static numericRange(min : number, max : number = Number.MAX_SAFE_INTEGER ) {
        return function( control : FormControl ) {
            let value = parseFloat(control.value);
            if( !(value >= min && value <= max) ) return {
                minValue: ( max == Number.MAX_SAFE_INTEGER ) ? "Valor debe ser mayor a "+min+"." : "El valor se debe encontrar en el rango entre "+min+" y "+max+"."
            }
        }
    }

    static validListOption = function( control : FormControl ) {
        if( control.value == SamyValidators.NOT_VALID_OPTION || control.value == null ) return {
            validListOption : "Eliga una opcion valida."
        };
    };

    static notNumber = function(control : FormControl ) {
        let value = control.value;

        if( value == null ) return null;
        if( isNaN(parseFloat(value)) && !isFinite(value)) return { notNumber : "Item debe ser un numero." };

        return null;
    }
}