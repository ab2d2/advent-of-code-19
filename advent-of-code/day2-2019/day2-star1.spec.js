const { processOpCodes } = require('./day2-star1')

describe('day2 star 1 program calculations', () => {
	it('should return correct final state when adding', () => {
		expect(processOpCodes([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99])
	})
	it('should return correct final state when multiplying', () => {
		expect(processOpCodes([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99])
	})
	it('should return correct final state of array > 5', () => {
		expect(processOpCodes([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
	})
	it('should return correct final state of array > 5', () => {
		expect(processOpCodes([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).toEqual([3500,9,10,70,2,3,11,0,99,30,40,50])
	})
})
