export function sameCase(a: string, b: string): number {
	if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
		return 1;
	}

	if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
		return 1;
	}

	if (a.match(/[A-Z]/) && b.match(/[a-z]/)) {
		return 0;
	}

	if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
		return 0;
	}

	return -1;
}
