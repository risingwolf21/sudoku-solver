import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {sudokuSolving, sudokoSolver} from './solver.js';

const SolveButton = ({dispatch, board}) => {
  
  const clearBoard = () => {
    
    dispatch({type: "Reset"});
  }
  
  const solveBoard = () => {
    let data = JSON.parse(JSON.stringify(board));
    if(sudokoSolver(data)){
      dispatch({type: "Solve", board: data});
    }
    else
      dispatch({type: "Reset"});
  }
  
  return (
    <div>
      <button onClick={solveBoard}>SOLVE!</button>
      <button onClick={clearBoard}>CLEAR!</button>
    </div>
    );
}

const mapStateToProps = () => createStructuredSelector({ 
  board: state => state.board
});

export default connect(mapStateToProps)(SolveButton)