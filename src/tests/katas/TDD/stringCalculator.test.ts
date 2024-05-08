import {add} from "../../../katas/TDD/string-calculator/stringCalculator";

describe('string calculator', () => {
    it('when the data is null the total does not increase', () => {
        const data = null;

        add(data)

        expect(add(data)).toBe(0)
    })
    it('when is the data is empty the total does not increase', () => {
        const data = '';

        add(data)

        expect(add(data)).toBe(0)
    })
    it('when is the data is empty the total does not increase', () => {
        const data = '';

        add(data)

        expect(add(data)).toBe(0)
    })
    it('when the data has only an string number should return it as a numeric type', () => {
        const data = '1';

        add(data)

        expect(add(data)).toBe(1)
    })
    it('should sum all the numbers included in the data separated by comma', () => {
        const data = '1,2,3,1';

        add(data)

        expect(add(data)).toBe(7)
    })
    it('does not increase the total if the data contains no numeric values', () => {
        const data = '1a, 2';

        add(data)

        expect(add(data)).toBe(3)
    })
    it('does return 0 if only includes a one character non numeric', () => {
        const data = 'a';

        add(data)

        expect(add(data)).toBe(0)
    })
    it('sum all numbers separated by a personalized separator', () => {
        const data = '//#/3#2';

        add(data)

        expect(add(data)).toBe(5)
    })
    it('should not sum numbers separated by a non personalized separator', () => {
        const data = '//#/3,2';

        add(data)

        expect(add(data)).toBe(0)
    })
})