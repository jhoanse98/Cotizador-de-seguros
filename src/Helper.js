//funcion que obtiene la diferencia de años
export function ObtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
};

//función que calcula el incremento con base a la marca
export function ObtenerMarca(marca){
    let incremento;
    switch(marca){
        case 'americano':
            incremento= 1.15;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}


//función que me dice el incremento con base al plan
export function calcularPlan(plan){
    let incremento;

    switch(plan){
        case 'basico':
            incremento = 1.20;
            break;
        case 'completo':
            incremento = 1.50;
            break;
        default:
            break;
    }
    return incremento;
}


//Función que cambia la primera letra de un texto en mayúscula

export function Mayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);

    //charAt toma el caracter que se le indique dentro de una cadena
    //slice muestra el contenido de una cadena desde el índice que se le indique
};
