import { Button, ButtonGroup, Card } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ControlPanel from './components/ControlPanel';
import TimeDisplay from './components/TimeDisplay';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <main className="App">
      <div className='grid grid-cols-4'>
        <CreateUser />
        <ControlPanel />
        <TimeDisplay />
      </div>
    </main>
  );
}

export default App;
