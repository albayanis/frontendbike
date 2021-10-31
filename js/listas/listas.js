/**
 * Este script se utiliza para generar las listas desplegables:
 * 
 * -Bike
 * -Category
 * -Client
 */

/**
 * Consume el WS para recuperar las categorias
 * endpoint: http://localhost:8081/api/Category/all
 */
 function listarCategorias() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.113.72:8080/api/Category/all",
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            var lista
            //recibe el arreglo 'items' de la respuesta a la petición
            armaListaCategorias(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al listar las categorias...");
            $("#mensajes").show(1000);
        }
    });
}

/**
 * Retorna un listado de categorias en formato html <option value=id categoria>Nombre categoria</option>
 * @param {*} items listado de objetos json con información de categorias
 * @returns html con lista de <option value=id categoria>Nombre categoria</option>
 *          para pintar las lista de categorias en el taga html <select> de la pagina
 *          que lo requiera
 *          
 */
function armaListaCategorias(items) {
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var lista = ` <option value="">--Selecciona una Categoría--</option>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].id}">${items[i].name}</option>`;
    }

    $("#category").html(lista);
}

/**
 * Consume el WS para recuperar los cliente
 * endpoint: http://localhost:8081/api/Client/all
 */
 function listarClientes() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.113.72:8080/api/Client/all",
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            //console.log(respuesta);

            //recibe el arreglo 'items' de la respuesta a la petición
            armaListaClientes(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de bicis...");
            $("#mensajes").hide(1000);
        }
    });
}

/**
 * Retorna un listado de categorias en formato html <option value=id cliente>Nombre Cliente</option>
 * @param {*} items listado de objetos json con información de clientes
 * @returns html con lista de <option value=id cliente>Nombre Cliente</option>
 *          para pintar las lista de clientes en el taga html <select> de la pagina
 *          que lo requiera
 *          
 */
function armaListaClientes(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var lista = ` <option value="">--Selecciona un Cliente--</option>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].idClient}">${items[i].name}</option>`;
    }

    $("#client").html(lista);
}

/**
 * Consume el WS para recuperar las bibletas
 * endpoint: http://localhost:8081/api/Bike/all
 */
function listarBicicletas() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.113.72:8080/api/Bike/all",
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            //console.log(respuesta);

            //recibe el arreglo 'items' de la respuesta a la petición
            armaListaBicicletas(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al generar la lsita de bicicletas...");
            $("#mensajes").show(1000);
        }
    });
}

/**
 * Retorna un listado de bicicletas en formato html <option value=id bicicleta>Nombre bicicleta</option>
 * @param {*} items listado de objetos json con información de clientes
 * @returns html con lista de <option value=id bicicleta>Nombre bicicleta</option>
 *          para pintar las lista de bicicletas en el taga html <select> de la pagina
 *          que lo requiera
 *          
 */
function armaListaBicicletas(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var lista = ` <option value="">--Selecciona una Bicicleta--</option>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].id}">${items[i].name}</option>`;
    }

    $("#bike").html(lista);
}