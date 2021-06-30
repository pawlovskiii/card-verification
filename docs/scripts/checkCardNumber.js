function checkCardNumber(cardNumber) {
	if (typeof cardNumber !== 'number') throw Error('Input must be a number.');
	if (!/^(\d{13}|\d{15,16})$/.test(cardNumber)) throw Error('Input must contains 13, 15 or 16 digits.');
	if (!['50', '51', '52', '53', '54', '55', '4', '34', '37'].includes(String(cardNumber).match(/^\d\d/g).join(''))) throw Error('First two digits must be from range [[51-55], 34, 37, 4]');
	return cardNumber;
}

console.log(checkCardNumber(553456789012313));

export { checkCardNumber };
