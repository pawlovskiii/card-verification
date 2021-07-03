function algorithmLuhn(cardNumber) {
	const splittedCardNumber = [...String(cardNumber)].reverse();

	const extractOddNumbers = [];
	for (let i = 1; i < splittedCardNumber.length; i += 2) {
		extractOddNumbers.push(splittedCardNumber[i] * 2);
	}
	const breakDownReceivedOddDigits = String(extractOddNumbers).replace(/\d\d/g, (el) => el.split(''));
	const convertingStringToArray = [];
	breakDownReceivedOddDigits.replace(/\d/g, (el) => convertingStringToArray.push(Number(el)));
	const summationOddDigits = convertingStringToArray.reduce((total, item) => total + item);

	const extractEvenNumbers = splittedCardNumber
		.filter((_, index) => index % 2 === 0)
		.map((digit) => Number(digit));
	const summationEvenDigits = extractEvenNumbers.reduce((total, item) => total + item);

	const summOddAndEvenDigits = summationOddDigits + summationEvenDigits;
	return summOddAndEvenDigits % 10 === 0;
}

function inputCardValidation(cardNumber) {
	if (typeof cardNumber !== 'number') throw Error('Input must be a number.');
	if (!algorithmLuhn(cardNumber)) throw Error('Invalid card number.');
	return cardNumber;
}

function checkCardNumber(cardNumber) {
	inputCardValidation(cardNumber);
	if (String(cardNumber).length === 16 && /^5[1-5]|22/.test(cardNumber)) return 'Mastercard';
	if (/^(\d{13}|\d{16})$/.test(cardNumber) && [...String(cardNumber)][0] === '4') return 'Visa';
	if (String(cardNumber).length === 15 && /^34|37/.test(cardNumber)) return 'American Express';
	throw Error('Invalid card number.');
}

export { algorithmLuhn, checkCardNumber };
