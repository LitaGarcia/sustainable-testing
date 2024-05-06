export function fizzbuzz(n: number): string[] {
    const fizzbuzzList: string[] = [];
    for (let i = 0; i <= n; i++) {
        if (isMultipleOfFiveAndThree(i)) {
            fizzbuzzList.push("fizzbuzz");
        } else if (isMultipleOfThree(i)) {
            fizzbuzzList.push("fizz");
        } else if (isMultipleOfFive(i)) {
            fizzbuzzList.push("buzz");
        } else {
            fizzbuzzList.push(i.toString());
        }
    }
    return fizzbuzzList;
}

function isMultipleOfFiveAndThree(i: number): boolean {
    return isMultipleOfFive(i) && isNotZero(i) && isMultipleOfThree(i);
}

function isMultipleOfThree(i: number): boolean {
    return i % 3 === 0 && isNotZero(i);
}

function isMultipleOfFive(i: number): boolean {
    return i % 5 === 0 && isNotZero(i);
}

function isNotZero(i): boolean {
    return i !== 0;
}