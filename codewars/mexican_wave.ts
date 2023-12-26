//split('')
//loop
//join('')

export function wave(str: string): Array<string> {
	const strCopy = str.split("").map((x, index) => {
		const w = str.split("");
		w[index] = x.toUpperCase();

		return w.join("");
	});

	return [`${strCopy}`];
}
