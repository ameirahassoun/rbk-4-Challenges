// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

// Examples
// Input	Output
// string:
// "(x + y) - (4)"	true
// string:
// "(((10 ) ()) ((?)(:)))"	true
// string:
// "(50)("	false
// string:
// ""	true


function isBalanced (string) {
    var count1 =0
    var count2 = 0
  for(var i = 0; i<string.length; i++){
    if (string[i] === "(" ){
      count1+=1
    }
    if( string[i] === ")" ){
      
      if (count1 === count2){
        count2+=2
      }
      count2+=1
    }
  }
  
return (count1 === count2)

}

