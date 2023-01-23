import { Button, ButtonGroup, Box, Modal, Typography, IconButton } from "@mui/material";
import { Close, Edit, ModeNight, OpenInNew, WbSunny } from "@mui/icons-material";
import React from "react";

export default function TimeDisplay() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <section className="h-screen text-center col-span-3 overflow-auto">
        <div id="overlay-container"><div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box id="edit-menu-container" className="w-[600px] h-[600px] z-10 bg-zinc-800 rounded-[30px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-5">
                        <IconButton aria-label="close" onClick={handleClose} className="!absolute right-2 top-2">
                            <Close className="text-white"/>
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
        <div className="container mx-auto mt-5"><WbSunny /></div>
        
        <section id="time-container-9" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">9</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">AM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />} onClick={handleOpen}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-10" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">10</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">AM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-11" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">11</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">AM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-12" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">12</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-1" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">1</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-2" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">2</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-3" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">3</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-4" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">4</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <section id="time-container-5" className="container mx-auto relative rounded-[30px] bg-zinc-900 w-[90%] h-[150px] grid grid-cols-6 mt-5 mb-5">
            <div id="time-display" className="col-span-1 border-r border-slate-700 text-center align-middle">
                <div id="top-number" className="relative top-1/2 -translate-y-[90%] text-xl">5</div>
                <div id="ampm-display" className="relative top-1/2 -translate-y-[80%]">PM</div>
            </div>
            <div id="note-container" className="col-span-5 relative">
                <ButtonGroup className="!absolute bottom-2 left-2 !rounded-full">
                    <Button variant="outlined" startIcon={<Edit />}>Edit</Button>
                    <Button variant="outlined" startIcon={<OpenInNew />}>View More</Button>
                </ButtonGroup>
                <div id="note-display" className="w-[80%] h-[100px] text-left text-clip overflow-hidden p-5">
                    
                </div>
                <div id="note-dim-overlay" className="absolute top-0 left-0 w-[80%] h-[100px] bg-gradient-to-b from-transparent to-zinc-900"></div>
            </div>
        </section>

        <div className="container mx-auto mb-5"><ModeNight /></div>

      </section>
    );
}