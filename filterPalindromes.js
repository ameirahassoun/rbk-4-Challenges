Given an array of words (array of strings), return all words that are palindromes.

Input	
words:
[ "word", "Ana", "race car" ]

Output:
[ "Ana", "race car" ]


solution:

function filterPalindromes (words) {
  var result = [];
  for(var i=0; i<words.length; i++){
      var str =""
    for( var j=0; j<words[i].length; j++){
      if(words[i][j] !== " "){
        str=str+words[i][j]
      }
    }
   if(str.toLowerCase() === str.toLowerCase().split("").reverse().join("")){
      result.push(words[i])
    } 
  }
  return result
}