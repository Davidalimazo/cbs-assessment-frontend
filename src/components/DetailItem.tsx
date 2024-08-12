import React from "react";

export default function DetailItem({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <div className="w-[10rem]">{title}:</div>
      <div className="">{value}</div>
    </div>
  );
}
