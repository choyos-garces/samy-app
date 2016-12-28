var prompt = require('prompt');
var fs = require('fs');

prompt.start();

var schema = {
    properties : {
        nombre : {
            message : "Nombre de la Compania"
        },
        servidor : {
            message : "Direccion del Servidor"
        }

    }
};
prompt.get(schema, function (err, result) {
    var stream = fs.createWriteStream("src/environments/parametros.ts");

    stream.once('open', function (fd) {
        stream.write("export const parametros = {\n");
        stream.write("\tcompania:'" + result.nombre + "',\n");
        stream.write("\tservidor:'" + result.servidor + "'\n");
        stream.write("};\n");
        stream.end();
    })
});