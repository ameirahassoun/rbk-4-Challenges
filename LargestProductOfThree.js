// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples
// Input	Output
// array:
// [ 2, 1, 3, 7 ]	42
// array:
// [ 0, 2, 3 ]	0


function largestProductOfThree (array) {
  
// 	var arr = array.sort(function(a, b){return a - b})
// 	var firstProduct = arr[0]*arr[1]*arr[arr.length-1]
// 	var secondProduct = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
// 	return Math.max(firstProduct,secondProduct)
	
	
	
	var sortedArray = array.sort(function(a, b){return a - b})
	
	  if (sortedArray[0] < 0 && sortedArray[1]<0 && sortedArray[sortedArray.length-1] > 0){
	    
	    return sortedArray[0]*sortedArray[1]*sortedArray[sortedArray.length-1]
	  }
	  
	  return sortedArray[sortedArray.length-1]*sortedArray[sortedArray.length-2]*sortedArray[sortedArray.length-3]
	  
	
}

