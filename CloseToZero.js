//Q : Find the set of two numbers whose sum is closest to zero

function CloseToZero(numbersArray){
	var numbers = numbersArray;
	//Sort the numbers : using Selection sort or any sorting algorithm
	selectionSort(numbers);

	//let the numbers be x,y and sum is sum;
	var x,y,sum = Number.POSITIVE_INFINITY;

	for(var i=0;i<numbers.length-1;i++){

		for(var j=i+1;j<numbers.length;j++){

			//Get those number whose sum is close to zero
			if(Math.abs(sum)>Math.abs(numbers[i]+numbers[j])){
				x = numbers[i];
				y = numbers[j];
				sum = x + y;
			}
		}
	}

	return [x,y];
}

function selectionSort(numbers){
	var tempNumbers = numbers;

	for(var i=1;i<tempNumbers.length;i++){
		var item = tempNumbers[i]; //Pick a value from the array
		
		var t = i-1; //Set a pointer just before the picked value
		while(tempNumbers[t]>item) //Compare if item is smaller than the previous value
		{
			tempNumbers[t+1] = tempNumbers[t]; //Shift the value to next compartment
			t--; //move pointer backward
		}
		tempNumbers[t+1] = item; //if item is bigger than the rest of the preivous values, place it at the right position
	}
	return tempNumbers;
}

console.log(CloseToZero([2,11,-6,-9,4,3,7]));