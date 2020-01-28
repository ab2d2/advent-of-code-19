const { processOpCodes } = require('./day2-star1')

/** find 2 numbers (noun & verb) such that:
 * input * noun + verb = expectedOutput
 * where, 99 <= noun & verb >=0
 */
const findNounAndVerb = (input, expectedOutput) => {
	let noun;
	let verb;
	let result;
	
	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < 100; j++) {
			noun = input[1] = i
			verb = input[2] = j
			result = processOpCodes(input);
			
			if (result[0] == expectedOutput) {
				return 100 * noun + verb;
			}
		}
	}
	
	return result
}
module.exports = { findNounAndVerb };