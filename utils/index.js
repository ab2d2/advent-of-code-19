var fs = require('fs');
const https = require('https');
const path = require('path');


const readSimpleFileIntoArrayOfNumber = (pathString, callback) => {
	const dataPath = path.resolve(__dirname, '../advent-of-code/', pathString)
	fs.readFile(dataPath, 'utf8', callback)
}

const makeAPICall = (sessionCookie, callbackToHandleData) => {
	const options = {
		hostname: 'adventofcode.com',
		port: 443,
		path: '/2019/day/2/input',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'cookie': sessionCookie
		}
	}

	https.get(options, (resp) => {
		console.log(`statusCode: ${resp.statusCode}`)
		// A chunk of data has been recieved.
		let data = '';
		resp.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received
		resp.on('end', () => callbackToHandleData(data));

	}).on("error", (err) => {
		console.log("Error: " + err.message);
	});
}

module.exports = { readSimpleFileIntoArrayOfNumber, makeAPICall }