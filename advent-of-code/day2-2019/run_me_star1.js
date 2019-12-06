const dotenv = require('dotenv');
dotenv.config();

const { makeAPICall } = require("../../utils/index");

makeAPICall(process.env.SESSION_KEY, handleDataFromAPI)

function handleDataFromAPI(data) {
	let inputFromAdventOfCode = data.split(',')
	console.log("recieved ", inputFromAdventOfCode.length, " items")
}
