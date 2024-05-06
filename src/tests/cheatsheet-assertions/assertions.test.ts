describe('', () => {
        it('', () => {
            expect(1 + 2).toBe(3);
            expect(1 + 2).not.toBe(4);
            // Objects

            //expect({ foo: 'foo', bar: 'bar' }).toBe({ foo: 'foo', bar: 'bar' }); //false
            expect({foo: 'foo', bar: 'bar'}).toEqual({foo: 'foo', bar: 'bar'});
            expect({foo: 'foo', bar: 'bar'}).not.toEqual({foo: 'foo', bar: 'foo'});

            // Arrays

            //expect([1, 2, 3]).toBe([1, 2, 3]); //false
            expect([1, 2, 3]).toEqual([1, 2, 3]);
            expect([1, 2, 3]).not.toEqual([0, 1, 2]);

            //undefined, booleans, null
            expect(true).toBeTruthy();
            expect(false).toBeFalsy();
            expect(null).toBeNull();
            expect(undefined).toBeUndefined();
            expect({}).toBeDefined();

            //falsy values
            expect(false).toBeFalsy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(NaN).toBeFalsy();
            expect(0).toBeFalsy();
            expect(-0).toBeFalsy();
            // @ts-ignore
            expect(0n).toBeFalsy();
            expect('').toBeFalsy();

            //numeric values
            expect(1).toBeGreaterThan(0);
            expect(1).toBeGreaterThanOrEqual(0);
            expect(0).toBeLessThan(1);
            expect(0).toBeLessThanOrEqual(1);

            //string values
            expect('Miguel').toMatch(/guel/);

            //verifies if a value is included in an array
            expect([0, 1, 2]).toContain(2);
            expect([
                {foo: 'foo', bar: 'bar'},
                {foo: 'foo', bar: 'foo'},
            ]).toContainEqual({foo: 'foo', bar: 'foo'});
        })
        it('Exceptions', () => {
            const throwError = () => {
                throw new Error('Something wrong...');
            };
            expect(throwError).toThrow();
            expect(throwError).toThrow(Error);
            expect(throwError).toThrow('wrong');
            expect(throwError).toThrow(/wrong/);
        });

    }
)

test('custom assertions (grouping)', () => {
    const list = [{value: 10}, {value: 20}, {value: 30}];

    expectThatList(list).isExactly({value: 10}, {value: 20}, {value: 30});
});

function expectThatList<T>(list: T[]) {
    return listMatchers(list);
}

//this custom assertion allows us to compare more complicated objects
function listMatchers<T>(list: T[]) {
    return {
        isExactly(...items: T[]) {
            expect(items.length).toBe(list.length);
            //when it is not necessary use a param but is required we use an underscore
            items.forEach((_, i) => {
                expect(items[i]).toEqual(list[i]);
            });
        },
    };
}