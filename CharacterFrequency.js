// Character Frequency

// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input	Output
// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]


function characterFrequency (string) {
	var obj = {}
	var arr = []
	var temp

  	for(var i=0; i<string.length; i++){
  		if(obj[string[i]] === undefined){
  			obj[string[i]] = 1
  		}else{
  			obj[string[i]] += 1
  		}
  	}
    //console.log(obj)
  
    for(var key in obj){
    	arr.push([key,obj[key]])
    }
    //console.log(arr)
  
    for ( var k = 0 ; k < arr.length-1; k++){
    	for(var i=0; i<arr.length-1; i++){
    		if (arr[i][1] < arr[i+1][1]){
    			temp = arr[i] 
    			arr[i]= arr[i+1]
    			arr[i+1]= temp
    		}
    		//if (arr[i][1] === arr[i+1][1]  && arr[i][0] > arr[i+1][0]){} .. the same 
    		if (arr[i][1] === arr[i+1][1]  && arr[i][0].charCodeAt(0) >  arr[i+1][0].charCodeAt(0)){
    				temp = arr[i] 
    				arr[i]= arr[i+1]
    				arr[i+1]= temp
    		}
    	}
    }
 return arr
}