const blaFuncs = require('../simpleFunc');

test('teste 1', () => {
	expect(blaFuncs.testFunc(1)).toBe(true);
});

test('teste 2', () => {
	expect(blaFuncs.testFunc(2)).toBe(false);
});