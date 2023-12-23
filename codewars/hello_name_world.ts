//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

export function hello(name = ""): string {
	return `Hello, ${name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : "World"}!`;
}
