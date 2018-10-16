// Alphabet Inventory
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Examples
// Input	Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"	"a:2,b:2,c:2"
// alphabet:
// "x"
// text:
// "Racer X is my friend :)"	"x:1"
// alphabet:
// "123"
// text:
// "o hai"	"no matches"


function alphaCount (alphabet, text) {
  alphabet = alphabet.toLowerCase()
  text = text.toLowerCase()
  var arr = []
  var count = {}
  
  for (var i=0; i<alphabet.length; i++){
    count[alphabet[i]] = 0
  }
  
  // for(var i=0; i<alphabet.length; i++){
  //   for(var j=0; j<text.length; j++){
  //     if(text[j] === alphabet[i]){
  //       count[alphabet[i]]+=1
  //     }
  //   }
  // }

 for(var j=0; j<text.length; j++){
    if(alphabet.includes(text[j])){
        count[text[j]]+=1
    }
  }
  
  for(var l=0; l<alphabet.length; l++){
    if(count[alphabet[l]] > 0){
      arr.push(alphabet[l]+':'+count[alphabet[l]])
    }
  }

  if(arr.length === 0){
   return "no matches"
   }
   return arr.toString()
}
