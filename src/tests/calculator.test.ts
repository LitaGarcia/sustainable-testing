import * as arithmetic from "../core/calculator/arithmetic";
import * as calculator from "../core/calculator/calculator";

describe('The calculator', () => {
    // this is a spy + stub
    (arithmetic as any).add = jest.fn(arithmetic.add);
    (arithmetic as any).subtract = jest.fn(arithmetic.subtract);

    test("calls arithmetic.add", () => {
        const result = calculator.doAdd(1, 2);
        expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
        expect(result).toBe(3);
    });

    test("calls arithmetic.subtract", () => {
        const result = calculator.doSubtract(1, 2);
        expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
        expect(result).toBe(-1)
    });
});

// mock jest implementation
// it is not common to use it
// jest.mock("../core/calculator/arithmetic");

describe.skip('The calculator', () => {
    it("calls arithmetic.add", () => {
        calculator.doAdd(1, 2);
        expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
    });

    it("calls arithmetic.subtract", () => {
        calculator.doSubtract(1, 2);
        expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
    });
});