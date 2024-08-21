/*
1) Crear un desarrollo en JavaScript que simule el funcionamiento de esta planta.
2) Definir dos silos: uno para soja y otro para maíz. Cada silo tendrá una capacidad máxima y un stock actual de cereal.
3) Implementar una función que permita ingresar un camión. Esta función debe:
        - Solicitar al usuario el tipo de cereal (soja o maíz) y el peso de la carga.
        - Validar los datos ingresados (por ejemplo, que el peso sea un número positivo).
        - Determinar el silo correspondiente al tipo de cereal.
        o Verificar si hay suficiente espacio en el silo para almacenar la carga.
        - Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando sobre el ingreso del camión.
        - Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.         
*/



let siloSoja = {
    capacidadSiloSoja: 10000,
    stockSoja: 3000
};
let siloMaiz = {
    capacidadSiloMaiz: 10000,
    stockMaiz: 2000
};

// guardo los valores de las propiedades en variables
let capacidadSiloSoja = siloSoja.capacidadSiloSoja;
let stockSoja = siloSoja.stockSoja;

let capacidadSiloMaiz = siloMaiz.capacidadSiloMaiz;
let stockMaiz = siloMaiz.stockMaiz;

//cree funcion mostrarMensaje
function mostrarMensaje(mensaje) {
    alert(mensaje); 
}

   
function soja() { 

    let pesoSojaIngresado;

    // Validación del peso ingresado
    do {
        pesoSojaIngresado = prompt("¿Cuánto peso de soja desea ingresar?");
        
        // Verificamos que sea un número completo y no tenga letras
        if (!/^\d+$/.test(pesoSojaIngresado) || parseInt(pesoSojaIngresado) <= 0) {
            mostrarMensaje("Entrada inválida. Ingrese un peso válido de soja (solo números):");
        }
    } while (!/^\d+$/.test(pesoSojaIngresado) || parseInt(pesoSojaIngresado) <= 0);

    pesoSojaIngresado = parseInt(pesoSojaIngresado); // Ahora puedes hacer la conversión a número

    let stockActualizadoSoja = stockSoja + pesoSojaIngresado;

    if (stockActualizadoSoja <= capacidadSiloSoja) {
        mostrarMensaje(`Hay espacio suficiente en el silo de soja para descargar el camión. Ahora el stock de soja es de ${stockActualizadoSoja}`);
        stockSoja = stockActualizadoSoja; // Actualizo el stock de soja
    } else {
        mostrarMensaje(`No hay espacio suficiente en el silo de soja para descargar el camión`);
    }


};
function maiz() { 
     let pesoMaizIngresado;

    // Validación del peso ingresado
    do {
        pesoMaizIngresado = prompt("¿Cuánto peso de soja desea ingresar?");
        
        // Verificamos que sea un número completo y no tenga letras
        if (!/^\d+$/.test(pesoMaizIngresado) || parseInt(pesoMaizIngresado) <= 0) {
            mostrarMensaje("Entrada inválida. Ingrese un peso válido de soja (solo números):");
        }
    } while (!/^\d+$/.test(pesoMaizIngresado) || parseInt(pesoMaizIngresado) <= 0);

    pesoMaizIngresado = parseInt(pesoMaizIngresado); // Ahora puedes hacer la conversión a número

    let stockActualizadoMaiz = stockMaiz + pesoMaizIngresado;

    if (stockActualizadoMaiz <= capacidadSiloMaiz) {
        mostrarMensaje(`Hay espacio suficiente en el silo de soja para descargar el camión. Ahora el stock de soja es de ${stockActualizadoMaiz}`);
        siloMaiz = stockActualizadoMaiz; // Actualizo el stock de soja
    } else {
        mostrarMensaje(`No hay espacio suficiente en el silo de maiz para descargar el camión`);
    }
}
function ingresarCamion() {
    
    // Inicializo la variable dentro de la función y fuera del switch 
    let menuPrincipal; //cambié los nombres a las variables
    let menu;

    do {
        menuPrincipal = parseInt(prompt("\n*Elija el cereal que quiera ingresar al silo*\n\n1. Soja \n2. Maíz\n\nElija una opción:"));
        
        switch (menuPrincipal) {
            case 1:
                soja();
                break;

            case 2:
                maiz();
                break;

            default:
                mostrarMensaje("El dato ingresado no es válido.");
                break;
        }

        do {
            menu = parseInt(prompt("1) Volver al menu principal\n2) Salir"));
    
            if (menu !== 1 && menu !== 2) {
                mostrarMensaje("Ingresa un dato valido");
            } else if (menu === 2) {
                mostrarMensaje("Gracias, vuelvas prontos");
            }
    
        } while (menu !== 1 && menu !== 2);
        
    } while (menu !== 2);
      
}
ingresarCamion();