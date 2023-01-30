import React from "react";
import { ReactDOM } from "react";
import { Box, IconButton, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function CreateUser() {

    const [closeStartModal, setCloseStartModal] = React.useState(false);
    const [showOnStart, setShowOnStart] = React.useState(true);

    return(
        <Box id="edit-menu-container" className="w-[600px] h-[600px] z-10 bg-zinc-800 rounded-[30px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-5">
            <IconButton aria-label="close" className="!absolute right-2 top-2">
                    <Close className="text-white"/>
            </IconButton>
            <h1 className="text-2xl font-bold">Hello!</h1>
            <p className="pt-5">Is this your first time using this application?</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Show on Startup" />
            </FormGroup>
        </Box>
    );
}