export function fibonacciSequence(limit: number): number  {
    let sequence = [0, 1]
    let i = 0

    while (i < limit) {
        sequence.push(sequence[i] + sequence[i + 1])
        i++
    }

    return sequence[limit - 1]
}