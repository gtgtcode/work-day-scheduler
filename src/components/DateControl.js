import React from "react";
import dayjs from "dayjs";
import TimeDisplay from "./TimeDisplay";
import { Button, IconButton, Box, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function DateControl() {
    const currentDate = dayjs().format('MM/DD/YYYY');

    const [dateSelected, setDate] = React.useState(dayjs());

    console.log(currentDate)

    return (
        <div className="date-control-container">
            <div id="daily-control-container" className="mt-3 p-3 border-t border-b font-bold relative">
                <IconButton aria-label="left-arrow" className="!color-white !absolute left-[10%] top-1/2 -translate-y-1/2">
                    <ArrowLeft className="white-icon"/>
                </IconButton>
                {currentDate}
                <IconButton aria-label="right-arrow" className="!color-white !absolute right-[10%] top-1/2 -translate-y-1/2">
                    <ArrowRight className="white-icon"/>
                </IconButton>
            </div>
            <Box id="navigator-container" className="mx-auto w-[95%] h-[220px] bg-zinc-800 mt-6 rounded-xl relative">
                <div class="!absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]">
                    <p id="navigator-header" className="pb-4 font-bold">
                        Navigator
                    </p>
                    <div id="navigator-divider" className="w-[80%] border-b mx-auto mb-4"></div>
                    <div id="navigator-content">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            value={dateSelected}
                            onChange={(newValue) => {
                            setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </div>
                    <div id="navigator-divider" className="w-[80%] border-b mx-auto mb-4 mt-4"></div>
                    <Button variant="contained" id="navigate-button" className="m-4">Navigate</Button>
                </div>
            </Box>
        </div>
    )
}