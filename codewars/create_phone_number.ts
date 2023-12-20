export function createPhoneNumber(numbers: number[]): string {
	const firstset = numbers.slice(0, 3).join("");

	const secset = numbers.slice(3, 6).join("");

	const lastset = numbers.slice(-4).join("");

	return `(${firstset}) ${secset}-${lastset}`;
}
