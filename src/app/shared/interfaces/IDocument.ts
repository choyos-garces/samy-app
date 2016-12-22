import {IKey} from "./IKey";

export class IDocument extends IKey {
    active? : boolean;
    created? : Date | string;
    edited? : Date | string;
    createdBy? : any;
    editedBy? : any;
}