import { expect, test } from "bun:test";
import { isUpperCase } from "./is_string_uppercase";
// expect().toEqual()

test("should get ('c'), false", () => {
	expect(isUpperCase("c").toEqual("c", false));
});
test("should get ('C'), ture", () => {
	expect(isUpperCase("C").toEqual("C", ture));
});
