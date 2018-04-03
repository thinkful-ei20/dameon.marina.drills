'use strict';
// function max(numbers) {
// 	const arrLength = numbers.length;

//   if(arrLength > 0) {
//     let maxVal = numbers[0];
//     let count = 0;
//     while(count < arrLength) {
//     	if (maxVal < numbers[count]) {
//         	maxVal = numbers[count];
//     	}
//     	count++;
//     }
//     return maxVal;
//   } else {
//     return undefined;
//   }
// }

// function min(numbers) {
// 	const arrLength = numbers.length;
//   if(numbers.length > 0) {
//     let minVal = numbers[0];
// 	let count = 0;
//     while(count < arrLength) {
//     	if (minVal > numbers[count]) {
//         	minVal = numbers[count];
//     	}
//     	count++;
//     }
//     return minVal;
//   } else {
//     return undefined;
//   }   
// }

// // console.log(max([1,2,3]));
// // console.log(min([1,2,3]));


// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// // tests

// function testFunctionWorks(fn, input, expected) {
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   } else {
//     console.log(
//       'FAILURE: `' +
//         fn.name +
//         '([' +
//         input +
//         '])` should be ' +
//         expected +
//         ' but was ' +
//         fn(input)
//     );
//     return false;
//   }
// }

// function testEmpty(fn) {
//   if (fn([]) === null || fn([]) == undefined) {
//     console.log(`SUCCESS: ${fn.name} works on empty arrays`);
//     return true;
//   } else {
//     console.log(
//       `FAILURE: ${fn.name} should return undefined or null for empty arrays`
//     );
//     return false;
//   }
// }

// (function runTests() {
//   // we'll use the variables in our test cases
//   const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
//   const realMin1 = numList1[3];
//   const realMax1 = numList1[6];
//   const numList2 = [0, 1, 2, 3, 4];
//   const realMin2 = numList2[0];
//   const realMax2 = numList2[4];

//   const testResults = [
//     testFunctionWorks(max, numList1, realMax1),
//     testFunctionWorks(max, numList2, realMax2),
//     testFunctionWorks(min, numList1, realMin1),
//     testFunctionWorks(min, numList2, realMin2),
//     testEmpty(max),
//     testEmpty(min),
//   ];

//   const numPassing = testResults.filter(function(result) {
//     return result;
//   }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// })();


// function average(numbers) {
//   let total = null;
//   numbers.forEach(element => total+= element);
//   return ( total/numbers.length);
//  }
 
//  /* From here down, you are not expected to 
//     understand.... for now :)  
    
    
//     Nothing to see here!
    
//  */
 
//  // tests
 
//  function testFunctionWorks(fn, input, expected) {
//    if (fn(input) === expected) {
//      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//      return true;
//    } else {
//      console.log(
//        'FAILURE: `' +
//          fn.name +
//          '([' +
//          input +
//          '])` should be ' +
//          expected +
//          ' but was ' +
//          fn(input)
//      );
//      return false;
//    }
//  }
 
//  (function runTests() {
//    const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    const correctAns1 = 5.5;
//    const numList2 = [0, -1, 1];
//    const correctAns2 = 0;
 
//    const testResults = [
//      testFunctionWorks(average, numList1, correctAns1),
//      testFunctionWorks(average, numList2, correctAns2),
//    ];
//    const numPassing = testResults.filter(function(result) {
//      return result;
//    }).length;
//    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
//  })();
 

// function repeat(fn, num) {
// 	for (let i = 0;  i < num; i++) {
// 		fn();
// 	}
// }

// function hello() {
// 	console.log('Hello world!');
// }

// function goodBye() {
// 	console.log('Good Buy!');
// }

// repeat(hello, 5);
// repeat(goodBye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // function getName(name) {
// // 	return name[0] === 'R';
// // }

// console.log(filter(myNames, name => name[0] === 'R'));

// // console.log(filteredNames); // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr,fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     if (fn(arr[i])){
//       // console.log(arr.length);
//       newArr.push(arr[i]);
//     }
//   }
//  return newArr;
// }

// function hazardWarningCreator(typeOfWarning) {
// 	let warningCounter = 0;
// 	let times;
// 	return function(location) {
// 		warningCounter++;
// 		warningCounter === 1 ? times = 'time' : times = 'times';
// 		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!\n
// 			The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
// 	}
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const snowWarning = hazardWarningCreator('Snow on the Road');
// const dustWarning = hazardWarningCreator('Dust on the Road');

// rocksWarning('Main St and Pacific Ave');
// snowWarning('Main St and Pacific Ave');
// dustWarning('Main St and Pacific Ave');
// rocksWarning('Main St and Pacific Ave');
// snowWarning('Main St and Pacific Ave');
// dustWarning('Main St and Pacific Ave');


// let turtle = [[0, 0], [0, 5], [-1, -3],  [2, -4], [3, 2]];

// turtle.filter(element =>  element[0]>=0&&element[1]>=0)
//       .map(element => element[0]+element[1])
//       .forEach(element => console.log(element));


function reduce(str) {
	let initialValue = '';
	str.split(' ').forEach(el => initialValue = initialValue.concat(el.length === 3 ? " " : el[el.length-1].toUpperCase()));
	return initialValue;
}

console.log(reduce('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));








