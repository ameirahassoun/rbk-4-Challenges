// Even Occurrence
// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples
// Input	Output
// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
// arr:
// [ "cat", "dog", "dig", "cat" ]	"cat"


function evenOccurrence (arr) {
  var occ = {}
  var i;
  for ( i=0; i<arr.length; i++){
		console.log( occ[arr[i]] )
    if(occ[arr[i]] === undefined){

      occ[arr[i]] = 1
    }else{
      occ[arr[i]]+=1
    }
    
  }

console.log(occ)

for( i=0; i<arr.length; i++){
  if (occ[arr[i]]%2 ===0){
    return arr[i]
  }
}

return null
  
  // for(var key in occ){
  //   if (occ[key]%2 === 0){
      
  //     if(typeof Number(key) === "number"){
  //       return Number(key)
  //     }else{
  //       return key
  //     }
  //   }
  // }
}