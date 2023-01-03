import { rc2i } from '../../solver.js';

const STATE = {
  board: [
      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,

      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,

      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,
      0, 0, 0,  0, 0, 0,  0, 0, 0,
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
