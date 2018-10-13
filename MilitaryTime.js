// **Military Time**

// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

// Examples
// Input	Output
// time:
// "3:00pm"	"15:00"
// time:
// "9:15am"	"09:15"
// time:
// "12:00am"	"00:00"
// time:
// "04:00"	"04:00"


function toMilitary (time) {
  var arr = time.split(':')
  arr[0] = arr[0].padStart(2,0)
  if(arr[1][arr[1].length-2] === 'p'){
    if(arr[0] != '12'){
      arr[0] = Number(arr[0]) + 12  
    }
    arr[1] = arr[1].substr(0,arr[1].length-2)
    return arr.join(":")
  }else if (arr[1][arr[1].length-2] === 'a'){
    if(arr[0] === "12"){
      arr[0] = '00'
    }
    arr[1] = (arr[1]).substr(0,arr[1].length-2)
    return arr.join(":")
  }
  return time
}	




