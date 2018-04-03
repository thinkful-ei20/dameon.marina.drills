'use strict';
function max(numbers) {
	const arrLength = numbers.length;

  if(arrLength > 0) {
    let maxVal = numbers[0];
    let count = 0;
    while(count < arrLength) {
    	if (maxVal < numbers[count]) {
        	maxVal = numbers[count];
    	}
    	count++;
    }
    return maxVal;
  } else {
    return undefined;
  }
}

function min(numbers) {
	const arrLength = numbers.length;
  if(numbers.length > 0) {
    let minVal = numbers[0];
	let count = 0;
    while(count < arrLength) {
    	if (minVal > numbers[count]) {
        	minVal = numbers[count];
    	}
    	count++;
    }
    return minVal;
  } else {
    return undefined;
  }   
}

console.log(max([1,2,3]));
console.log(min([1,2,3]));

