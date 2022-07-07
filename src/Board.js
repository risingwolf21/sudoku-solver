import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { i2rc } from './solver.js';

const Board = ({dispatch, board}) => {
  return (
    <div style={{ display: "grid", gap: "10px", margin: "10px", "grid-template-columns": "repeat(9, 1fr)"}}>
    {
      board.map((val, x) => {
        let { row, col } = i2rc(x);
        return (
        <div style={{"grid-column": col, "grid-row": row}}>
          {
            field(val, (newVal) => dispatch({type: "changeNumber", x: row, y: col, value: newVal}))
          }
        </div>
        );
      })
    }
    </div>
    );
}

const isPositiveInteger = (str) => { 
  if (typeof str !== 'string') { 
    return false; 
  } 
  const num = Number(str); 
  if (Number.isInteger(num) && num > 0) { return true; 
  } 
  return false; 
}

const field = (value, changeNumber) => {
  
  function onChange(event){
      if(isPositiveInteger(event.target.value) && parseInt(event.target.value) !== 0){
        changeNumber(parseInt(event.target.value));
      } else if(event.target.value === ''){
        changeNumber(0);
      }
  }
  
  return (
    <div style={{border: "1px solid black", width: "28px", display: "flex", height: "28px", "align-items": "center", "justify-content": "center"}}>
    {
      <input maxLength={1} value={value===0?'':value} onChange={onChange} style={{width: "28px", height: "28px", "font-size": "20px", "text-align": "center"}}/>
    }
    </div>);
}

const mapStateToProps = () => createStructuredSelector({ 
  board: state => state.board.board
});

export default connect(mapStateToProps)(Board)