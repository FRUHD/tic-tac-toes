//    GRID
//  0  1  2
//  3  4  5
//  6  7  8

/* WIN POSSIBILITIES
0, 1, 2
3, 4, 5
6, 7, 8
0, 3, 6
1, 4, 7
2, 5, 8
0, 4, 8
2, 4, 6 
*/

//PSEUDOOOOOOO
// Up to 9 turns
// Someone wins OR there are no more empty spaces
// Managing turns, board, space

class Board {
    constructor() {
        //store winningConditions as an array of positions, where 0 is top left, 8 is bottom right
        this.winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,7],[2,4,8]];
        //Board stores player one's moves
        this.playerOneMoves = []; 
        //Board stores player two's moves
        this.playerTwoMoves = []; 
        //Board stores all used moves
        this.usedMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.turnX = true
    }
  
    // Prompt each player's turn:
    // 1. Determine if location is available
    // 2. Give location to player
    playerTurn(location) {

    }
  

  //Just thinking down here - would this work?
  let turnX = true;
    
  const changeTurn = ()=>{
    turnX = !turnX;
  }
  
  //just call changeTurn() at the end of each turn, i.e. when a square/cell is clicked


    // Check if player has won
    determineWin(moves) {
      for (let i=0; i<this.winningConditions.length; i++) {
        let win = this.winningConditions[i].every(v => moves.includes(v));
        if (win) {
          return true
        }
      }
      return false
    }
    
    // testDetermineWin() {
    //   console.log(this.determineWin([0, 4, 5]));
    //   console.log(this.determineWin([0, 4, 1, 2]));
    // }
}
  
  const ourBoard = new Board()
  ourBoard.testDetermineWin()
    
    
   /* Notesssssss
   
      if(this.spaces[0] == this.spaces[1] == this.spaces[2]) {
        return this.spaces[0]
    } else {
      // Draw
  
    this.spaces = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  switch(spaces) {
      case (this.spaces[] == this.spaces[] == this.spaces[]);
        
        break;
      case 
  }
  
    
  let board = [['','',''],['','',''],['','','']]
  
  board.forEach(elem=>{
      if (elem[0]==elem[1]==elem[2]){
          return "horizontal win";
      } else {
        
      }
  })
  
  // Determine whose turn it is
  function playerTurn(){
    const turns = 9;
    let i = 1;
    //There are still spaces to play && No winner yet
    while (!Winner && i<=turns
      i; ;  )
  }
  
  

  
  
  
  
  let gamesMoves = ['x','x','x','0']
    
  //check both Arrays to see if they contain any of those winning conditions;
  
  //write function to check the winningConditions against what positions the player has in their own array
  
  */