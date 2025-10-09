"use client";
// This component has to be a client component!
// and name of the file should be error.tsx
// This error component is only specific to this route
import { useEffect } from "react";

const ErrorUIProducts = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Send a report to your error monitoring service
  }, [error]);

  return (
    <div>
      <p className="text-red-600">{error?.message || "An error Occured"}</p>
    </div>
  );
};
export default ErrorUIProducts;
