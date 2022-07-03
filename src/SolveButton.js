import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { solve } from './solver.js';

const SolveButton = ({dispatch, board}) => {
  
  const clearBoard = () => {
    dispatch({type: "Reset"});
  }
  
  const solveBoard = () => {
    let data = JSON.parse(JSON.stringify(board));
    if(solve(board)){
      alert(board);
      dispatch({type: "Solve", board: board});
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