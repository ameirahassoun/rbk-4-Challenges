
// Selection Sort
// Selection sort is a sorting algorithm, specifically an in-place comparison sort which repeatedly selects the next-smallest element and swaps it into place.

// For the first iteration, we find the smallest element in the array and swap it with the first element in the array.
// On the second iteration, we find the next smallest element in the array and swap it with the second element in the array.
// etc.

// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

//   it(': sort it', function() {
//     Array.prototype.sort = null;
//     var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
//     var expected = [18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40].toString();
//     var actual = selectionSort(input).toString();
//     actual.should.equal(expected);});

var selectionSort = function(arr) {
	var temp
	var min 
	for(var i=0; i< arr.length; i++){
		var min = i
		for(var j=i+1; j<arr.length; j++){
			if(arr[j] < arr[min]){
				min =j
			}
		}
				temp = arr[i]
				arr[i] = arr[min]
				arr[min] = temp
	}
	return arr
}
