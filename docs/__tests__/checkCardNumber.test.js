import { checkCardNumber } from '../scripts/checkCardNumber.js';

test('should throw an error if the input is the wrong type', () => {
	expect(() => checkCardNumber('abcde')).toThrow('Input must be a number.');
	expect(() => checkCardNumber(null)).toThrow('Input must be a number.');
	expect(() => checkCardNumber([1, 2, 3]).toThrow('Input must be a number.'));
});

test(`should return the name of the card's provider`, () => {
	expect(checkCardNumber(378282246310005)).toBe('American Express');
	expect(checkCardNumber(378734493671000)).toBe('American Express');
	expect(checkCardNumber(2221000000000009)).toBe('Mastercard');
	expect(checkCardNumber(5555555555554444)).toBe('Mastercard');
	expect(checkCardNumber(5105105105105100)).toBe('Mastercard');
	expect(checkCardNumber(4111111111111111)).toBe('Visa');
	expect(checkCardNumber(4012888888881881)).toBe('Visa');
	expect(checkCardNumber(4222222222222)).toBe('Visa');
});
