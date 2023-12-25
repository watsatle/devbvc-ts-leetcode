import { expect, test } from "bun:test";
import { addLength } from "./ add_length";
// expect().toEqual()

test("should get ['apple 5', 'ban 3']", () => {
	expect(addLength("apple, ban")).toEqual(["apple 5", "ban 3"]);
});
test("should get ['to 2', 'do 2']", () => {
	expect(addLength("to, do")).toEqual(["to 2", "do 2"]);
});
