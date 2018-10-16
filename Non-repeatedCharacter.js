// Non-repeated Character

// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// Input	Output
// string:
// "ABCDBIRDUP"	"A"
// string:
// "XXXXXXX"	"sorry"
// string:
// "ALABAMA"	"L"
// string:
// "BABA"	"sorry"


function firstNonRepeatedCharacter (string) {
  var obj = {}
  for(var i=0; i<string.length; i++){
    if (obj[string[i]] === undefined){
      obj[string[i]] = 1
    }else{
      obj[string[i]] += 1 
    }
  }
  
     for (var i=0; i<string.length; i++){
    if(obj[string[i]] === 1){
      return string[i]
    }
  }
  return 'sorry'
  
}

