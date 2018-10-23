perc = (a, b) => (a / 100 * b);

simpleInterst = (initialValue, tax, months) => {
	let inc = perc(tax, initialValue);
	let i = 0;
	let result = 0;
	while( i < months) {
		result += inc;
		++i;
	}
	return result;
};

module.exports = { perc, simpleInterst };