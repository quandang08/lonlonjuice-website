"use client";

import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { redirect } from "next/navigation";

export default function SliceSimulatorPage({
  searchParams,
}: {
  searchParams: { secret?: string; state?: string };
}) {
  if (
    process.env.SLICE_SIMULATOR_SECRET &&
    searchParams.secret !== process.env.SLICE_SIMULATOR_SECRET
  ) {
    redirect("/");
  }

  const state = searchParams.state ? JSON.parse(searchParams.state) : {};

  const customSliceZone = (props: { slices: any[] }) => (
    <div className="max-h-[900px] overflow-y-auto">
      <SliceZone
        slices={(props.slices ?? []).filter((slice) => typeof slice.id === "string")}
        components={components}
      />
    </div>
  );

  return (
    <SliceSimulator
      background="white"
      zIndex={10}
      state={state}
      sliceZone={customSliceZone}
    />
  );
}
