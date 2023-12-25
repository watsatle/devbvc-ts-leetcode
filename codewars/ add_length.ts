//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/typescript

export function addLength(str: string): string[] {
	const results = [""];
	const chars = str.split(" ").forEach((item) => {
		results[item] = item.length;
	});

	return results;
}
