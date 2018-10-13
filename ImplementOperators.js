// **ImplementOperators**

// Write three functions to replace the multiply, divide, and modulo operators. The only operators you may only use in your solution are addition and subtraction. Your functions will only have to handle integer math.

// Note: Don’t put any complex math in the comments in your code, or the tests may fail.

// EXAMPLES:

// multiply(5, 2) === 10

// divide(5, 2) === 2

// modulo(5, 2) === 1

var multiply = function(x, y) {
  var one = x
  var two =y
  if(x<0){x = -x} 
  if(y<0){y = -y}
  var counter = y
  var start = x
  while(counter > 1){
    x += start
    counter--
  }
  if(one>0 && two<0 || one<0 && two>0){return -x}
  return x
};

var divide = function(x, y) {
  if (y===0){ return NaN }
  var one = x
  var two =y
  if(x<0){x = -x} 
  if(y<0){y = -y}
  var remainder = x-y
  var counter = 0
  if(remainder > 0){
    counter = 1
    while(remainder >= y){
      remainder -= y
      counter++
    }
    if(one>0 && two<0 || one<0 && two>0 ){return -counter}
    return counter
  }
  return 0
}  
  
var modulo = function(x, y) {
  if(x === 0 && y ===0){return NaN}
  var remainder = x
  if(x>= 0 && y>0){
    while((remainder-y) >= 0 ){
      remainder -= y
    }
  }else if (x< 0 && y<0){
    while((remainder-y) <= 0 ){
      remainder += y
    }
  }
  else {return x}
  return remainder
};