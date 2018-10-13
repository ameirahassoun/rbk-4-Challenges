// **Only Unique**

// Only Unique
// Given a string, remove any characters that are not unique from the string.

// Examples
// Input	Output
// str:
// "abccdefe"	"abdf"
// str:
// "hello there"	"o tr"
// str:
// "xyz"	"xyz"
// str:
// "iiii"	""


function onlyUnique (str) {
  var string = ""
  var obj = {}
  for(var i=0; i<str.length; i++){
    if (obj[str[i]] === undefined){
      obj[str[i]] = 1
    }else{
      obj[str[i]]++
    }
  }
  for (var j=0; j<str.length; j++){
    if (obj[str[j]] === 1 ){
      string += str[j]
    }
  }
  return string
}

// function onlyUnique (str) {
// var string ="";
// for(var i=0; i<str.length; i++) {
// var x =0;
//   for(var j=0; j<str.length; j++) {
//     if(str[i] === str[j]){
//       x+=1;
//     }
//   }
//   if(x === 1){
//     string = string +str[i] 
//   }
// }
// return string;
// }