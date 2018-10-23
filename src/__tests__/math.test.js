const mathOps = require('../math');

test('adds 1 + 2 to equal 3', () => {
   expect(mathOps.sum(1, 2)).toBe(3);
});

test('adds 8 + 8 to equal 16', () => {
	expect(mathOps.sum(8, 8)).toBe(16);
});

test('adds 8 - 8 to equal 0', () => {
	expect(mathOps.sub(8, 8)).toBe(0);
});

test('adds 8 - 500 to equal 492', () => {
	expect(mathOps.sub(8, 500)).toBe(-492);
});

test('mul 1 * 2 to equal 2', () => {
   expect(mathOps.mul(1, 2)).toBe(2);
});

test('mul 8 * 8 to equal 64', () => {
	expect(mathOps.mul(8, 8)).toBe(64);
 });
