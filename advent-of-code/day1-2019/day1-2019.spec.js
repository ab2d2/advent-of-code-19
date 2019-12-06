const { findAnswerForStarOne, calcFuelForSingleMod } = require('./star1-solution');

const { calcFuelForSingleModRecursively, calcTotalFuelForAllModsRecursively } = require('./star2-solution');

describe('day 1 star 1 ', () => {
	it('should return answer given an array of numbers', () => {
		const answer = findAnswerForStarOne([12, 14])
		
		expect(answer).toBe(4)
		
		const answer2 = findAnswerForStarOne([1969, 100756])

		expect(answer2).toBe(34237)
	})
	
	it('should return answer for a single mass', () => {
		const answer = calcFuelForSingleMod(14)

		expect(answer).toBe(2)
	})
	
	it('should return negative fuel', () => {
		const answer = calcFuelForSingleMod(2)

		expect(answer).toBe(-2)
	})
})

describe('day 1 star 2 ', () => {
	it('should return a recursive answer for a single single mass', () => {
		const answer = calcFuelForSingleModRecursively(1969)

		expect(answer).toBe(966)
	})
	it('should return a recursive answer for asingle mass of 100756', () => {
		const answer = calcFuelForSingleModRecursively(100756)

		expect(answer).toBe(50346)
	})
	it('should return a recursive answer for a single  mass of 14', () => {
		const answer = calcFuelForSingleModRecursively(14)

		expect(answer).toBe(2)
	})
	it('should return a recursive answer for a single mass of 2', () => {
		const answer = calcFuelForSingleModRecursively(2)

		expect(answer).toBe(2)
	})
	
	it('should return a total answer for an array of masses', () => {
		expect(calcTotalFuelForAllModsRecursively([1969, 100756])).toBe(51312)
		expect(calcTotalFuelForAllModsRecursively([14, 2])).toBe(4)
	})	
})