import dayjs from "dayjs";
import { useState } from "react";
import DateControl from "./DateControl";
import PinnedItems from "./PinnedItems";
import MarkAllAsDone from "./MarkAllAsDone";
import EraseAll from "./EraseAll";

export default function ControlPanel() {
  return (
    <section className="mt-0 h-screen overflow-auto border-r border-slate-700 bg-zinc-900 p-0 text-center">
      <div id="top-control-container" className="overflow-auto h-screen p-5">
        <h1 className="text-xl font-bold">Work Day Planner</h1>
        <DateControl />
        <PinnedItems />
        <MarkAllAsDone />
        <EraseAll />
      </div>
    </section>
  );
}
