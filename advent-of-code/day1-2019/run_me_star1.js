const { readSimpleFileIntoArrayOfNumber} =  require('../../utils')
const findAnswerForStarOne = require('./star1-solution').findAnswerForStarOne


readSimpleFileIntoArrayOfNumber('day1-2019/data_star1', completeStarOne)

function completeStarOne(err, fsResponse) {
	if (err) throw err
	const dataArray = fsResponse.split('\n').map(string => parseInt(string));
	console.log("Answer for start 1 is: ", findAnswerForStarOne(dataArray))
}
