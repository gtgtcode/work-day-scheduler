import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';

export default function ControlPanel() {
    console.log(dayjs().$d)
    const [date, setDate] = useState(dayjs().$d.toString())
    

    return (
      <section className="p-5 h-screen border-r border-slate-700 text-center bg-zinc-900 mt-0">
        <h1>Work Day Planner</h1>
        <p className='mt-5'>Today is {date}</p>
      </section>
    );
}