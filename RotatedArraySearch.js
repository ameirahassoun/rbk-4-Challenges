// Rotated Array Search
// If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.



// Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.



// You've got Helpers! (click to view code)
// myHelper(x, y)
// Array.prototype.indexOf=null
// Array.prototype.includes=null
// Examples
// Input	Output
// rotated:
// [ 4, 5, 6, 0, 1, 2, 3 ]
// target:
// 2	5
// rotated:
// [ 4, 5, 6, 0, 1, 2, 3 ]
// target:
// 100	-1


function rotatedArraySearch (rotated, target) {
  var min = 0
  var max = rotated.length - 1;

  while (min <= max) {
    var mid = Math.floor( (max + min) / 2 );

    if (rotated[mid] === target) {
      return mid;

// if we didn,t reach the pivot point 
// check the right side or the left side 

    } else if (rotated[min] <= rotated[mid]) {
      if (rotated[min] <= target && target < rotated[mid]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }


   // rotated[min] >= rotated[mid]: "pivot point" where the sorting doesn't continue across this point
   // it's in the left side or the right side 

    } else {  
      if (rotated[mid] < target && target <= rotated[max]) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

  }// while closing

  return - 1;
};