export function isUpperCase(str: string) {
	if (str.match(/[a-z]/g)) return false;
	if (str.match(/[A-Z]/g)) return true;
}

//   ez version

//   return str === str.toUpperCase();
//   return str.match(/[a-z]/)  === null;
