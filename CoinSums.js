// Coin Sums
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p
// In other words, find all the possible combinations of coins that sum to a given pence value.


// Parameters:

// total (required) - the number of pence

// You've got Helpers! (click to view code)
// coins
// var coins = [1,2,5,10,20,50,100,200];
// Examples
// Input	Output
// total:
// 1	1
// total:
// 17	28

function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200];
  var counter = 0;
  
  
  (function recurse (index, remainder){
    var coin = coins[index]
  // if(index === 0 && remainder % coin === 0){
  //   counter++
  //     return;
  // }
    if(index === 0){
      remainder % coin === 0 && counter++
      return;
    }
    
    while (remainder >= 0){
      recurse(index-1, remainder)
      remainder -= coin
    }
  })(coins.length-1, total)
  return counter
}



