const { evenOrOdd } = require("../src/index");

test("should return false if parameter is not an integer", () => {
    expect(evenOrOdd(10.5)).toBe(false);
});

test("should return 'Even' if parameter is even", () => {
    expect(evenOrOdd(10)).toBe("Even");
});

test("should return 'Odd' if parameter is even", () => {
    expect(evenOrOdd(11)).toBe("Odd");
});