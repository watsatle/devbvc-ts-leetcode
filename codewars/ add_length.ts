//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/typescript

export function addLength(str: string): string[] {
	const toSplit = str.split(" ");
	const toLength = toSplit.map((word) => {
		return word.length;
	});

	return [`${toSplit} ${toLength}`];
}
