import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Board = ({dispatch, board}) => {
  let formattedBoard = [];
  let temp = [];
  for(let i = 0; i < board.length; i++){
    if(i % 9 === 0){
      formattedBoard.push(temp);
      temp = [];
    } else {
      temp.push(board[i]);
    }
  }
  return (
    <div style={{margin: "10px"}}>
    {
      formattedBoard.map((row, x) => {
        return (
        <div style={{display: "flex", "flex-direction": "row"}}>
          {
            row.map((val,y) => field(val, (newVal) => dispatch({type: "changeNumber", x: x, y: y, value: newVal})))
          }
        </div>
        );
      })
    }
    </div>
    );
}

const field = (value, changeNumber) => {
  
  function onChange(event){
      changeNumber(parseInt(event.target.value));
  }
  
  return (
    <div style={{border: "1px solid black", width: "50px", display: "flex", height: "50px", "align-items": "center", "justify-content": "center"}}>
    {
      <input maxLength={1} value={value===0?'':value} onChange={onChange} style={{width: "20px", height: "30px", "font-size": "20px"}}/>
    }
    </div>);
}

const mapStateToProps = () => createStructuredSelector({ 
  board: state => state.board.board
});

export default connect(mapStateToProps)(Board)