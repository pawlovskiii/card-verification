/* eslint-disable consistent-return */
function algorithmLuhn(cardNumber) {
	const splittedCardNumber = [...String(cardNumber)].reverse();
	const extractOddNumbers = [];
	for (let i = 1; i < splittedCardNumber.length; i += 2) {
		extractOddNumbers.push(splittedCardNumber[i] * 2);
	}
	const breakDownReceivedOddDigits = String(extractOddNumbers).replace(/\d\d/g, (x) => x.split(''));
	const convertingStringToArray = [];
	breakDownReceivedOddDigits.replace(/\d/g, (x) => convertingStringToArray.push(Number(x)));
	const summationOddDigits = convertingStringToArray.reduce((total, item) => total + item);

	const extractEvenNumbers = [];
	for (let i = 0; i < splittedCardNumber.length; i += 2) {
		extractEvenNumbers.push(Number(splittedCardNumber[i]));
	}
	const summationEvenDigits = extractEvenNumbers.reduce((total, item) => total + item);
	const summOddAndEvenDigits = summationOddDigits + summationEvenDigits;

	return summOddAndEvenDigits % 10 === 0;
}

function cardValidation(cardNumber) {
	if (typeof cardNumber !== 'number') throw Error('Input must be a number.');
	if (!/^(\d{13}|\d{15,16})$/.test(cardNumber)) throw Error('Input must contains 13, 15 or 16 digits.');
	if (!['51', '52', '53', '54', '55', '22', '4', '34', '37', '40', '41', '42'].includes(String(cardNumber).match(/^\d\d/g).join(''))) throw Error('First two digits must be from range [[51-55], [40-42], 34, 37, 22, 4]');
	if (!algorithmLuhn(cardNumber)) throw Error('Invalid card number.');
	return cardNumber;
}

function checkCardNumber(cardNumber) {
	cardValidation(cardNumber);
	if (String(cardNumber).length === 16 && ['51', '52', '53', '54', '55', '22'].includes(String(cardNumber).match(/^\d\d/g).join(''))) return 'Mastercard';
	if (/^(\d{13}|\d{16})$/.test(cardNumber) && [...String(cardNumber)][0] === '4') return 'Visa';
	if (String(cardNumber).length === 15 && ['34', '37'].includes(String(cardNumber).match(/^\d\d/g).join(''))) return 'American Express';
}

export { algorithmLuhn, checkCardNumber };
