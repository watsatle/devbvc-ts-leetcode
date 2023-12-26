//toarr
//reverse
//tostr

export function solution(str: string): string {
	const toArr = str.split("");
	const reverse = toArr.reverse().join("");

	return reverse; // reverse this!
}

// [...str].reverse().join('');
