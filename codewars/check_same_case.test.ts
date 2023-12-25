import { expect, test } from "bun:test";
import { sameCase } from "./check_same_case";
// expect().toEqual()

test("should get ('C', 'B', 1)", () => {
	expect(sameCase("C", "B", 1)).toEqual("C", "B", 1);
});
test("should get ('H', ':', -1)", () => {
	expect(sameCase("H", ":", -1)).toEqual("H", ":", -1);
});
