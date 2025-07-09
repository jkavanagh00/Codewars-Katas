function isSolved(board) {
  return checkHorizontal(board) ? checkHorizontal(board) : 
  checkVertical(board) ? checkVertical(board) : 
  checkDiagonal(board) ? checkDiagonal(board) :
  checkForRemainingMoves(board) ? -1 :
  0;
}

function checkHorizontal(arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] !== 0 && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] ? result = arr[i][0] : result;
    }
  return result;
}

function checkVertical(arr) {
  let result = false;
  for (let i = 0; i < 3; i++) {
    arr[0][i] !== 0 && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] ? result = arr[0][i] : result;
    }
  return result;
}

function checkDiagonal(arr) {
  let result = false;
  arr[0][0] !== 0 && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] ? result = arr[0][0] : 
  arr[0][2] !== 0 && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] ? result = arr[0][2] :
  result;
  return result;
}

function checkForRemainingMoves(arr) {
  return [...arr[0], ...arr[1], ...arr[2]].includes(0);
}
