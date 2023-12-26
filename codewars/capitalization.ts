// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/typescript

export function capitalizeWord(word: string): string {
	const toWord = word.substring(0, 1).toUpperCase() + word.substring(1);
	return toWord;
}

// return word.replace(word[0], word[0].toUpperCase());

// => word.replace(/./, word[0].toUpperCase());
