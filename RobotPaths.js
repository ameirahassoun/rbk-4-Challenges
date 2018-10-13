// **RobotPaths**

// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

// Make your solution work for a grid of any size.

// Parameters:

// n (required) - amount of rows/columns (max 6)

// function makeBoard(n) {
//   var board = [];
//   for (var i = 0; i < n; i++) {
//     board.push([]);
//     for (var j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.togglePiece = function(i, j) {
//     this[i][j] = !this[i][j];
//   }
//   board.hasBeenVisited = function(i, j) {
//     return !!this[i][j];
//   }
//   return board;
// }


// Examples
// Input	Output

// n:
// 1		1

// n:
// 2		2

// n:
// 3		12

function robotPaths (n) {
  var paths = 0
  var board = makeBoard(n)
    
   function makeBoard(n) {
      var board = [];
      for (var i = 0; i < n; i++) {
        board.push([]);
        for (var j = 0; j < n; j++) {
          board[i].push(false);
        }
      }
      board.togglePiece = function(i, j) {
        this[i][j] = !this[i][j];
      }
      board.hasBeenVisited = function(i, j) {
        return !!this[i][j];
      }
      return board;
   }
   
   function findpaths(i,j){
     if(i === n-1 && j===n-1){
       paths++
       return;
     }
     
     if(i<0 || i>=n || j<0 || j>=n || board.hasBeenVisited(i,j)){
       return
     }else{
       board.togglePiece(i,j)
	   findpaths(i,j+1)
	   findpaths(i+1,j)
	   findpaths(i,j-1)
	   findpaths(i-1,j)
	   board.togglePiece(i,j)
     }
   }
  findpaths(0,0)
  return paths
}
