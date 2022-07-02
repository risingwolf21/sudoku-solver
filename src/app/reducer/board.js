
const STATE = {
  board: [
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
  ]
}
export default (state = STATE, action) => { 
  switch (action.type) { 
    case "changeNumber": 
      return 
        { 
          ...state,
          board: state.board.map((row,x)=>{
            return x === action.x ? row.map((col,y)=> {
                return y === action.y ? action.value : col;
            }) : row;
          })
        }; 
    case "Solve": {
      return {
        ...state,
        board: action.board,
      }
    }
    case "Reset": {
      return {
        ...state,
        board: STATE.board,
      }
    }
    default: 
      return state; 
  } 
};