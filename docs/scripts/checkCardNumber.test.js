import { checkCardNumber } from './checkCardNumber.js';

test('should throw an error if the input is the wrong type', () => {
	expect(() => checkCardNumber('abcde')).toThrow('Input must be a number.');
	expect(() => checkCardNumber(null)).toThrow('Input must be a number.');
	expect(() => checkCardNumber([1, 2, 3]).toThrow('Input must be a number.'));
});

test('should throw an error if the input contains the wrong number of digits', () => {
	expect(() => checkCardNumber(102030405060)).toThrow(
		'Input must contains 13, 15 or 16 digits.'
	);
	expect(() => checkCardNumber(12345678912345678)).toThrow(
		'Input must contains 13, 15 or 16 digits.'
	);
	expect(() => checkCardNumber(12345678912345)).toThrow(
		'Input must contains 13, 15 or 16 digits.'
	);
});

test('should throw an error if the first two digits are not from certain range', () => {
	expect(() => checkCardNumber(563456789012313)).toThrow(
		'First two digits must be from range [[51-55], 34, 37, 4]'
	);
	expect(() => checkCardNumber(5995840321129)).toThrow(
		'First two digits must be from range [[51-55], 34, 37, 4]'
	);
	expect(() => checkCardNumber(3503948576312345)).toThrow(
		'First two digits must be from range [[51-55], 34, 37, 4]'
	);
});
