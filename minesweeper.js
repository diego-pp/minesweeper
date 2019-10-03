document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: false,  hidden: true, surroundingMines: 1},
    { row: 0, col: 1, isMine: true, hidden: true}, 
    { row: 0, col: 2, isMine: false, hidden: true}, 
    { row: 0, col: 3, isMine: false, hidden: true},
    { row: 1, col: 0, isMine: false, hidden: true},
    { row: 1, col: 1, isMine: false, hidden: true},
    { row: 1, col: 2, isMine: false, hidden: true},
    { row: 1, col: 3, isMine: true, hidden: true},
    { row: 2, col: 0, isMine: true, hidden: true},
    { row: 2, col: 1, isMine: false, hidden: true},
    { row: 2, col: 2, isMine: false, hidden: true},
    { row: 2, col: 3, isMine: false, hidden: true},
    { row: 3, col: 0, isMine: true, hidden: true},
    { row: 3, col: 1, isMine: false, hidden: true},
    { row: 3, col: 2, isMine: true, hidden: true},
    { row: 3, col: 3, isMine: false, hidden: true}]
    }

  
 

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    document.addEventListener("click", checkForWin);
    document.addEventListener("contextmenu", checkForWin);
  }


  lib.initBoard()
}
//Noise settings here
function noise() {
  var bombExp = new Audio("sounds/birdcollision .mp3")

  for (var i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine && !board.cells[i].hidden)) {
      bombExp.play();
    }
  }
}
document.addEventListener("click", noise)

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
//PSEUDOCODE IN PLAIN ENGLISH FIRST, WHAT I NEED!
//LOOP ISMINE ISMARKED TRUE DEFINE IF and else if ST 
let winner = 0;
for (let i = 0; i < board.cells.length; i++) {
  if (board.cells[i].isMine === true && board.cells[i].isMarked ===true) {
    return
  } else if (!board.cells[i].isMine && board.cells[i].hidden) {
    return
  }
  
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('YoU WiNnNnnN!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  
  let surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let totalCount = 0
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine != false) {
      totalCount ++;
      
    }
    
  }
 return totalCount
}



  