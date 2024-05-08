// Esta kata nos propone la implementación de una función que realiza la suma de los elementos de una expresión que recibe como parámetro en forma de cadena de caracteres.
//
// Esta expresión tiene algunas particularidades. Veamos los diferentes casos de uso que debemos cubrir:
// En el caso de recibir null o una cadena vacía, la función deberá devolver 0.
// En el caso de recibir sólo un número en formato string debe convertirlo a un tipo numérico y devolverlo.
// En el caso de recibir varios números debe devolver correctamente el resultado de la suma. Los números van a estar separados, por defecto, por comas.
// Podría darse el caso de que algunos de los elementos separados por comas fuese un carácter no numérico, como, por ejemplo, una letra. Estos valores no deberían afectar al resultado total.
//
//
// Ejemplos:
// En el caso de recibir null o una cadena vacía no se incrementa el total. Ej.: null ⇒ 0, "" ⇒ 0
// Convierte un número en formato string a un tipo numérico. Ej.: "1" ⇒ 1
// Suma todos los números separados por comas. Ej.: "1,2" ⇒ 3, "1,2,3" ⇒ 6
// No incrementa el total para valores no numéricos. Ej.: "a" ⇒ 0, "1,a" ⇒ 1, "1,a,2" ⇒ 3, "1a, 2" ⇒ 2
// Suma todos los números separados por un separador personalizado. Ej.: "//#/3#2" ⇒ 5, "//#/3,2" ⇒ 0, "//%/1%2%3" ⇒ 6

export function add(expression: string): number {
    let total: number = 0;


    if (!expression || expression.length === 1 && isNaN(parseInt(expression))) {
        return total;
    }

    if (expression.includes('//')) {
        const personalizedSeparator = expression[2];
        const numbers = expression.split('/');
        const operation = numbers.find((n, i) => {
            return n[1]
        })
        if (operation.match(personalizedSeparator)) {
            return operation.split(personalizedSeparator).map(stringNumber => parseInt(stringNumber))
                .reduce((previousValue, currentValue) => {
                    return previousValue + currentValue;
                })
        } else {
            return total
        }

    }

    total = expression
        .split(',')
        .map(stringNumber => parseInt(stringNumber))
        .reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        })

    return total
}


//Another approach

const nothingToAdd = 0;

export function sumNumbers(expression: string) {
    if (!expression) {
        return nothingToAdd;
    }
    const beginningOfConfig = '//';
    let separator = ',';
    if (expression.startsWith(beginningOfConfig)) {
        const endOfConfig = '/';
        separator = getSeparator(expression, beginningOfConfig, endOfConfig);
        expression = removeConfigFrom(expression, endOfConfig);
    }
    const tokens = expression.split(separator);
    return tokens.map(getNumber).reduce(sum);
}

function getSeparator(expression: string, beginningOfConfig: string, endOfConfig: string) {
    return expression.slice(beginningOfConfig.length, expression.lastIndexOf(endOfConfig));
}

function removeConfigFrom(expression: string, endOfConfig: string) {
    return expression.slice(expression.lastIndexOf(endOfConfig) + 1);
}

function getNumber(token: string) {
    const parsedToken = Number(token);
    return isNaN(parsedToken) ? nothingToAdd : parsedToken;
}

function sum(previousNumber, currentNumber) {
    return previousNumber + currentNumber;
}