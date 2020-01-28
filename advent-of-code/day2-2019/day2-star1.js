function processOpCodes(inputArray) {
	// 99 = program halts 
	// Encountering an unknown opcode means something went wrong.
	// 1 = adds together numbers read from two positions and stores the result in a third position. 
		//The three integers immediately after the opcode tell you these three positions -
			// the first two indicate the positions from which you should read the input values, 
				//and the third indicates the position at which the output should be stored.
	// 2 = works exactly like opcode 1, except it multiplies the two inputs instead of adding them.
	//Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
	
	var myArray = inputArray.slice(0);

	for (i = 0; i < myArray.length; i += 4) {
		
		let ip1 = myArray[myArray[i + 1]];
		let ip2 = myArray[myArray[i + 2]];

		if (myArray[i] == 1) { 
			myArray[myArray[i + 3]] = ip1 + ip2; 
		} else if (myArray[i] == 2) {
			myArray[myArray[i + 3]] = ip1 * ip2;
		} else if (myArray[i] == 99) {
			break; 
		} 
		
	}

	return myArray;
}

module.exports = { processOpCodes };