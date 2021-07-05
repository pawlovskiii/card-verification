import { checkCardProvider } from '../scripts/checkCardProvider.js';

describe(`should return the name of the card's provider`, () => {
	test('American Express', () => {
		expect(checkCardProvider(378282246310005)).toBe('American Express');
		expect(checkCardProvider(378734493671000)).toBe('American Express');
	});
	test('Mastercard', () => {
		expect(checkCardProvider(2221000000000009)).toBe('Mastercard');
		expect(checkCardProvider(5555555555554444)).toBe('Mastercard');
		expect(checkCardProvider(5105105105105100)).toBe('Mastercard');
	});
	test('Visa', () => {
		expect(checkCardProvider(4111111111111111)).toBe('Visa');
		expect(checkCardProvider(4012888888881881)).toBe('Visa');
		expect(checkCardProvider(4222222222222)).toBe('Visa');
	});
});
