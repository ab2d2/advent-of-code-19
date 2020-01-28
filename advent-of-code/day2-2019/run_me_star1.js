const dotenv = require('dotenv');
dotenv.config();
const { processOpCodes } = require('./day2-star1')

const { makeAPICall } = require("../../utils/index");
makeAPICall(process.env.SESSION_KEY, handleDataFromAPI)

function handleDataFromAPI(data) {
	const inputFromAdventOfCode = data.split(',')
	// console.log("recieved ", inputFromAdventOfCode.length, " items")
	const answer = processOpCodes(inputFromAdventOfCode)
	console.log("answer for day2 star 1 is: ", answer)
}
