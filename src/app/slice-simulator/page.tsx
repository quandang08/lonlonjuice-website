import { SliceSimulator, getSlices } from "@slicemachine/adapter-next";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";
import { components } from "@/slices";

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

  const slices = getSlices(searchParams.state);

  return (
    <SliceSimulator background="" zIndex={10}>
      <div className="max-h-[900px]">
        <SliceZone slices={slices} components={components} />
      </div>
    </SliceSimulator>
  );
}
