import {camelCaseConverter} from "../camel-case-converter/camelCaseConverter";

describe('camel case converter', () => {
    it('should return an empty string if exists one', () => {
        //given
        const emptyString = ''
        //when
        const result = camelCaseConverter(emptyString)
        //then
        expect(result).toBe(emptyString)
    });

    it('should return the same string if has upperCase', () => {
        //given
        const upperCaseString = 'Foo'
        //when
        const result = camelCaseConverter(upperCaseString)
        //then
        expect(result).toBe(upperCaseString)
    });

    it('should return the string concat if has a space', () => {
        //given
        const separatedStrings = 'Foo Bar'
        //when
        const result = camelCaseConverter(separatedStrings)
        //then
        const concatStrings = 'FooBar'
        expect(result).toBe(concatStrings)
    });
    it('should return the string concat if is separated by hyphen or underscore', () => {
        //given
        const text = 'Foo_Bar-Foo'
        //when
        const result = camelCaseConverter(text)
        //then
        expect(result).toBe('FooBarFoo')
    })
    it('should return an upperCase if the string has camelCase', () => {
        //given
        const camelCaseString = 'fooBar'
        //when
        const result = camelCaseConverter(camelCaseString)
        //then
        const upperCaseString = 'FooBar'
        expect(result).toBe(upperCaseString)
    })
    it('should return a camelCase and joined string', () => {
        //given
        const completeString = 'foo_bar foo-bar'
        //when
        const result = camelCaseConverter(completeString);
        //then
        expect(result).toBe('FooBarFooBar')
    })
})