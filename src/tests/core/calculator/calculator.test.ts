import * as arithmetic from "../../../core/calculator/arithmetic";
import * as calculator from "../../../core/calculator/calculator";

describe.skip('The calculator', () => {
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

//best way! mantean the original implementation and type checking
// this is a real mock
describe('The calculator', () => {
    it("calls arithmetic add", () => {
        const mockedAdd = jest.spyOn(arithmetic, 'add');
        expect(calculator.doAdd(1, 2)).toBe(3);
        expect(mockedAdd).toHaveBeenCalledWith(1, 2);
    });
    it("calls arithmetic subtract", () => {
        const mockedSubtract = jest.spyOn(arithmetic, 'subtract');
        expect(calculator.doSubtract(1, 2)).toBe(-1);
        expect(mockedSubtract).toHaveBeenCalledWith(1, 2);
    });
});

// we can use it also to stub the implementation

describe('The calculator', () => {
    //this will fail because we are returning the force value 10
    xit("calls arithmetic add", () => {
        const mockedAdd = jest.spyOn(arithmetic, 'add');
        mockedAdd.mockImplementation(() => 10);
        expect(calculator.doAdd(1, 2)).toBe(3);
        expect(mockedAdd).toHaveBeenCalledWith(1, 2);
    });
    it("calls arithmetic subtract", () => {
        const mockedSubtract = jest.spyOn(arithmetic, 'subtract');
        expect(calculator.doSubtract(1, 2)).toBe(-1);
        expect(mockedSubtract).toHaveBeenCalledWith(1, 2);
    });
});