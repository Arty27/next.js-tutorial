"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// to use hooks and make it work as Ui component as in react use the above
// keywords

// page.tsx - used as the root file of the profile component/folder
// if page.tsx is not there the route will be given 404 error
const page = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const handleNavigate = () => {
    router.push("/");
  };
  console.log(searchParams.get("name")); // profile?name=artemins o/p= artemis
  console.log(searchParams.getAll("name")); // profile?name=artemis&name=fowl
  console.log(searchParams.has("name")); // true
  return (
    <div>
      <h1> Profile page - Client</h1>
      <button
        className="border border-white rounded p-2 cursor-pointer mt-2"
        onClick={() => handleNavigate()}
      >
        Navigate to Home Component
      </button>
    </div>
  );
};

export default page;
