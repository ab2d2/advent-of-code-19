const dotenv = require('dotenv');
dotenv.config();
const { findNounAndVerb } = require('./day2-star2')

const { makeAPICall } = require("../../utils/index");
makeAPICall(process.env.SESSION_KEY, handleDataFromAPI)

function handleDataFromAPI(data) {
	const inputFromAdventOfCode = data.split(',').map(i => Number(i))
	console.log("recieved ", inputFromAdventOfCode.length, " items")

	const answer = findNounAndVerb(inputFromAdventOfCode)

	console.log("answer for day2 star 2 is: ", answer)
}
