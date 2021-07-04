import { checkCardProvider } from '../scripts/checkCardProvider.js';

test('should throw an error if the input is the wrong type', () => {
	expect(() => checkCardProvider('abcde')).toThrow('Input must be a number.');
	expect(() => checkCardProvider(null)).toThrow('Input must be a number.');
	expect(() => checkCardProvider([1, 2, 3]).toThrow('Input must be a number.'));
});

test(`should return the name of the card's provider`, () => {
	expect(checkCardProvider(378282246310005)).toBe('American Express');
	expect(checkCardProvider(378734493671000)).toBe('American Express');
	expect(checkCardProvider(2221000000000009)).toBe('Mastercard');
	expect(checkCardProvider(5555555555554444)).toBe('Mastercard');
	expect(checkCardProvider(5105105105105100)).toBe('Mastercard');
	expect(checkCardProvider(4111111111111111)).toBe('Visa');
	expect(checkCardProvider(4012888888881881)).toBe('Visa');
	expect(checkCardProvider(4222222222222)).toBe('Visa');
});
