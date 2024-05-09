import {fizzbuzz} from "../../../katas/fizzbuzz/fizzbuzz";

const listNumbers = [
    "0",
    "1",
    "2",
    "fizz",
    "4",
    "buzz",
    "fizz",
    "7",
    "8",
    "fizz",
    "buzz",
    "11",
    "fizz",
    "13",
    "14",
    "fizzbuzz",
];
describe("fizzbuzz", () => {
    it.each<FizzBuzzDataSet>([
        [0, ["0"]],
        [1, ["0", "1"]],
        [3, ["0", "1", "2", "fizz"]],
        [5, ["0", "1", "2", "fizz", "4", "buzz"]],
        [15, listNumbers],
    ])(
        "it should return a list whit fizz when a number is multiple of 3, buzz when is of 5 and fizzbuz when is of both",
        (number: number, response: string[]) => {
            expect(fizzbuzz(number)).toEqual(response);
        },
    );
});

type FizzBuzzDataSet = [number, string[]];