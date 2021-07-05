function isMasterCard(cardNumber) {
	const isLength = String(cardNumber).length === 16;
	const isPrefix = /^5[1-5]|22/.test(cardNumber);
	return isLength && isPrefix;
}

function isVisa(cardNumber) {
	const isLength = /^(\d{13}|\d{16})$/.test(cardNumber);
	const isPrefix = String(cardNumber).startsWith('4');
	return isLength && isPrefix;
}

function isAmEx(cardNumber) {
	const isLength = String(cardNumber).length === 15;
	const isPrefix = /^34|37/.test(cardNumber);
	return isLength && isPrefix;
}

function checkCardProvider(cardNumber) {
	if (isMasterCard(cardNumber)) return 'Mastercard';
	if (isVisa(cardNumber)) return 'Visa';
	if (isAmEx(cardNumber)) return 'American Express';
	throw Error('Wrong card provider.');
}

export { checkCardProvider };
