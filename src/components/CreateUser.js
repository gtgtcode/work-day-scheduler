import React from "react";
import {
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export default function CreateUser() {
  const [startModalStatus, setStartModalStatus] = React.useState(true);
  const [showOnStart, setShowOnStart] = React.useState(true);

  if (startModalStatus) {
    return (
      <Modal open={true}>
        <Box
          id="edit-menu-container"
          className="absolute left-1/2 top-1/2 z-10 h-[600px] w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[30px] bg-zinc-800 p-5"
        >
          <IconButton
            aria-label="close"
            className="!absolute right-2 top-2"
            onClick={() => {
              setStartModalStatus(false);
            }}
          >
            <Close className="text-white" />
          </IconButton>
          <h1 className="text-2xl font-bold">Hello!</h1>
          <p className="pt-5">
            Is this your first time using this application?
          </p>
          <FormGroup>
            <TextField
              className="w-[200px] !border-white"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show on Startup"
            />
          </FormGroup>
        </Box>
      </Modal>
    );
  }
}
