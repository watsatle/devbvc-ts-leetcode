import { expect, test } from "bun:test";
import { capitalizeWord } from "./capitalization";
// expect().toEqual()

test("should get World", () => {
	expect(capitalizeWord("world")).toEqual("World");
});
test("should get Glasswear", () => {
	expect(capitalizeWord("glasswear")).toEqual("Glasswear");
});
