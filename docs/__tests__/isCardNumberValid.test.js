import { isCardNumberValid } from '../scripts/cardNumberVerifier';
import { cardValidation } from '../scripts/cardValidation.js';

test('should throw an error if the input is the wrong type', () => {
	expect(() => cardValidation('abcde')).toThrow('Input must be a number.');
	expect(() => cardValidation(null)).toThrow('Input must be a number.');
	expect(() => cardValidation([1, 2, 3]).toThrow('Input must be a number.'));
});

test('should return true if the card verification is correct', () => {
	expect(isCardNumberValid(5193080150954111)).toBe(true);
	expect(isCardNumberValid(378282246310005)).toBe(true);
	expect(isCardNumberValid(378734493671000)).toBe(true);
	expect(isCardNumberValid(5105105105105100)).toBe(true);
	expect(isCardNumberValid(2223000048400011)).toBe(true);
	expect(isCardNumberValid(4012888888881881)).toBe(true);
	expect(isCardNumberValid(4222222222222)).toBe(true);
	expect(isCardNumberValid(4111111111111111)).toBe(true);
});
