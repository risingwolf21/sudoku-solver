import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Board = ({dispatch, board}) => {
  return (
    <div style={{margin: "10px"}}>
    {
      board.map((row,x) => {
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
    if(event.target.value.length === 1){
      changeNumber(event.target.value);
    }
    else if(event.target.value.length === 0){
      changeNumber("");
    }
  }
  
  return (
    <div style={{border: "1px solid black", width: "50px", display: "flex", height: "50px", "align-items": "center", "justify-content": "center"}}>
    {
      <input value={value} onChange={onChange} style={{width: "20px", height: "30px", "font-size": "20px"}}/>
    }
    </div>);
}

const mapStateToProps = () => createStructuredSelector({ 
  board: state => state.board.board
});

export default connect(mapStateToProps)(Board)