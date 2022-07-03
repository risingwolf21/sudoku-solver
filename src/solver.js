function i2rc(index) {
  return { row: Math.floor(index / 9), col: index % 9 };
}

export function rc2i(row, col) {
  return row * 9 + col;
}

function unique(board, index, value) {
    let { row, col } = i2rc(index);
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            let i = rc2i(r, c);
            if (i != index && !board[i] && acceptable(board, i, value)) {
                return false;
            }
        }
    }
    return true;
}

function acceptable(board, index, value) {
    let { row, col } = i2rc(index);

    // if already present on the column, not acceptable
    for (let r = 0; r < 9; ++r)
        if (board[rc2i(r, col)] == value) return false;

    // if already present on the row, not acceptable
    for (let c = 0; c < 9; ++c)
        if (board[rc2i(row, c)] == value) return false;

    // unique by diagonal
    // if (row == col)
    //     for (let r = 0, c = 0; r < 9; ++r, ++c)
    //         if (board[rc2i(r, c)] == value) return false;
    // if (8 - row == col)
    //     for (let r = 0, c = 8; r < 9; ++r, --c)
    //         if (board[rc2i(r, c)] == value) return false;

    // if already present in the same 3x3 square, also not acceptable
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[rc2i(r, c)] == value) return false;
        }
    }

    // we have a "go"
    return true;
}

export function solve(board) {
            let { index, moves } = bestBet(board);
            if (index == null) return true;
            for (let m of moves) {
                board[index] = m;
                if (solve(board)) return true;
            }
            board[index] = 0;
            return false;
        }
        
function bestBet(board) {
  let index, moves, bestLen = 100;
  for (let i = 0; i < board.length; ++i) {
    if (!board[i]) {
      let m = getChoices(board, i);
      if (m.length < bestLen) {
        bestLen = m.length;
        moves = m;
        index = i;
        if (bestLen == 0) break;
      }
    }
  }
  return { index, moves };
}

function getChoices(board, index) {
  let choices = [];
  for (let value = 1; value <= 9; ++value){
    if (acceptable(board, index, value)) {
      if (unique(board, index, value))
        return [ value ];
      else
        choices.push(value);
    }
  }
  return choices;
}