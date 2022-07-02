import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {sudokuSolving} from './solver.js';

const SolveButton = ({dispatch, board}) => {
  
  const clearBoard = () => {
    
    dispatch({type: "Reset"});
  }
  
  const solveBoard = () => {
    let newBoard = sudokuSolving(board);
    dispatch({type: "Solve", board: newBoard});
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