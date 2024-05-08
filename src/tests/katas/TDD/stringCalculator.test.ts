import {add} from "../../../katas/TDD/string-calculator/stringCalculator";

describe('string calculator', () => {
    const testCases = [
        {data: null, expected: 0, description: 'when the data is null the total does not increase'},
        {data: '', expected: 0, description: 'when the data is empty the total does not increase'},
        {
            data: '1',
            expected: 1,
            description: 'when the data has only a string number should return it as a numeric type'
        },
        {
            data: '1,2,3,1',
            expected: 7,
            description: 'should add all the numbers included in the data separated by comma'
        },
        {data: '1a, 2', expected: 3, description: 'does not increase the total if the data contains no numeric values'},
        {data: 'a', expected: 0, description: 'does return 0 if only includes a one character non-numeric'},
        {data: '//#/3#2', expected: 5, description: 'add all numbers separated by a personalized separator'},
        {data: '//#/3,2', expected: 0, description: 'should not add numbers separated by a non-personalized separator'}
    ];

    testCases.forEach(({data, expected, description}) => {
        it(description, () => {
            expect(add(data)).toBe(expected);
        });
    });
});