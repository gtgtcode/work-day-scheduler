import { Button, ButtonGroup, Card } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ControlPanel from './components/ControlPanel';
import TimeDisplay from './components/TimeDisplay';
import CreateUser from './components/CreateUser';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <main className="App">
      <ThemeProvider theme={darkTheme}>
        <div className='grid grid-cols-4'>
          <CreateUser />
          <ControlPanel />
          <TimeDisplay />
        </div>
      </ThemeProvider>
    </main>
  );
}

export default App;
