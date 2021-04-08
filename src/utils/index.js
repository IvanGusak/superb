export function delay(result = 'No data', ms = 300) {

	return new Promise(resolve => setTimeout(() => {
		resolve(result)
	}, ms));
}


export function validateRange(timeframe = [], newRange = {}) {
	return timeframe.some(({ start, end }) => (start < newRange.end)  &&  (end > newRange.start))
}