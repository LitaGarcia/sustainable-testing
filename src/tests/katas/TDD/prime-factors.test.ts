import {getPrimeFactorsFor, primeFactors} from "../../../katas/TDD/prime-factors/prime-factors";

describe('The prime factors', ()=> {
    it("returns the list of the integer's prime factor", ()=> {
    expect(primeFactors(6)).toEqual([2,3])
    expect(primeFactors(2 * 2)).toEqual([2, 2]);
    expect(primeFactors(5 * 7 * 11 * 3)).toEqual([3, 5, 7, 11]);
    })
}
)

describe('The prime factors', () => {
    it('knows what is a prime number', () => {
        expect(getPrimeFactorsFor(2)).toEqual([2]);
        expect(getPrimeFactorsFor(3)).toEqual([3]);
    });
    it('produces the same result to multiply the numbers in the output list', () => {
        expect(getPrimeFactorsFor(2 * 2 * 2)).toEqual([2, 2, 2]);
    });
    it('orders the prime factors from the smallest to the biggest', () => {
        expect(getPrimeFactorsFor(5 * 7 * 11 * 3)).toEqual([3, 5, 7, 11]);
    })
    it('only accepts positive numbers', () => {
        expect(() => getPrimeFactorsFor(-5)).toThrow();
    });
});