import { algorithmLuhn } from './checkCardNumber.js';

test('should return true if the card verification is correct', () => {
	expect(algorithmLuhn(5193080150954111)).toBe(true);
	expect(algorithmLuhn(378282246310005)).toBe(true);
	expect(algorithmLuhn(378734493671000)).toBe(true);
	expect(algorithmLuhn(5105105105105100)).toBe(true);
	expect(algorithmLuhn(2223000048400011)).toBe(true);
	expect(algorithmLuhn(4012888888881881)).toBe(true);
	expect(algorithmLuhn(4222222222222)).toBe(true);
	expect(algorithmLuhn(4111111111111111)).toBe(true);
});
