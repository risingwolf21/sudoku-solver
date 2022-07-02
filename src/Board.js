export default function Board() {
const board = [ ['.', '9', '.', '.', '4', '2', '1', '3', '6'], ['.', '.', '.', '9', '6', '.', '4', '8', '5'], ['.', '.', '.', '5', '8', '1', '.', '.', '.'], ['.', '.', '4', '.', '.', '.', '.', '.', '.'], ['5', '1', '7', '2', '.', '.', '9', '.', '.'], ['6', '.', '2', '.', '.', '.', '3', '7', '.'], ['1', '.', '.', '8', '.', '4', '.', '2', '.'], ['7', '.', '6', '.', '.', '.', '8', '1', '.'], ['3', '.', '.', '.', '9', '.', '.', '.', '.'], ];
  return (
    <div style={{margin: "10px"}}>
    {
      board.map((row,x) => {
        return (
        <div style={{display: "flex", "flex-direction": "row"}}>
          {
            row.map((val,y) => field(val,x,y))
          }
        </div>
        );
      })
    }
    </div>
    );
}

const field = (value, x, y) => {
  return (
    <div style={{border: "1px solid black", width: "50px", display: "flex", height: "50px", "align-items": "center", "justify-content": "center"}}>
    {
      value !== "." ?
      <p style={{"font-size": "20px"}}>{value}</p>
      : <input style={{width: "20px", height: "30px", "font-size": "20px"}}/>
    }
    </div>);
}