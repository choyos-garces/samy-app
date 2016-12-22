import {FormControl} from "@angular/forms";

export class AppValidators {
    static collectionRequired = function ( control : FormControl ) {
        return (control.value.length !== 0) ? null : {
                collectionRequired : {
                    valid : false
                }
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
    }
}