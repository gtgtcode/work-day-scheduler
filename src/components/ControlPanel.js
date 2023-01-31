import dayjs from 'dayjs';
import { useState } from 'react';
import DateControl from './DateControl';

export default function ControlPanel() {
    console.log(dayjs())
    const [date, setDate] = useState(dayjs().toString())
    

    return (
      <section className="p-5 h-screen border-r border-slate-700 text-center bg-zinc-900 mt-0">
        <h1 className='text-xl font-bold'>Work Day Planner</h1>
        <DateControl />
      </section>
    );
}