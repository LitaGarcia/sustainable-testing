import {averageAsync, sumAsync} from "../../../core/manual-testing-library/statsAsync";

describe("Stats Async should", () => {
    it("calculates the sum of all elements of the array (async)", async () => {
        const result = await sumAsync([1, 2, 3]);
        const expected = 6;

        expect(result).toBe(expected);
    });

    it("calculates the average of all elements of the array (async)", async () => {
        const result = await averageAsync([1, 2, 3]);
        const expected = 2;

        expect(result).toBe(expected);
    });
});