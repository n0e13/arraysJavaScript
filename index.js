// 1.- Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio
const arrayVacio = [];

// 2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
let suma = (num1, num2) => num1 + num2;

// 6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
function potenciacion(num1, num2) {
    let result = num1;
    if (num2 != 0) {
        for (let i = 1; i < num2; i++) {
            result *= num1;
        }
        return result;
    } else {
        return 1;
    }
}

// 7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras
let separarPalabras = str => str.split(" ");

// 8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
function repetirString(str, num) {
    let strConcat = "";
    for (let i = 0; i < num; i++) {
        strConcat += str;
    }
    return strConcat;
}

// 9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
let esPrimo = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// 10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor
let ordenarArray = array => array.sort();

// 11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva un array con los elementos que sean pares
function obtenerPares(array) {
    let aPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            aPares.push(array[i]);
        }
    }
    return aPares;
}

// 12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'
let pintarArray = array => {
    let sReturn = "[";
    for (let i = 0; i < array.length; i++) {
        if (i===0) {
            sReturn += array[i];
        } else {
            sReturn += ", " + array[i];
        }
    }
    sReturn += "]";
    return sReturn;
}

// 13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array



// 14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver un array en el que se hayan eliminado los duplicados

// 15.- Crea una variable de nombre 'arrayNumerosNeg' cuyo valor sea el array de numeros del 0 al -9 incluidos (0, -1, -2...)

// 16.- Crea una variable de nombre 'holaMundo' cuyo valor sea un array con las palabras 'Hola' y 'Mundo'

// 17.- Crea una variable de nombre 'loGuardoTodo' cuyo valor sea un array con los valores 'hola', 'que', 23, 42.33 y 'tal'

// 18.- Crea una variable de nombre 'arrayDeArrays' cuyo valor sea el siguiente array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

// 19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion

// 20.- Crea la función 'division' que acepte como argumentos dos números y devuelva como resultado su division

// 21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar

// 22.- Crea una variable de nombre 'arrayFunciones' que tenga el valor de un array con las funciones: suma, resta y multiplicacion (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

// 23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor

// 24.- Crea la función 'obtenerImpares' que acepte como argumento un array de números y devuelva un array con los elementos que sean impares

// 25.- Crear la función 'sumarArray' que acepte como argumento un array numérico y devuelva el resultado de la suma de los elementos

// 26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva el resultado de la multiplicación de los elementos