// 1. Write a function that takes three arguments (numbers), adds them together and checks if the result is divisible by 3;
// If it is divisible by three return true, if not return false

function add(num1,num2,num3){
	if((num1+num2+num3)%3==0){
		return true;
	}else{
		return false
	}
}

// 2. Create a function that takes two arrays, each having elements that are numbers.
//Compare the sum of the numbers in each array. Return the array with the largest sum:

// var array1 = [1,54,65,345,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
// var array2 = [ 123, 234,789,56,345,65,34,456,23,543,2,345,23,45,2,234,34,234,234,34,234, 434]

var numArray1 = [1,54,65,345,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
var numArray2 = [ 123, 234,789,56,345,65,34,456,23,543,2,345,23,45,2,234,34,234,234,34,234, 434]
function comparingTwoArrays(numArray1,numArray2){
	var totalofArray1 = 0;
	var totalofArray2 = 0;
	for(let i = 0; i < numArray1.length; i++){
		totalofArray1 += numArray1[i];
	}
	for(let i = 0; i < numArray2.length; i++){
		totalofArray2 += numArray2[i];
	}
	if(totalofArray1 < totalofArray2){
		return numArray2;
	} else if(totalofArray1 > totalofArray2){
		return numArray1;
	}
}

// 3. Write a program that prints the numbers from 1 to 100. 
//For multiples of three print “Rick” instead of the number and for the multiples of five print “Roll”.
// For numbers which are multiples of both three and five print "RickRoll".

 function RickRoll(){
 	for(let i = 1; i <= 100;i++){
 		if((i%3)==0 && (i%5)==0){
 			console.log("RickRoll");
 		}else if((i%5)==0 && (i%3)!==0){
 			console.log("Roll");
 		}else if((i%3)==0 && (i%5)!==0){
 			console.log("Rick")
 		}
 	}
 }

// 4. Write a function that takes an array of numbers and returns the highest number in this array.

// ex.  -> [1,2,3,4,5,6,7,8,9,10,15,16,7,6] = should return 16

function highestNumberinArray(numArray){
	var highestNum = 0;
	for (let i = 0; i<numArray.length;i++){
		if(highestNum < numArray[i]){
			highestNum = numArray[i];
		}
	}
	return highestNum;
}