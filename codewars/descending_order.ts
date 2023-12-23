//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript
//more -> less
//to []
//sort
//to num

export function descendingOrder(n: number): number {
	const digits = Array.from(String(n), Number);
	digits.sort((a, b) => b - a);
	const int = Number(digits.join(""));
	return int;
}
