import { expect, test } from "bun:test";
import { addLength } from "./ add_length";
// expect().toEqual()

test("should get ['apple5','ban3']", () => {
	expect(addLength("apple, ban")).toEqual(["apple5", "ban3"]);
});
test("should get ['hello5', 'world5']", () => {
	expect(addLength("hello, world")).toEqual(["hello", "world"]);
});
