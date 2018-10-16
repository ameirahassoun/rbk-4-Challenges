
// Is Subset Of
// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(array) {
  
 
  var check = true
  
  for (var i = 0 ; i < this.length ; i++){
    
        if(array.indexOf(this[i]) != -1){

          check = check && true

        } else {

          check = false

        }


    } 
     return check
  }
    