import { expect, test } from "bun:test";
import { hello } from "./hello_name_world";

test("should get Hello, John", () => {
	expect(hello("Hello, johN")).toEqual("Hello, John");
});
