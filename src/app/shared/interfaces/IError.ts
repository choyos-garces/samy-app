/**
 * Created by choyo on 11/26/2016.
 */
export interface IError {
    status : number;
    type: string;
    title: string;
    errors : { (key : string) : string[] }[];
}