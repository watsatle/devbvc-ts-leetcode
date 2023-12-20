import { expect, test } from "bun:test";
import { usdcny } from "./usd_cny";
// expect().toEqual()

test("should get  101.25 Chinese Yuan", () => {
	expect(usdcny(15)).toEqual("101.25 Chinese Yuan");
});

test("should get  3138.75 Chinese Yuan", () => {
	expect(usdcny(465)).toEqual("3138.75 Chinese Yuan");
});

test("should get  675 Chinese Yuan", () => {
	expect(usdcny(100)).toEqual("675 Chinese Yuan");
});

test("should get  21924 Chinese Yuan", () => {
	expect(usdcny(3248)).toEqual("21924 Chinese Yuan");
});
