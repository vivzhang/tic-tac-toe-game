var ticTacToe = function() {
  var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
  };
  var buildBoard = function() {
    return board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
     '---------' + '\n' + 
     board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
     '---------' + '\n' + 
     board[7] + ' | ' + board[8] + ' | ' + board[9];
  };
  console.log(buildBoard())
  var winningBoard = function() {
    return 
    board[1] === board[5] === board[9] !== ' ' || 
    board[3] === board[5] === board[7] !== ' ' || 
    board[1] === board[2] === board[3] !== ' ' || 
    board[4] === board[5] === board[6] !== ' ' || 
    board[7] === board[8] === board[9] !== ' ' ||
    board[1] === board[4] === board[7] !== ' ' || 
    board[2] === board[5] === board[8] !== ' ' || 
    board[3] === board[6] === board[9] !== ' ';
  }
}

ticTacToe();