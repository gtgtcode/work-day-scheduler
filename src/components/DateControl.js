import React from "react";
import dayjs from "dayjs";
import TimeDisplay from "./TimeDisplay";
import {
  Button,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function DateControl() {
  const currentDate = dayjs().format("MM/DD/YYYY");

  const [dateSelected, setDate] = React.useState(dayjs());
  const [navigationDate, setNavigationDate] = React.useState(dayjs());

  return (
    <div className="date-control-container">
      <div
        id="daily-control-container"
        className="relative mt-3 border-t border-b p-3 font-bold"
      >
        <IconButton
          aria-label="left-arrow"
          className="!color-white !absolute left-[10%] top-1/2 -translate-y-1/2"
          onClick={() => {
            setDate(dateSelected.subtract(1, "day"));
          }}
        >
          <ArrowLeft className="white-icon" />
        </IconButton>
        <div id="dateSelected">{dateSelected.format("MM/DD/YYYY")}</div>
        <IconButton
          aria-label="right-arrow"
          className="!color-white !absolute right-[10%] top-1/2 -translate-y-1/2"
          onClick={() => {
            setDate(dateSelected.add(1, "day"));
          }}
        >
          <ArrowRight className="white-icon" />
        </IconButton>
      </div>
      <Box
        id="navigator-container"
        className="relative mx-auto mt-6 mb-6 h-[220px] w-[95%] rounded-xl bg-zinc-800"
      >
        <div class="!absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2">
          <p id="navigator-header" className="pb-4 font-bold">
            Navigator
          </p>
          <div
            id="navigator-divider"
            className="mx-auto mb-4 w-[80%] border-b"
          ></div>
          <div id="navigator-content">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={navigationDate}
                onChange={(newValue) => {
                  setNavigationDate(newValue);
                  console.log(
                    navigationDate.format("MM/DD/YYYY") + " - navigationDate"
                  );
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div
            id="navigator-divider"
            className="mx-auto mb-4 mt-4 w-[80%] border-b"
          ></div>
          <Button
            variant="contained"
            id="navigate-button"
            className="m-4"
            onClick={() => {
              setDate(navigationDate);
            }}
          >
            Navigate
          </Button>
        </div>
      </Box>
    </div>
  );
}
