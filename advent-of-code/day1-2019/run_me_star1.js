const utils =  require('../../utils/readFromDisk.js')
const findAnswerForStarOne = require('./star1-solution').findAnswerForStarOne


utils.readSimpleFileIntoArrayOfNumber('data_star1', completeStarOne)

function completeStarOne(err, fsResponse) {
	if (err) throw err
	const dataArray = fsResponse.split('\n').map(string => parseInt(string));
	console.log("Answer for start 1 is: ", findAnswerForStarOne(dataArray))
}
