"use client";

import { useDonate } from "./DonateProvider";

export default function DonateButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openDonate } = useDonate();
  return (
    <button onClick={openDonate} className={className}>
      {children}
    </button>
  );
}
