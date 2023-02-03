import React from "react";
import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function EraseAll() {
  return (
    <div className="mt-6">
      <Button
        id="pinned-items-container"
        className="relative mx-auto mt-6 h-[40px] w-[95%] rounded-xl bg-zinc-800"
        variant="outlined"
        color="error"
        startIcon={<DeleteOutlineOutlinedIcon />}
      >
        Erase All Events Here
      </Button>
    </div>
  );
}
