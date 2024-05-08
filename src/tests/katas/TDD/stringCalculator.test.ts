import {add, sumNumbers} from "../../../katas/TDD/string-calculator/stringCalculator";

describe('string calculator', () => {
    const testCases = [
        {expression: null, expected: 0, description: 'when the expression is null the total does not increase'},
        {expression: '', expected: 0, description: 'when the expression is empty the total does not increase'},
        {
            expression: '1',
            expected: 1,
            description: 'when the expression has only a string number should return it as a numeric type'
        },
        {
            expression: '1,2,3,1',
            expected: 7,
            description: 'should add all the numbers included in the expression separated by comma'
        },
        {
            expression: '1a, 2',
            expected: 3,
            description: 'does not increase the total if the expression contains no numeric values'
        },
        {expression: 'a', expected: 0, description: 'does return 0 if only includes a one character non-numeric'},
        {expression: '//#/3#2', expected: 5, description: 'add all numbers separated by a personalized separator'},
        {
            expression: '//#/3,2',
            expected: 0,
            description: 'should not add numbers separated by a non-personalized separator'
        }
    ];

    testCases.forEach(({expression, expected, description}) => {
        it(description, () => {
            expect(add(expression)).toBe(expected);
        });
    });
});

//Another approach

describe('The string calculator', () => {
    it('does not increment the total in case of null or empty expression', () => {
        expect(sumNumbers(null)).toBe(0);
        expect(sumNumbers('')).toBe(0);
    });
    it('converts number in strings to number type', () => {
        expect(sumNumbers('1')).toBe(1);
    });
    it('sums all numbers separated by commas', () => {
        expect(sumNumbers('1,2')).toBe(3);
        expect(sumNumbers('1,2,3')).toBe(6);
    });
    it('does not increment the total in case of non numeric symbol', () => {
        expect(sumNumbers('a')).toBe(0);
        expect(sumNumbers('1,a')).toBe(1);
        expect(sumNumbers('1,a,2')).toBe(3);
    });
    it('sums all the numbers separated by custom separator', () => {
        expect(sumNumbers('//#/3#2')).toBe(5);
        expect(sumNumbers('//#/3,2')).toBe(0);
        expect(sumNumbers('//%/1%2%3')).toBe(6);
    });
});