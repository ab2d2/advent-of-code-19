const dotenv = require('dotenv');
dotenv.config();
const { processOpCodes } = require('./day2-star1')

const { makeAPICall } = require("../../utils/index");
makeAPICall(process.env.SESSION_KEY, handleDataFromAPI)

function handleDataFromAPI(data) {
	const inputFromAdventOfCode = data.split(',').map(i => Number(i))
	console.log("recieved ", inputFromAdventOfCode.length, " items")

	inputFromAdventOfCode[1] = 12;
	inputFromAdventOfCode[2] = 2

	const answer = processOpCodes(inputFromAdventOfCode)

	console.log("answer for day2 star 1 is: ", answer[0])
}
