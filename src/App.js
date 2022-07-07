import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SolveButton from './SolveButton.js';

function App() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Sudoku Solver
          </Typography>
        </ToolBar>
      </AppBar>
      <Board/>
      <SolveButton/>
    </Box>
  );
}

export default App;
