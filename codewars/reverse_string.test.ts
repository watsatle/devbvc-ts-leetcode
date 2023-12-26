import { expect, test } from "bun:test";
import { solution } from "./reverse_string";
// expect().toEqual()

test("should get dlrow", () => {
	expect(solution("world")).toEqual("dlrow");
});
test("should get olleh", () => {
	expect(solution("hello")).toEqual("olleh");
});

test("should get ''", () => {
	expect(solution("")).toEqual("");
});
