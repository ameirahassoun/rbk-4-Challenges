// **Power set**

// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

// Examples
// Input		Output
// string:
// "a"			[ "", "a" ]
// string:
// "ab"			[ "", "a", "ab", "b" ]
// string:
// "horse"		[ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
// string:
// "obama"		[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]

function powerSet (string) {
  var res = [] , arr = [], binary = [], max
  for (var i=0; i<string.length; i++){
    if(arr.indexOf(string[i]) === -1){
      arr.push(string[i])
    }
  }
  max = Math.pow(2,arr.length)
  arr.sort(function(a,b){
    return a.localeCompare(b);
  })
  arr = arr.reverse()
  for (var i=0; i<max; i++){
    binary.push((i).toString(2).padStart(arr.length, "0"))
  }
  for(var i=0; i<binary.length; i++){
    var item = ''
    for(var j=0;j<binary[i].length; j++){
      if(binary[i][j] === '1'){
        item+=arr[j]
      }
    }
    res.push(item)
  }
  for(var i=0; i<res.length; i++){
    res[i] = res[i].split('').reverse().join('')
  }
  res.sort(function(a,b){
    return a.localeCompare(b);
  })
  return res
}