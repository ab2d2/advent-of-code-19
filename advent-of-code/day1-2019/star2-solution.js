const calcFuelForSingleMod = require('./star1-solution').calcFuelForSingleMod


function calcFuelForSingleModRecursively(input) {
	const firstIteration = calcFuelForSingleMod(input)									
	return firstIteration <= 0 ? input : _calcFuelForSingleModRecursively(firstIteration)
}

function _calcFuelForSingleModRecursively(input) {
	let x = calcFuelForSingleMod(input);
	let total = input;
	if(input <= 8 ) {					
		return total;
	} else {
		return total += _calcFuelForSingleModRecursively(x);
	}
}

function calcTotalFuelForAllModsRecursively(inputArrayOfMods) {
	return inputArrayOfMods.map(mod => calcFuelForSingleModRecursively(mod)).reduce((accum, current) => accum + current)
}


module.exports = { calcFuelForSingleModRecursively, calcTotalFuelForAllModsRecursively };