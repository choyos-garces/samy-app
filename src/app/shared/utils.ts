export class Utils {

    static queryParameters(filters : {}, name : string = 'filters') : string
    {
        let filter = [];
        for(let key in filters) {
            filter.push(name+"["+key+"]="+filters[key])
        }

        return filter.join("&");
    }

    static searchCollectionBy( key : string, collection : any[], term : any ) {
        if( collection == null ) return [];

        return [
            ...collection.filter( item => {
                if(key in item) {
                    return item[key] == term;
                }
                return false;
            })
        ]
    }

    static searchCollectionNotEquals( key : string, collection : any[], term : any ) {
        if( collection == null ) return [];

        return [
            ...collection.filter( item => {
                if(key in item) {
                    return item[key] != term;
                }
                return false;
            })
        ]
    }

}