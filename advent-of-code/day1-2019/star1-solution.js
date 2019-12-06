function findAnswerForStarOne(spaceModules) {
	return spaceModules
		.map(mod => {
			return calcFuelForSingleMod(mod)
		})
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue
		})
}

function calcFuelForSingleMod(mod) {
	return Math.floor(mod / 3) - 2
}

module.exports = { calcFuelForSingleMod, findAnswerForStarOne }