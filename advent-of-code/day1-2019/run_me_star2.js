const utils = require('../../utils/readFromDisk.js')
const {calcTotalFuelForAllModsRecursively} = require('./star2-solution')


utils.readSimpleFileIntoArrayOfNumber('data_star2', completeStarTwo)

function completeStarTwo(err, fsResponse) {
	if (err) throw err
	const dataArray = fsResponse.split('\n').map(string => parseInt(string));
	console.log("Answer for start 2 is: ", calcTotalFuelForAllModsRecursively(dataArray))
}
