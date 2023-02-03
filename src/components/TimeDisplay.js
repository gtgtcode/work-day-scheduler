import {
  Button,
  ButtonGroup,
  Box,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Close,
  Edit,
  ModeNight,
  OpenInNew,
  WbSunny,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";

export default function TimeDisplay() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [modalType, setModal] = useState("");
  const [timeDate, setTimeDate] = useState("");

  return (
    <section className="col-span-3 h-screen overflow-auto text-center">
      <div id="overlay-container">
        <div>
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
                {modalType}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <WbSunny />
      </div>

      <section
        id="time-container-9"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => {
                setModal("Edit");
                setOpen(true);
              }}
            >
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-10"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-11"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-12"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-1"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-2"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-3"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-4"
        className="container relative mx-auto mt-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <section
        id="time-container-5"
        className="container relative mx-auto mt-5 mb-5 grid h-[150px] w-[90%] grid-cols-6 rounded-[30px] bg-zinc-900"
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
        <div id="note-container" className="relative col-span-5">
          <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<OpenInNew />}>
              View More
            </Button>
          </ButtonGroup>
          <div
            id="note-display"
            className="h-[100px] w-[80%] overflow-hidden text-clip p-5 text-left"
          ></div>
          <div
            id="note-dim-overlay"
            className="absolute top-0 left-0 h-[100px] w-[80%] bg-gradient-to-b from-transparent to-zinc-900"
          ></div>
        </div>
      </section>

      <div className="container mx-auto mb-5">
        <ModeNight />
      </div>
    </section>
  );
}
