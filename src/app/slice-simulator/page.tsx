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

  return (
    <SliceSimulator background="white" zIndex={10} state={state}>
      <div className="max-h-[900px] overflow-y-auto">
        <SliceZone slices={state?.slices ?? []} components={components} />
      </div>
    </SliceSimulator>
  );
}
