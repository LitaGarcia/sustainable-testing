import {fibonacci, fibonacciSequence} from "../../../katas/TDD/fibonacci/fibonacci";

describe('The fibonacci sequence', () => {
        it('should return the number of the position desired', () => {
            expect(fibonacciSequence(9)).toBe(21)
        })
        }
)

describe('The fibonacci sequence', () => {
    it('yields value zero to number zero', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('yields value one to number one', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('is a series where the value for a number is the addition of the preceding two values', () => {
        [2, 3, 4, 5].forEach((n) =>
            expect(fibonacci(n)).toBe(fibonacci(n - 1) + fibonacci(n - 2)))
    });
});