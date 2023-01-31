import { Modal, Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import React from "react";

export default function EditModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
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
    )
}