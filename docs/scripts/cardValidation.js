import { checkCardProvider } from './checkCardProvider.js';
import { isCardNumberValid } from './cardNumberVerifier.js';

function cardValidation(cardNumber) {
	if (typeof cardNumber !== 'number') throw Error('Input must be a number.');
	if (!isCardNumberValid(cardNumber)) throw Error('Invalid card number.');
	return checkCardProvider(cardNumber);
}

export { cardValidation };
