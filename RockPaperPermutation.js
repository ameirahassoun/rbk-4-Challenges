// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples
// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]


// function rockPaperPermutation (roundCount) {
//   // Write your code here, and
//   // return your final answer.
//   var arr =[]
//   var poss =[ "r", "p", "s" ]
//   var until = Math.pow(3,roundCount)
  
//   for (var i=0 ; i< until ; i++){
    
//     for (var k=0 ; k<until; k++){
//       arr.push(poss[i]+poss[k])
//     }
    
    
//   }
//   return arr
// }


function rockPaperPermutation (roundCount) {
  
  var plays = ["r","p","s"]
  var sequences = []
  
  if (roundCount === 0){
    return []
  }
  
  var makeSequences = function (roundCount,playedSoFar){
    
    if(roundCount === 0){
      sequences.push(playedSoFar)
      return;
    }
    
    for (var i=0 ; i < plays.length ; i++){
      var currentPlay = plays[i];
      makeSequences(roundCount-1,playedSoFar.concat(currentPlay))
    }
    
  }
  
  
    
  makeSequences(roundCount,"")
  return sequences;
  
  
}




// function rockPaperPermutation (roundCount) {
// if(roundCount === 0){
//   return [];
// }
// if(roundCount === 1){
//   return ['r','p','s'];
// }
// var finalResult=[];
// var previousResult=rockPaperPermutation (roundCount-1);
// for(var i=0 ; i<previousResult.length ; i++){
// finalResult.push(previousResult[i]+'r');
// finalResult.push(previousResult[i]+'p');
// finalResult.push(previousResult[i]+'s');
//      }
// return finalResult;
// }


