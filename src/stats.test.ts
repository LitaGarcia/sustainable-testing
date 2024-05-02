import {average, sum} from "./stats";
import {expect, test} from "./testLib";
import * as statsAsync from "./statsAsync";

test("calculates the sum of all elements of the array", ()=> {
    const result = sum([1,2,3]);
    const expected = 6;
    expect(expected).toBe(result);
})

test("calculates the average of all elements of the array (async)", async ()=> {
     const result = await statsAsync.average([1,2,3]);
    const expected = 2;
    expect(expected).toBe(result);
})

test("calculates the average of all elements of the array (async)", async ()=> {
    const result = await statsAsync.average([1,2,3]);
    const expected = 2;
    expect(expected).toBe(result);
})