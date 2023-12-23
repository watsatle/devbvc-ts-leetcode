import { expect, test } from "bun:test";
import { descendingOrder } from "./descending_order";
// expect().toEqual()

test("should get 987654321", () => {
	expect(descendingOrder(123456789)).toEqual(987654321);
});
test("should get  87654321", () => {
	expect(descendingOrder(32541678)).toEqual(87654321);
});
test("should get 9871", () => {
	expect(descendingOrder(1897)).toEqual(9871);
});
test("should get 4321", () => {
	expect(descendingOrder(1234)).toEqual(4321);
});
