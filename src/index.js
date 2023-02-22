module.exports = function toReadable (number) {
	if (number === 0) {
		return 'zero'
	}
	const hand = Math.floor(number / 100)
	const dec = Number(Math.floor((number % 100) / 10).toString() + '0')
	const numb = ((number % 100) % 10);
	
	function textNumber (num) {
		if (num === 0) {
			num = '';
		} if (num === 1) {
			num = 'one';
		} if (num === 2) {
			num = 'two';
		} if (num === 3) {
			num = 'three';
		} if (num === 4) {
			num = 'four';
		} if (num === 5) {
			num = 'five';
		} if (num === 6) {
			num = 'six'
		} if (num === 7) {
			num = 'seven';
		} if (num === 8) {
			num = 'eight';
		} if (num === 9) {
			num = 'nine';
		} if (num === 10) {
			num = 'ten';
		} if (num === 20) {
			num = 'twenty';
		} if (num === 30) {
			num = 'thirty';
		} if (num === 40) {
			num = 'forty';
		} if (num === 50) {
			num = 'fifty';
		} if (num === 60) {
			num = 'sixty';
		} if (num === 70) {
			num = 'seventy';
		} if (num === 80) {
			num = 'eighty';
		} if (num === 90) {
			num = 'ninety';
		} return num;
	}
 
	let numberString;

	if (number.toString().length === 3) {
		numberString = `${textNumber(hand)} hundred ${textNumber(dec)} ${textNumber(numb)}`;
	} if (number.toString().length === 2) {
		numberString = `${textNumber(dec)} ${textNumber(numb)}`;
	} if (number.toString().length === 1) {
		numberString = `${textNumber(numb)}`;
	}
	
	let newNumberString = numberString.replace("  ", " ").trim();
	
	let result;

	if (newNumberString.includes('ten one') === true) {
		result = newNumberString.replace('ten one', 'eleven');
	} else if (newNumberString.includes('ten two') === true) {
		result = newNumberString.replace('ten two', 'twelve');
	} else if (newNumberString.includes('ten three') === true) {
		result = newNumberString.replace('ten three', 'thirteen');
	} else if (newNumberString.includes('ten four') === true) {
		result = newNumberString.replace('ten four', 'fourteen');
	} else if (newNumberString.includes('ten five') === true) {
		result = newNumberString.replace('ten five', 'fifteen');
	} else if (newNumberString.includes('ten six') === true) {
		result = newNumberString.replace('ten six', 'sixteen');
	} else if (newNumberString.includes('ten seven') === true) {
		result = newNumberString.replace('ten seven', 'seventeen');
	}  else if (newNumberString.includes('ten eight') === true) {
		result = newNumberString.replace('ten eight', 'eighteen');
	} else if (newNumberString.includes('ten nine') === true) {
		result = newNumberString.replace('ten nine', 'nineteen');
	} else (result = newNumberString);

	return result;
}

