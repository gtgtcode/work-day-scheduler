import {
  Pin,
  PinDrop,
  PinOutlined,
  PinSharp,
  PushPinOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function PinnedItems() {
  return (
    <Button
      id="pinned-items-container"
      className="relative mx-auto mt-6 h-[40px] w-[95%] rounded-xl bg-zinc-800"
      variant="outlined"
      startIcon={<PushPinOutlined />}
    >
      Pinned Events
    </Button>
  );
}
