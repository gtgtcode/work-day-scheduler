import React from "react";
import { Button } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

export default function MarkAllAsDone() {
  return (
    <div className="mt-6">
      <Button
        id="pinned-items-container"
        className="relative mx-auto mt-6 h-[40px] w-[95%] rounded-xl bg-zinc-800"
        variant="outlined"
        startIcon={<DoneAllOutlinedIcon />}
      >
        Mark All as Done
      </Button>
    </div>
  );
}
