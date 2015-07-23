var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];


function setSquare(player, row, col) {
    checkerboard[row][col] = player;
}



function getPieceAt(row, col) {
    
      if (checkerboard[row][col] === null){
        return null;
    } else {
        return checkerboard[row][col];
    }
}
 
function setUpRed(){
    for (i = 0; i < checkerboard.length; i +=2){
        checkerboard[0][i] = "R";
        checkerboard[1][i+1] = "R";
        checkerboard[2][i] = "R";
    }
    return checkerboard;
}
   
function setUpBlack(){
    for (i = 0; i < checkerboard.length; i +=2){
        checkerboard [5][i+1] = "B";
        checkerboard[6][i] = "B";
        checkerboard[7][i+1] = "B";
    }
    return checkerboard;
}
    
function clearSpace() {
    return null;
}
function clearRow(x) {
    return x.map(clearSpace);
}

function clearBoard() {
   checkerboard=checkerboard.map(clearRow);
}

var pieces = {
    'red': [[0,0], [0,2], [0,4], [0,6], [1,1], [1,3], [1,5], [1,7], [2,0], [2,2], [2,4], [2,6]],
    'black': [[5,1], [5,3], [5,5], [5,7], [6,0], [6,2], [6,4], [6,6], [7,1], [7,3], [7,5], [7,7]]
};



//setSquare("R", 4, 6);
//setSquare("B", 5, 7);
//getPieceAt(4, 6);
setUpRed();
setUpBlack();
//clearBoard();

console.log(checkerboard);
  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });


