export function usdcny(usd: number): string {
	const str = usd;
	const cnyExchange = (str * 6.75).toFixed(2);

	return `${cnyExchange} Chinese Yuan`;
}
