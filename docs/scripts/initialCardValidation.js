import { isCardNumberValid } from './cardNumberVerifier.js';

function initialCardValidation(cardNumber) {
	if (typeof cardNumber !== 'number') throw Error('Input must be a number.');
	if (!isCardNumberValid(cardNumber)) throw Error('Invalid card number.');
	return cardNumber;
}

export { initialCardValidation };
