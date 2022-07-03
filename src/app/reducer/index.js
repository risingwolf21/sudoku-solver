import { rc2i } from '../../solver.js';

const STATE = {
  board: [
      0, 0, 0,  0, 0, 0,  0, 0, 6,
      0, 3, 0,  0, 7, 1,  0, 4, 0,
      0, 0, 0,  0, 0, 0,  8, 0, 0,

      0, 0, 0,  9, 0, 8,  0, 7, 1,
      1, 0, 3,  0, 0, 0,  0, 0, 0,
      0, 0, 2,  0, 3, 0,  9, 0, 0,

      5, 0, 7,  0, 0, 6,  0, 0, 0,
      2, 0, 0,  0, 0, 0,  7, 0, 0,
      0, 0, 1,  8, 0, 0,  0, 0, 2,
  ]
}
export default (state = STATE, action) => { 
  switch (action.type) { 
    case "changeNumber": {
      return { 
          ...state,
          board: state.board.map((val,index) => index === rc2i(action.x, action.y) ? action.value : val)
        }
    }
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