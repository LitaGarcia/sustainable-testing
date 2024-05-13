export function fibonacciSequence(limit: number): number  {
    let sequence = [0, 1]
    let i = 0

    while (i < limit) {
        sequence.push(sequence[i] + sequence[i + 1])
        i++
    }

    return sequence[limit - 1]
}


//solution with recursive function
export function fibonacci(number: number) {
    if (number === 0) return 0;
    if (number <= 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}