// **Binary To Decimal**
// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n:
// "0"	0
// n:
// "1"	1
// n:
// "10"	2
// n:
// "11"	3
// n:
// "100"	4
// n:
// "101"	5
// n:
// "110"	6
// n:
// "111"	7
// n:
// "1000"	8


// solution:

function binaryToDecimal (n) {
 var res=0 
 var num 
 
     for(var i=0; i< n.length; i++){
         num = parseInt(n[i])
        if(num === 1){
         res +=  Math.pow(2,n.length-1-i) 
        }
     }
     return res
  }  
  /*
  the zeroth digit 2 ^0 (1) 
  the first 2^1 (2)
  the second 2^2 (4)
  the third 2^3 (8)
  the fourth 2^4 (16)
  the fifth 2^5 (32)
  the sixth 2^6  (64)
  the seventh  2^7 (128) ...
  */