"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //Optionally log the Error Reporting Service
    console.error("Unexpected Error", error);
  }, [error]);
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong</h2>
      <button
        className="mt-2 rounded-md bg-blue-500 px-4 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Atempt to recover  by trying to re-render the invoices
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
