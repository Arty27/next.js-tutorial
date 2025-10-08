"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Opps, Page not found 404 :/</h2>
      <button
        className="p-2 border border-white mt-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Go back to Home Page
      </button>
    </div>
  );
};
export default NotFound;
