import { Button, ButtonGroup, Modal, Typography, Box, IconButton, Input, TextField } from "@mui/material";
import { OpenInNew, ModeNight, WbSunny, Close } from "@mui/icons-material";
import DoneIcon from '@mui/icons-material/Done';
import CreateUser from "./CreateUser";
import DateControl from "./DateControl";
import React from "react";

export default function TimeDisplay() {

    const [editTime, setEditTime] = React.useState("9AM");
    const dateRef = React.useRef(null);

    const [selectedDate, setSelectedDate] = React.useState('');

    React.useEffect(() => {
      const dateElement = document.getElementById('dateSelected').innerHTML;
      console.log(selectedDate);

      if (dateElement) {
        dateRef.current = dateElement;
        setSelectedDate(dateElement);
      }

    }, [selectedDate]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <section className="h-screen text-center col-span-3 overflow-auto">
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          id="edit-menu-container"
          className="absolute left-1/2 top-1/2 z-10 h-[600px] w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[30px] bg-zinc-800 p-5"
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="!absolute right-2 top-2"
          >
            <Close className="text-white" />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {editTime}, {selectedDate}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField className="w-full h-[300px]" id="modal-content" label="Text Content" variant="outlined" multiline rows={12} />
          </Typography>
          <div className="text-center mt-5">
            <ButtonGroup>
              <Button variant="outlined" onClick={() => {let content = document.getElementById("modal-content").value; let outputLog = [editTime, selectedDate, content]; console.log(outputLog); localStorage.setItem("saved-logs", outputLog.toString);}}>Save</Button>
              <Button variant="outlined">Mark as Done</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
      <div id="overlay-container"></div>
      <div className="container mx-auto mt-5">
        <WbSunny />
      </div>

      <section
        id="time-container-9"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            9
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            AM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />} onClick={() => {handleOpen(); setEditTime("9AM"); setSelectedDate(document.getElementById('dateSelected').innerHTML)}}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark As Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-10"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            10
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            AM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />} onClick={() => {handleOpen(); setEditTime("10AM")}}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-11"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            11
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            AM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-12"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            12
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-1"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            1
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-2"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            2
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-3"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            3
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-4"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            4
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-5"
        className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5 mb-5"
      >
        <div
          id="time-display"
          className="col-span-1 border-r border-slate-700 text-center align-middle"
        >
          <div
            id="top-number"
            className="relative top-1/2 -translate-y-[90%] text-xl"
          >
            5
          </div>
          <div
            id="ampm-display"
            className="relative top-1/2 -translate-y-[80%]"
          >
            PM
          </div>
        </div>
        <div id="note-container" className="col-span-5 relative">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View
            </Button>
            <Button variant="outlined" startIcon={<DoneIcon />}>
              Mark as Done
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <div className="container mx-auto mb-5">
        <ModeNight />
      </div>
    </section>
  );
}
