export class IHeaderAcciones {
    icono : string;
    uri : string;
    title? : string;
}

export class IHeader {
    grupo : string;
    seccion : string;
    acciones : IHeaderAcciones[];
}