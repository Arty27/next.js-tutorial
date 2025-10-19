// Server component by default
// fetch data inside this component
// access backend resources directly
// secrets can be kept here
"use client";
import { useRouter } from "next/navigation";

// You cannot
// use hooks -> not possible
// cannot use events without use client keyword on top of the file

export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.back();
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-lg font-bold">Home Page @ root level</div>
      <button
        className="border border-white rounded p-2 cursor-pointer mt-2"
        onClick={() => handleNavigate()}
      >
        Navigate to Home Component
      </button>
    </div>
  );
}
