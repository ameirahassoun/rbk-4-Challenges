// Deep Equality
// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.


deepEquals = function(a, b){
  
  if( a === b) {return true}
  if(!a || !b) {return false}
  if(!(a instanceof Object) || !(b instanceof Object)) {return false}
  
  var aKeys = Object.keys(a)
  var bKeys = Object.keys(b)
  
  if(aKeys.length !== bKeys.length) {return false}
  
  for(var key in a){
    if (Array.isArray(a[key]) !== Array.isArray(b[key])){return false}
    if(!deepEquals(a[key],b[key])) {return false}
    
  }
  return true
   
 }
