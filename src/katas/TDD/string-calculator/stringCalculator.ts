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

export function add(data: string): number {
    let total: number = 0;


    if (data === null || data === "" || data.length === 1 && isNaN(parseInt(data))) {
        return total;
    }

    if (data.includes('//')) {
        const personalizedSeparator = data[2];
        const numbers = data.split('/');
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

    total = data
        .split(',')
        .map(stringNumber => parseInt(stringNumber))
        .reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        })

    return total
}
