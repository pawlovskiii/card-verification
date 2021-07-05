/* Luhn's Algorithm */
function isCardNumberValid(cardNumber) {
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

export { isCardNumberValid };
