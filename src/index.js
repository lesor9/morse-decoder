const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let str = ''; 

	let startStr = 0;
 	let endStr = 10;

 	let midStr = '';
 	let finalStr = '';

 	for(let i = 0; i < expr.length / 10; i++) {

 		str = expr.slice(startStr, endStr);

 		for (let j = 0; j < str.length; j += 2) {
 			if (str[j] + str[j+1] == '10') {
 				midStr += '.';
 			} 

 			if (str[j] + str [j+1] == '11') {
 				midStr += '-';
 			}

 			if (str[j] + str [j+1] == '**') {
 				midStr += '*';
 				break;
 			}
 		}

 		if (midStr == '*') {
 			finalStr +=  ' ';
 		} else {
 			finalStr += MORSE_TABLE[midStr];
 		}

 		midStr = '';
 		startStr += 10;
 		endStr += 10;	
 	}

    return finalStr;
}

module.exports = {
    decode
}