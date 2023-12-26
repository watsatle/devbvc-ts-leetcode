// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/typescript

//toArr => split ['','']
//countString each word and add length

export function addLength(str: string): string[] {
	const toAtt = str.split(" ");

	return toAtt.map((word) => `${word} ${word.length}`);
}
