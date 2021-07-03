function algorithmLuhn(cardNumber) {
	const reversedSplitNumbers = [...String(cardNumber)].reverse();

	const getOdd = reversedSplitNumbers.filter((_, index) => index % 2).map((digit) => digit * 2);
	const splitUpOdd = String(getOdd).replace(/\d\d/g, (el) => el.split(''));
	const stringToArray = [];
	splitUpOdd.replace(/\d/g, (el) => stringToArray.push(Number(el)));
	const sumOdd = stringToArray.reduce((total, item) => total + item);

	const sumEven = reversedSplitNumbers
		.filter((_, index) => index % 2 === 0)
		.map((digit) => Number(digit))
		.reduce((total, item) => total + item);

	return (sumOdd + sumEven) % 10 === 0;
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

console.log(algorithmLuhn(378734493671000));

export { algorithmLuhn, checkCardNumber };
