const financialOps = require('../financial');

test('10 percent of 100 equal 10', () => {
	expect(financialOps.perc(10, 100)).toBe(10);
});

test('50 percent of 14 equal 7', () => {
	expect(financialOps.perc(50, 14)).toBe(7);
});

test('simple interest of initial of 1 in 1 month to intial value of 100 equal to 1', () => {
	expect(financialOps.simpleInterst(100, 1, 1)).toBe(1);
});

test('simple interest of initial of 1 in 5 months to intial value of 100 equal to 5', () => {
	expect(financialOps.simpleInterst(100, 1, 5)).toBe(5);
});