import { checkCardProvider } from '../scripts/checkCardProvider.js';

describe(`Should return the name of the card's provider`, () => {
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

describe(`Checking whether the user input the provider, that we don't support`, () => {
	test(`should throw an error if card number still doesn't meet the requirements`, () => {
		expect(() => checkCardProvider(6011000990139424)).toThrow('Wrong card provider.');
		expect(() => checkCardProvider(3566002020360505)).toThrow('Wrong card provider.');
		expect(() => checkCardProvider(30569309025904)).toThrow('Wrong card provider.');
		expect(() => checkCardProvider(6011111111111117)).toThrow('Wrong card provider.');
	});
});
